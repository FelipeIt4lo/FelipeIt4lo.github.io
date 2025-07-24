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
        // Optional parameters
        direction: "horizontal", // 'horizontal' ou 'vertical'
        loop: true, // Loop infinito do carrossel

        // Configura o número de slides por visualização
        slidesPerView: 1, // Padrão: 1 slide visível
        spaceBetween: 30, // Espaçamento entre os slides (em pixels)

        // If we need pagination (bolinhas)
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Permite clicar nas bolinhas para navegar
        },

        // Navigation arrows (setas)
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // Autoplay (opcional: faz o carrossel avançar automaticamente)
        autoplay: {
            delay: 4000, // 4 segundos
            disableOnInteraction: false, // Não para o autoplay se o usuário interagir
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            // when window width is >= 1024px
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

            // Funções de validação e feedback
            const validateField = (input, message, condition) => {
                if (!condition()) {
                    showValidationError(input, message);
                    isValid = false;
                } else {
                    hideValidationError(input);
                }
            };

            // Validação do Nome
            validateField(
                nameInput,
                "Please enter your name.",
                () => nameInput.value.trim() !== ""
            );

            // Validação do Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            validateField(
                emailInput,
                "Please enter your email.",
                () => emailInput.value.trim() !== ""
            );
            if (isValid && emailInput.value.trim() !== "") {
                // Re-check if valid to prevent multiple errors
                validateField(
                    emailInput,
                    "Please enter a valid email address.",
                    () => emailRegex.test(emailInput.value.trim())
                );
            }

            // Validação da Mensagem
            validateField(
                messageInput,
                "Please enter your message.",
                () => messageInput.value.trim() !== ""
            );

            // Validação Opcional do Telefone
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
                hideValidationError(phoneInput); // Esconder erro se o campo opcional estiver vazio
            }

            if (!isValid) {
                event.preventDefault(); // Impede o envio do formulário se houver erros
            } else {
                alert(
                    'Form submitted successfully! (Note: Actual email sending depends on your form\'s "action" attribute)'
                );
                // Opcional: contactForm.submit(); se a ação for para um backend
            }
        });
    }

    function showValidationError(inputElement, message) {
        let errorSpan = inputElement.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("validation-error")) {
            errorSpan = document.createElement("span");
            errorSpan.classList.add("validation-error");
            // Inserir antes do próximo irmão (ou no final se não houver)
            inputElement.parentNode.insertBefore(
                errorSpan,
                inputElement.nextSibling
            );
        }
        errorSpan.textContent = message;
        errorSpan.style.color = "#ff6b6b";
        errorSpan.style.fontSize = "0.85em";
        errorSpan.style.marginTop = "5px";
        errorSpan.style.marginBottom = "5px"; // Adicionado para espaçamento
        errorSpan.style.display = "block";
    }

    function hideValidationError(inputElement) {
        let errorSpan = inputElement.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains("validation-error")) {
            errorSpan.remove();
        }
    }

    // --- Light/Dark Mode Toggle (Implementação opcional) ---
    // Você precisaria de um botão no HTML para isso, por exemplo:
    // <button id="theme-toggle">Toggle Theme</button>
    // E classes CSS para o tema escuro/claro, ex: body.light-theme { ... }
    const themeToggleBtn = document.getElementById("theme-toggle"); // Adicione este ID a um botão no HTML
    if (themeToggleBtn) {
        const currentTheme = localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : null;

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme); // Aplica o tema salvo
        } else {
            // Detecta preferência do sistema, se não houver tema salvo
            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
            }
        }

        themeToggleBtn.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            if (theme === "dark") {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            }
        });
    }
});
