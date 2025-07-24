document.addEventListener("DOMContentLoaded", () => {
    // --- Seletores Comuns ---
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("main section");
    const desktopNavLinks = document.querySelectorAll(
        "header nav.menu-desktop ul li a"
    );
    const mobileNavLinks = document.querySelectorAll(
        "#menu-mobile nav ul li a"
    );
    const allNavLinks = [...desktopNavLinks, ...mobileNavLinks]; // Juntando todos os links de navegação

    // --- Menu Mobile Logic ---
    const btnMenu = document.getElementById("btn-menu");
    const menuMobile = document.getElementById("menu-mobile");
    const overlayMenu = document.getElementById("overlay-menu");
    const btnCloseMenu = menuMobile.querySelector(".btn-close i");

    btnMenu.addEventListener("click", () => {
        menuMobile.classList.add("op-menu");
    });

    btnCloseMenu.addEventListener("click", () => {
        menuMobile.classList.remove("op-menu");
    });

    overlayMenu.addEventListener("click", () => {
        menuMobile.classList.remove("op-menu");
    });

    // Fechar menu mobile ao clicar em um link e rolar suavemente
    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            menuMobile.classList.remove("op-menu");
            // O scroll suave é gerenciado abaixo pela função handleSmoothScroll
        });
    });

    // --- Smooth Scroll Logic for all Navigation Links ---
    const handleSmoothScroll = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetHref = e.currentTarget.getAttribute("href");

        if (targetHref === "#home-top" || targetHref === "#") {
            // Se for o link Home ou um link vazio, rola para o topo da página
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            // Para outras seções, calcula o offset e rola
            const targetId = targetHref.substring(1); // Remove o '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0; // Pega a altura do cabeçalho
                // Calcula a posição do elemento menos a altura do cabeçalho e um pequeno offset
                const offsetPosition =
                    targetElement.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight -
                    20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    allNavLinks.forEach((link) => {
        link.addEventListener("click", handleSmoothScroll);
    });

    // --- Scroll Spy Logic (Highlight Active Menu Item) ---
    const activateNavLink = (id) => {
        allNavLinks.forEach((link) => {
            link.classList.remove("active"); // Remove a classe 'active' de todos os links

            // Adiciona a classe 'active' ao link correspondente à seção visível
            if (link.getAttribute("href").substring(1) === id) {
                link.classList.add("active");
            } else if (
                id === "home-top" &&
                (link.getAttribute("href") === "#home-top" ||
                    link.getAttribute("href") === "#")
            ) {
                // Caso especial para o link Home quando no topo
                link.classList.add("active");
            }
        });
    };

    const scrollSpy = () => {
        let currentActiveSection = "home-top"; // Default para quando estiver no topo ou entre seções

        sections.forEach((section) => {
            const sectionTop =
                section.offsetTop - (header ? header.offsetHeight : 0) - 50; // Offset para ativação
            const sectionBottom = sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentActiveSection = section.id;
            }
        });

        // Caso especial para a seção topo, se o scroll estiver muito acima
        if (
            window.scrollY <
            (sections.length > 0
                ? sections[0].offsetTop - (header ? header.offsetHeight : 0)
                : 100)
        ) {
            currentActiveSection = "home-top";
        }

        activateNavLink(currentActiveSection);
    };

    window.addEventListener("scroll", scrollSpy);
    scrollSpy(); // Chama uma vez para definir o estado inicial

    // --- Animate On Scroll (AOS) Initialization ---
    AOS.init({
        duration: 1000,
        once: true,
    });

    // --- Swiper.js Initialization for Projects Carousel ---
    const swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    // --- Form Validation ---
    const contactForm = document.querySelector(".contactme form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            let isValid = true;
            const nameInput = contactForm.querySelector('input[name="Name"]');
            const emailInput = contactForm.querySelector('input[name="Email"]');
            const messageInput = contactForm.querySelector(
                'textarea[name="Message"]'
            );
            const phoneInput = contactForm.querySelector('input[name="Phone"]');

            const validateField = (input, message, condition) => {
                if (!condition()) {
                    showValidationError(input, message);
                    isValid = false;
                } else {
                    hideValidationError(input);
                }
            };

            validateField(
                nameInput,
                "Please enter your name.",
                () => nameInput.value.trim() !== ""
            );

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            validateField(
                emailInput,
                "Please enter your email.",
                () => emailInput.value.trim() !== ""
            );
            if (isValid && emailInput.value.trim() !== "") {
                validateField(
                    emailInput,
                    "Please enter a valid email address.",
                    () => emailRegex.test(emailInput.value.trim())
                );
            }

            validateField(
                messageInput,
                "Please enter your message.",
                () => messageInput.value.trim() !== ""
            );

            if (phoneInput.value.trim() !== "") {
                validateField(
                    phoneInput,
                    "Please enter a valid phone number (min 10 digits).",
                    () =>
                        /^\d{10,15}$/.test(
                            phoneInput.value.trim().replace(/\D/g, "")
                        )
                );
            } else {
                hideValidationError(phoneInput);
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                alert(
                    'Form submitted successfully! (Note: Actual email sending depends on your form\'s "action" attribute)'
                );
            }
        });
    }

    function showValidationError(inputElement, message) {
        let errorSpan = inputElement.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("validation-error")) {
            errorSpan = document.createElement("span");
            errorSpan.classList.add("validation-error");
            inputElement.parentNode.insertBefore(
                errorSpan,
                inputElement.nextSibling
            );
        }
        errorSpan.textContent = message;
        errorSpan.style.color = "#ff6b6b";
        errorSpan.style.fontSize = "0.85em";
        errorSpan.style.marginTop = "5px";
        errorSpan.style.marginBottom = "5px";
        errorSpan.style.display = "block";
    }

    function hideValidationError(inputElement) {
        let errorSpan = inputElement.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains("validation-error")) {
            errorSpan.remove();
        }
    }

    // --- Efeito de Digitação na Hero Section (Typewriter Effect) ---
    const typingElement = document.querySelector(".txt-top-site h1");
    const originalText =
        "Learn more about who Felipe is and his passion for programming!";
    let charIndex = 0;
    const typingSpeed = 70; // Velocidade em ms por caractere
    const deleteSpeed = 30; // Velocidade em ms para apagar
    const delayBetweenTexts = 1000; // Atraso entre terminar de digitar e começar a apagar (ou reiniciar)

    function typeWriterEffect() {
        if (charIndex < originalText.length) {
            typingElement.innerHTML += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriterEffect, typingSpeed);
        } else {
            // Se o texto terminou de digitar, espere um pouco e então comece a apagar
            setTimeout(eraseText, delayBetweenTexts);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typingElement.innerHTML = originalText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, deleteSpeed);
        } else {
            // Se o texto foi completamente apagado, reinicie o efeito
            typingElement.innerHTML = ""; // Garante que esteja vazio
            charIndex = 0;
            setTimeout(typeWriterEffect, typingSpeed);
        }
    }

    // Iniciar o efeito de digitação após um pequeno delay para carregar a página
    setTimeout(() => {
        typingElement.innerHTML = ""; // Limpa o texto inicial para o efeito
        typeWriterEffect();
    }, 500); // Começa após 0.5 segundo

    // --- Cursor Personalizado (Custom Cursor) ---
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // Efeitos no cursor ao interagir com elementos clicáveis
    document
        .querySelectorAll(
            "a, button, .img-port, .skills-box, .swiper-button-prev, .swiper-button-next, .swiper-pagination-bullet"
        )
        .forEach((el) => {
            el.addEventListener("mouseenter", () => {
                cursor.classList.add("grow");
            });
            el.addEventListener("mouseleave", () => {
                cursor.classList.remove("grow");
            });
        });

    // --- Efeito de "Tilt" nos Cards de Habilidades e Projetos (Simples com JS) ---
    const tiltElements = document.querySelectorAll(".skills-box, .img-port");

    tiltElements.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10; // Ajuste o divisor para mais ou menos tilt
            const rotateY = (centerX - x) / 10; // Ajuste o divisor

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });

        el.addEventListener("mouseleave", () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`; // Reset
        });
    });

    // --- Contador Animado (Exemplo: para "Projetos Concluídos" ou "Anos de Experiência") ---
    // Você precisaria de um elemento no HTML com uma classe específica, ex: <span class="counter" data-target="15">0</span>
    // E garantir que ele esteja em uma seção observada pelo Scroll Spy ou que você crie um Observer específico
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // The lower the speed, the faster the count

    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let current = 0;

        const updateCount = () => {
            const increment = target / speed;
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCount, 1);
            } else {
                counter.textContent = target;
            }
        };
        updateCount();
    };

    // Usar Intersection Observer para animar quando o elemento estiver visível
    const counterObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        { threshold: 0.5 }
    ); // Quando 50% do elemento estiver visível

    counters.forEach((counter) => {
        counterObserver.observe(counter);
    });
});
