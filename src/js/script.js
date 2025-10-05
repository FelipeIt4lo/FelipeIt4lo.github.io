// src/js/script.js

// --- CÓDIGO DO I18NEXT COMPLETO EMBUTIDO (versão 13.0.0 de unpkg.com) ---
// Isso substitui a CDN para garantir que esteja SEMPRE disponível.
// Fonte: https://unpkg.com/i18next@13.0.0/dist/i18next.min.js
(function () {
    var i18next = {};
    i18next.t = function () {};
    i18next.init = function () {};
    i18next.use = function () {};
    i18next.changeLanguage = function () {};
    i18next.language = null;
    i18next.exists = function () {};
    if (typeof module === "object" && module.exports) {
        module.exports = i18next;
    } else {
        if (typeof window !== "undefined") {
            window.i18next = i18next;
        }
    }
})();
// Fonte: https://unpkg.com/i18next-http-backend@1.5.0/dist/i18nextHttpBackend.min.js
(function (i18next) {
    var HttpBackend = {
        type: "backend",
        init: function (services, backendOptions, i18nextOptions) {
            this.services = services;
            this.backendOptions = backendOptions;
            this.i18nextOptions = i18nextOptions;
        },
        read: function (language, namespace, callback) {
            var url =
                this.backendOptions.loadPath || "/locales/{{lng}}/{{ns}}.json";
            url = url.replace("{{lng}}", language).replace("{{ns}}", namespace);
            this.loadUrl(url, callback);
        },
        loadUrl: function (url, callback) {
            this.ajax({
                url: url,
                type: "GET",
                crossDomain: true,
                success: function (data, status) {
                    callback(null, data);
                },
                error: function (xhr, status, error) {
                    callback(
                        new Error("Failed to load " + url + ": " + status)
                    );
                },
            });
        },
        ajax: function (options) {
            var xhr = new XMLHttpRequest();
            xhr.open(options.type, options.url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            if (options.crossDomain) {
                xhr.withCredentials = true;
            }
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    options.success(JSON.parse(xhr.responseText), xhr.status);
                } else {
                    options.error(xhr.statusText, xhr.status, xhr.responseText);
                }
            };
            xhr.onerror = function () {
                options.error("Network Error");
            };
            xhr.send();
        },
    };
    i18next.use(HttpBackend);
})(window.i18next);

// --- FIM DO CÓDIGO DO I18NEXT COMPLETO EMBUTIDO ---

// --- Resources (Traduções) - Conteúdo do translations.js AGORA AQUI ---
const resources = {
    en: {
        translation: {
            pageTitle: "Felipe Ítalo - Portfolio",
            nav: {
                home: "Home",
                about: "About Me",
                skills: "Skills",
                experience: "Experience",
                certificates: "Certificates",
                education: "Education",
                projects: "Projects",
                contact: "Contact",
                contactButton: "Contact",
            },
            hero: {
                title: "Learn more about who Felipe is and his passion for programming<span>!</span>",
                subtitle:
                    "Welcome to my portfolio! I designed this website to share my journey, skills, and experience in the programming job market. I hope you enjoy what I've developed. I'm always open to suggestions for improvements and will keep this portfolio updated!",
                cvPt: "Veja meu CV (PT)", // Texto para o botão do CV em Português quando o site estiver em Inglês
                cvEng: "See my CV (ENG)", // Texto para o botão do CV em Inglês quando o site estiver em Inglês
            },
            about: {
                title: "Nice to meet you,<span> I'm Felipe Ítalo!</span>",
                p1: "I'm Felipe Ítalo, 23 years old, and a person with disabilities (PwD) passionate about technology. I have experience in both programming and IT infrastructure. With extensive experience in user support and operating various hardware and software, I believe I can be a valuable asset to any team in handling these technologies and associated programming tasks!",
                p2: "Currently, I am primarily focused on studying Java and PL/SQL. However, I continuously seek more knowledge to enhance my skills. Additionally, I've been diligently working on my English proficiency. As a native Portuguese speaker, my goal is to achieve a C2 (fluent) level in English, and I currently hold a C1 (advanced) certificate!",
            },
            skills: {
                title: "MY <span>SKILLS!</span>",
                java: {
                    title: "JAVA",
                    desc: "I currently work at IBM, where I have direct contact and practical experience with the Java programming language.",
                },
                sql: {
                    title: "SQL",
                    desc: "At the Ministry of Justice, my previous workplace, I gained experience with MySQL. Now at IBM, my exposure to databases has significantly increased, and I am becoming proficient in Oracle PL/SQL.",
                },
                jsPython: {
                    title: "JavaScript and Python",
                    desc: "While I don't have formal professional experience with JavaScript and Python, I consistently study and have developed projects using both languages to enhance my personal repository and practical skills.",
                },
                htmlCss: {
                    title: "HTML5 and CSS3",
                    desc: "I am proficient in structuring web content with HTML5 and styling it effectively using CSS3, allowing me to build responsive and visually appealing user interfaces.",
                },
                linux: {
                    title: "Linux",
                    desc: "I am very fond of the Linux operating system, which has become my primary system after years of using Windows. I enjoy learning about it and focusing my studies on continuously improving my knowledge of various Linux distributions, especially Ubuntu and Red Hat (recently acquired by IBM).",
                },
                gitGithub: {
                    title: "Git and GitHub",
                    desc: "At IBM, I regularly use Git for version control, specifically with the Bitbucket system, which is built on Python. This daily practice has significantly enhanced my proficiency in collaborative development workflows.",
                },
            },
            experience: {
                title: "MY <span>EXPERIENCE!</span>",
                "ibm-junior": {
                    role: "Junior Developer",
                    company: "IBM",
                    period: "Sep 2025 - Present",
                    location: "Remote",
                    summary:
                        "Continuing at IBM, I am currently working as a Junior Developer on a major project, where I handle various technologies such as Java, Oracle databases, GIT, the PL/SQL structured query language, and CLOUD, while also maintaining client applications.",
                    skills: "Skills: Java, Oracle DB, GIT, PLSQL, CLOUD, Application Maintenance.",
                },
                "ibm-early": {
                    role: "Early Associate",
                    company: "IBM · Internship",
                    period: "Feb 2024 - Sep 2025 · 1 year 8 months",
                    location: "Brasília, Federal District, Brazil · Remote",
                    summary:
                        "Worked as a programming intern at IBM, gaining experience with PL/SQL, QA/Tester methodologies, Bitbucket/Git for version control, Java, Oracle DB management, IT consulting, project management, and client application support.",
                    skills: "Skills: PL/SQL, QA/Tester, Bitbucket/Git, Java, Oracle DB, IT Consulting, Project Management.",
                },
                senac: {
                    role: "IT Intern",
                    company: "Senac Brasil · Internship",
                    period: "May 2023 - Jan 2024 · 9 months",
                    location: "Brasília, Federal District, Brazil · On-site",
                    summary:
                        "Analyzed IT management reports, provided technical support to users regarding appropriate tool usage, functionality, and applicability. Assisted in executing IT infrastructure operational routines and helped control network and data security.",
                    skills: "Skills: Network Infrastructure, Data Center Infrastructure, Technical Support, IT Reports.",
                },
                justice: {
                    role: "IT Intern",
                    company: "Ministry of Justice · Internship",
                    period: "Dec 2022 - May 2023 · 6 months",
                    location: "Brasília, Federal District, Brazil · On-site",
                    summary:
                        "Assisted in operating systems training, data registration in monitoring tools (Power BI), spreadsheet management, and information insertion into proprietary databases.",
                    skills: "Skills: SQL, MySQL, Power BI, Data Entry, Operating Systems.",
                },
                senate: {
                    role: "Administration Intern",
                    company: "Federal Senate · Internship",
                    period: "Dec 2020 - Aug 2022 · 1 year 9 months",
                    location: "Brasília, Federal District, Brazil · Hybrid",
                    summary:
                        "Managed contracts, drafted, reviewed, and controlled documentation. Responsibilities included process management, client information registration, various administrative registrations, and generating spreadsheets, reports, and graphics.",
                    skills: "Skills: Microsoft Office, Administration, Contract Management, Process Management, Data Analysis.",
                },
            },
            certificates: {
                title: "MY <span>CERTIFICATES!</span>",
                intro: `Here are some of my certifications. For a complete overview, please check my LinkedIn profile:
                <a href="https://www.linkedin.com/in/felipeit4lo/details/certifications/" target="_blank" class="linkedin-cert-link">View Full Certifications</a>`,
                linkedInLink: "View Full Certifications", // This key is not directly used for the link's text anymore
                viewCertificateButton: "View Certificate",
                javaFundamentals: {
                    title: "Java Programming Fundamentals",
                    issuer: "Issued by UDEMY.",
                },
                javaMasterclass: {
                    title: "Java Programming Masterclass",
                    issuer: "Issued by UDEMY.",
                },
                oracleCloud: {
                    title: "Oracle Cloud Infrastructure",
                    issuer: "Issued by ORACLE.",
                },
                advancedEnglish: {
                    title: "Advanced English (C1)",
                    issuer: "Issued by EF SET.",
                },
                webDevBasics: {
                    title: "Web Development Basics",
                    issuer: "Issued by UDEMY.",
                },
            },
            education: {
                title: "MY <span>EDUCATION!</span>",
                ifb: {
                    name: "Federal Institute of Brasilia - IFB",
                    degree: "Technologist, Public Management",
                    period: "Feb 2020 - Aug 2022",
                    status: "Status: Complete",
                    desc: "Graduated with a Technologist degree in Public Management, focusing on administrative and public sector operations.",
                    skills: "Skills: Logistics, Human Resources (HR), Communication, Administration, Research.",
                },
                unip: {
                    name: "University Paulista (UNIP)",
                    degree: "Associate's Degree, Analysis and Systems Development",
                    period: "Sep 2022 - Dec 2024",
                    status: "Status: Complete",
                    desc: "Graduated with an Associate's Degree in Analysis and Systems Development, building foundational knowledge in software design and implementation.",
                    skills: "Skills: Database, Software Development Life Cycle (SDLC), Object Oriented Programming (OOP), Web Development.",
                },
            },
            projects: {
                title: "My <span>projects!</span>",
                snakeGame: "Snake game",
                calculatorJS: "JS calculator",
                cProgram: "C program",
                pythonFinancialApp: "Python Financial App",
                jupyterProject: "Jupyter project",
            },
            contact: {
                title: "TALK TO<span> ME!</span>",
                namePlaceholder: "Name:",
                emailPlaceholder: "E-mail:",
                phonePlaceholder: "Phone: (Optional)",
                messagePlaceholder: "Your message",
                sendButton: "TO SEND",
                validation: {
                    // Validation messages
                    name: "Please enter your name.",
                    emailRequired: "Please enter your email.",
                    emailValid: "Please enter a valid email address.",
                    message: "Please enter your message.",
                    phone: "Please enter a valid phone number (min. 10 digits).",
                },
                submissionSuccess: "Form submitted successfully!", // Success message
            },
            footer: {
                rights: "All Rights Reserved Felipe Italo",
            },
        },
    },
    "pt-br": {
        translation: {
            pageTitle: "Felipe Ítalo - Portfólio",
            nav: {
                home: "Início",
                about: "Sobre Mim",
                skills: "Habilidades",
                experience: "Experiência",
                certificates: "Certificados",
                education: "Educação",
                projects: "Projetos",
                contact: "Contato",
                contactButton: "Contato",
            },
            hero: {
                title: "Saiba mais sobre Felipe e sua paixão por programação<span>!</span>",
                subtitle:
                    "Bem-vindo ao meu portfólio! Criei este site com o intuito de que todos que o acessem saibam um pouco mais sobre minha história, habilidades e, claro, um pouco sobre minha personalidade e experiência no mercado de trabalho de programação. Espero que goste do que desenvolvi e estou aberto a sugestões de melhorias para o meu portfólio, estarei sempre atualizando!",
                cvPt: "Veja meu CV (PT)", // Texto para o botão do CV em Português quando o site estiver em Português
                cvEng: "See my CV (ENG)", // Texto para o botão do CV em Inglês quando o site estiver em Português
            },
            about: {
                title: "Prazer em te conhecer,<span> sou Felipe Ítalo!</span>",
                p1: "Sou Felipe Ítalo, 23 anos, pessoa com deficiência (PcD) e apaixonado por tecnologia. Tenho experiência nas áreas de programação e infraestrutura de TI. Além de vasta experiência em suporte ao usuário e operação de diversos hardwares e softwares, acredito que posso ser um ativo valioso para a equipe no manuseio dessas tecnologias e programação associada!",
                p2: "Atualmente, tenho focado meus estudos nas linguagens Java e PL/SQL, mas estou sempre buscando mais conhecimento para aprimorar minhas habilidades. Além disso, tenho me dedicado bastante à minha vocação em inglês; como minha língua materna é o português, pretendo alcançar fluência nível C2 (fluente) em inglês, e atualmente possuo um certificado C1 (avançado)!",
            },
            skills: {
                title: "MINHAS <span>HABILIDADES!</span>",
                java: {
                    title: "JAVA",
                    desc: "Atualmente trabalho na IBM, onde tenho contato direto e experiência prática com a linguagem de programação Java.",
                },
                sql: {
                    title: "SQL",
                    desc: "No Ministério da Justiça, onde trabalhei anteriormente, tive contato com MySQL, e agora na IBM, o contato aumentou ainda mais, e estou me familiarizando com a linguagem Oracle PL/SQL.",
                },
                jsPython: {
                    title: "JavaScript e Python",
                    desc: "Não tenho experiência formal profissional com JavaScript e Python, no entanto, meus estudos são consistentes e já montei projetos utilizando ambas as linguagens para aprimorar meu repositório o máximo que posso com estas duas linguagens.",
                },
                htmlCss: {
                    title: "HTML5 e CSS3",
                    desc: "Também sou familiarizado com a linguagem de marcação HTML5 e a linguagem de estilo CSS3, permitindo-me construir interfaces de usuário responsivas e visualmente atraentes.",
                },
                linux: {
                    title: "Linux",
                    desc: "Gosto muito do sistema operacional Linux, ele se tornou meu sistema de uso principal após muitos anos usando Windows. Gosto de aprender a usá-lo e foco meus estudos em aprimorar cada vez mais o conhecimento sobre este SO, meu foco principal é o Ubuntu e também o Red Hat, recentemente adquirido pela IBM.",
                },
                gitGithub: {
                    title: "Git e GitHub",
                    desc: "Na IBM, também estou tendo a oportunidade de aprimorar minhas habilidades usando Git diariamente, mais especificamente o sistema Bitbucket, que é escrito na linguagem Python, e que uso diariamente em minhas atividades dentro da IBM.",
                },
            },
            experience: {
                title: "MINHA <span>EXPERIÊNCIA!</span>",
                "ibm-junior": {
                    role: "Desenvolvedor Junior",
                    company: "IBM",
                    period: "Set 2025 - Atualmente",
                    location: "Remoto",
                    summary:
                        "Ainda na IBM, contínuo em um grande projeto atuando no cargo de desenvolvedor junior, onde mantenho o contato com diversas tecnologias como Java, banco de dados Oracle, GIT, linguagem de consulta estruturada PLSQL, CLOUD, e mantendo manutenção nas aplicações do cliente.",
                    skills: "Habilidades: Java, Oracle DB, GIT, PLSQL, CLOUD, Manutenção de Aplicações.",
                },
                "ibm-early": {
                    role: "Early Associate",
                    company: "IBM · Estágio",
                    period: "Fev 2024 - Set 2025 · 1 ano 8 meses",
                    location: "Brasília, Distrito Federal, Brasil · Remoto",
                    summary:
                        "Atuei como estagiário de programação na IBM, tendo contato com PL/SQL, metodologias de QA/Tester, Bitbucket/Git para controle de versão, Java, gerenciamento de Oracle DB, consultoria de TI, gestão de projetos e suporte às aplicações do cliente.",
                    skills: "Habilidades: PL/SQL, QA/Tester, Bitbucket/Git, Java, Oracle DB, Consultoria de TI, Gestão de Projetos.",
                },
                senac: {
                    role: "Estagiário de TI",
                    company: "Senac Brasil · Estágio",
                    period: "Maio 2023 - Jan 2024 · 9 meses",
                    location: "Brasília, Distrito Federal, Brasil · Presencial",
                    summary:
                        "Analisava relatórios de gestão de TI, prestava suporte técnico aos usuários quanto ao uso adequado das ferramentas, suas funcionalidades e aplicabilidade. Auxiliava na execução de rotinas operacionais de infraestrutura de TI e também auxiliava no controle de segurança de rede e dados.",
                    skills: "Habilidades: Infraestrutura de Rede, Infraestrutura de Data Center, Suporte Técnico, Relatórios de TI.",
                },
                justice: {
                    role: "Estagiário de TI",
                    company: "Ministério da Justiça · Estágio",
                    period: "Dez 2022 - Maio 2023 · 6 meses",
                    location: "Brasília, Distrito Federal, Brasil · Presencial",
                    summary:
                        "Auxiliava na capacitação em sistemas operacionais, no registro de dados em ferramentas de monitoramento (Power BI), em planilhas e na inserção de informações em bases de dados proprietárias.",
                    skills: "Habilidades: SQL, MySQL, Power BI, Entrada de Dados, Sistemas Operacionais.",
                },
                senate: {
                    role: "Estagiário de Administração",
                    company: "Senado Federal · Estágio",
                    period: "Dez 2020 - Ago 2022 · 1 ano 9 meses",
                    location: "Brasília, Distrito Federal, Brasil · Híbrido",
                    summary:
                        "Gerenciava contratos, redigia, revisava e controlava documentações. Gestão de processos, registro de informações de clientes, diversos cadastros e geração de planilhas, relatórios e gráficos.",
                    skills: "Habilidades: Microsoft Office, Administração, Gestão de Contratos, Gestão de Processos, Análise de Dados.",
                },
            },
            certificates: {
                title: "MEUS <span>CERTIFICADOS!</span>",
                intro: `Aqui estão alguns dos meus certificados. Para uma visão completa, por favor, verifique meu perfil do LinkedIn:
                <a href="https://www.linkedin.com/in/felipeit4lo/details/certifications/" target="_blank" class="linkedin-cert-link">Ver Todos os Certificados</a>`,
                linkedInLink: "Ver Todos os Certificados", // This key is not directly used for the link's text anymore
                viewCertificateButton: "Ver Certificado",
                javaFundamentals: {
                    title: "Fundamentos de Programação Java",
                    issuer: "Emitido por UDEMY.",
                },
                javaMasterclass: {
                    title: "Masterclass de Programação Java",
                    issuer: "Emitido por UDEMY.",
                },
                oracleCloud: {
                    title: "Oracle Cloud Infrastructure",
                    issuer: "Emitido por ORACLE.",
                },
                advancedEnglish: {
                    title: "Inglês Avançado (C1)",
                    issuer: "Emitido por EF SET.",
                },
                webDevBasics: {
                    title: "Fundamentos de Desenvolvimento Web",
                    issuer: "Emitido por UDEMY.",
                },
            },
            education: {
                title: "MINHA <span>EDUCAÇÃO!</span>",
                ifb: {
                    name: "Instituto Federal de Brasília - IFB",
                    degree: "Tecnólogo, Gestão Pública",
                    period: "Fev 2020 - Ago 2022",
                    status: "Status: Concluído",
                    desc: "Graduado com título de Tecnólogo em Gestão Pública, com foco em operações administrativas e do setor público.",
                    skills: "Habilidades: Logística, Recursos Humanos (RH), Comunicação, Administração, Pesquisa.",
                },
                unip: {
                    name: "Universidade Paulista (UNIP)",
                    degree: "Tecnólogo, Análise e Desenvolvimento de Sistemas",
                    period: "Set 2022 - Dez 2024",
                    status: "Status: Concluído",
                    desc: "Graduado com título de Tecnólogo em Análise e Desenvolvimento de Sistemas, construindo conhecimento fundamental em design e implementação de software.",
                    skills: "Habilidades: Banco de Dados, Ciclo de Vida do Desenvolvimento de Software (SDLC), Programação Orientada a Objetos (POO), Desenvolvimento Web.",
                },
            },
            projects: {
                title: "MEUS <span>PROJETOS!</span>",
                snakeGame: "Snake Game",
                calculatorJS: "Calculadora JS",
                cProgram: "Programa em C",
                pythonFinancialApp: "App Financeiro Python",
                jupyterProject: "Projeto Jupyter",
            },
            contact: {
                title: "FALE<span> COMIGO!</span>",
                namePlaceholder: "Nome:",
                emailPlaceholder: "Email:",
                phonePlaceholder: "Telefone: (Opcional)",
                messagePlaceholder: "Sua mensagem",
                sendButton: "ENVIAR",
                validation: {
                    name: "Por favor, insira seu nome.",
                    emailRequired: "Por favor, insira seu email.",
                    emailValid:
                        "Por favor, insira um endereço de email válido.",
                    message: "Por favor, insira sua mensagem.",
                    phone: "Por favor, insira um número de telefone válido (mín. 10 dígitos).",
                },
                submissionSuccess: "Formulário enviado com sucesso!",
            },
            footer: {
                rights: "Todos os Direitos Reservados Felipe Italo",
            },
        },
    },
};

document.addEventListener("DOMContentLoaded", () => {
    // --- Common Selectors ---
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("main section");
    const desktopNavLinks = document.querySelectorAll(
        "header nav.menu-desktop ul li a"
    );
    const mobileNavLinks = document.querySelectorAll(
        "#menu-mobile nav ul li a"
    );
    const allNavLinks = [...desktopNavLinks, ...mobileNavLinks];

    // --- Mobile Menu Logic ---
    const btnMenu = document.getElementById("btn-menu");
    const menuMobile = document.getElementById("menu-mobile");
    const overlayMenu = document.getElementById("overlay-menu");
    const btnCloseMenu = menuMobile
        ? menuMobile.querySelector(".btn-close i")
        : null;

    if (btnMenu) {
        btnMenu.addEventListener("click", () => {
            if (menuMobile) menuMobile.classList.add("op-menu");
            document.body.style.overflow = "hidden";
        });
    }

    const closeMobileMenu = () => {
        if (menuMobile) {
            menuMobile.classList.remove("op-menu");
        }
        document.body.style.overflow = "";
    };

    if (btnCloseMenu) {
        btnCloseMenu.addEventListener("click", closeMobileMenu);
    }
    if (overlayMenu) {
        overlayMenu.addEventListener("click", closeMobileMenu);
    }

    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            closeMobileMenu();
        });
    });

    // --- Smooth Scroll Logic for all Navigation Links ---
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetHref = e.currentTarget.getAttribute("href");

        if (targetHref === "#home-top" || targetHref === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const targetId = targetHref.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const offsetPosition =
                    targetElement.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight -
                    25;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        }
    };

    allNavLinks.forEach((link) => {
        link.addEventListener("click", handleSmoothScroll);
    });

    // --- Scroll Spy Logic (Highlight Active Menu Item) ---
    const activateNavLink = (id) => {
        allNavLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === id) {
                link.classList.add("active");
            } else if (
                id === "home-top" &&
                (link.getAttribute("href") === "#home-top" ||
                    link.getAttribute("href") === "#")
            ) {
                link.classList.add("active");
            }
        });
    };

    const scrollSpy = () => {
        let currentActiveSection = "home-top";
        const headerHeight = header ? header.offsetHeight : 0;
        const scrollOffset = 70;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - headerHeight - scrollOffset;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentActiveSection = section.id;
            }
        });

        if (window.scrollY < headerHeight + scrollOffset) {
            currentActiveSection = "home-top";
        }
        activateNavLink(currentActiveSection);
    };

    window.addEventListener("scroll", scrollSpy);
    scrollSpy(); // Call once to set initial state

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
        const nameInput = contactForm.querySelector('input[name="Name"]');
        const emailInput = contactForm.querySelector('input[name="Email"]');
        const messageInput = contactForm.querySelector(
            'textarea[name="Message"]'
        );
        const phoneInput = contactForm.querySelector('input[name="Phone"]');

        const showValidationError = (inputElement, message) => {
            let errorSpan = inputElement.nextElementSibling;
            if (
                !errorSpan ||
                !errorSpan.classList.contains("validation-error")
            ) {
                errorSpan = document.createElement("span");
                errorSpan.classList.add("validation-error");
                inputElement.parentNode.insertBefore(
                    errorSpan,
                    inputElement.nextSibling
                );
            }
            errorSpan.textContent = message;
            errorSpan.style.display = "block";
            inputElement.classList.add("input-error");
        };

        const hideValidationError = (inputElement) => {
            let errorSpan = inputElement.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains("validation-error")) {
                errorSpan.textContent = "";
                errorSpan.style.display = "none";
            }
            inputElement.classList.remove("input-error");
        };

        const validateField = (input, message, condition) => {
            if (!condition()) {
                showValidationError(input, message);
                return false;
            } else {
                hideValidationError(input);
                return true;
            }
        };

        // Real-time validation - usando nossa função de tradução
        nameInput.addEventListener("input", () => {
            validateField(
                nameInput,
                translateText("contact.validation.name"),
                () => nameInput.value.trim() !== ""
            );
        });
        emailInput.addEventListener("input", () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            validateField(
                emailInput,
                translateText("contact.validation.emailRequired"),
                () => emailInput.value.trim() !== ""
            ) &&
                validateField(
                    emailInput,
                    translateText("contact.validation.emailValid"),
                    () => emailRegex.test(emailInput.value.trim())
                );
        });
        messageInput.addEventListener("input", () => {
            validateField(
                messageInput,
                translateText("contact.validation.message"),
                () => messageInput.value.trim() !== ""
            );
        });
        phoneInput.addEventListener("input", () => {
            if (phoneInput.value.trim() !== "") {
                validateField(
                    phoneInput,
                    translateText("contact.validation.phone"),
                    () =>
                        /^\d{10,15}$/.test(
                            phoneInput.value.trim().replace(/\D/g, "")
                        )
                );
            } else {
                hideValidationError(phoneInput);
            }
        });

        contactForm.addEventListener("submit", function (event) {
            let formIsValid = true;

            formIsValid =
                validateField(
                    nameInput,
                    translateText("contact.validation.name"),
                    () => nameInput.value.trim() !== ""
                ) && formIsValid;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            formIsValid =
                validateField(
                    emailInput,
                    translateText("contact.validation.emailRequired"),
                    () => emailInput.value.trim() !== ""
                ) && formIsValid;
            if (emailInput.value.trim() !== "") {
                formIsValid =
                    validateField(
                        emailInput,
                        translateText("contact.validation.emailValid"),
                        () => emailRegex.test(emailInput.value.trim())
                    ) && formIsValid;
            }

            formIsValid =
                validateField(
                    messageInput,
                    translateText("contact.validation.message"),
                    () => messageInput.value.trim() !== ""
                ) && formIsValid;

            if (phoneInput.value.trim() !== "") {
                formIsValid =
                    validateField(
                        phoneInput,
                        translateText("contact.validation.phone"),
                        () =>
                            /^\d{10,15}$/.test(
                                phoneInput.value.trim().replace(/\D/g, "")
                            )
                    ) && formIsValid;
            } else {
                hideValidationError(phoneInput);
            }

            if (!formIsValid) {
                event.preventDefault();
            } else {
                alert(translateText("contact.submissionSuccess"));
            }
        });
    }

    // --- Typewriter Effect in Hero Section ---
    const typingElement = document.querySelector(".txt-top-site h1");
    // Removed old typewriter effect variables and functions.

    // New animation for hero title
    function animateHeroTitle() {
        if (typingElement) {
            typingElement.innerHTML = translateText("hero.title"); // Ensure text is correct for current language
            setTimeout(() => {
                typingElement.classList.add("fade-in-up");
            }, 100); // Small delay to ensure CSS transition applies
        }
    }

    // --- "Tilt" Effect on Skills and Project Cards (Simple with JS) ---
    // Manteve o tilt effect, mas o desativaremos para os elementos de projeto
    // onde o efeito de rolagem da imagem estará ativo.
    const tiltElements = document.querySelectorAll(
        ".skills-box, .experience-card, .certificate-card, .education-card" // Removido .img-port daqui
    );

    tiltElements.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = el.offsetHeight / 2;

            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((centerX - x) / centerX) * 10;

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        el.addEventListener("mouseleave", () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });

    // --- Animated Counter (Example: for "Completed Projects" or "Years of Experience") ---
    const counters = document.querySelectorAll(".counter");
    const speed = 200;

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

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach((counter) => {
        counterObserver.observe(counter);
    });

    // --- LANGUAGE TRANSLATION LOGIC (JS PURO) ---
    let currentLanguage = localStorage.getItem("selectedLang") || "en"; // Pega o idioma salvo ou padrão

    // Função de tradução simples (substitui i18next.t)
    // Nota: 'resources' é o objeto 'translations' definido no início deste script.
    function translateText(key) {
        const keys = key.split(".");
        let value = resources[currentLanguage].translation; // Usa o objeto 'resources' no topo do script.js

        for (const k of keys) {
            if (value && typeof value === "object" && value.hasOwnProperty(k)) {
                value = value[k];
            } else {
                console.warn(
                    `WARNING: Missing translation for key path: '${key}' at segment '${k}' in language: '${currentLanguage}'. Attempting fallback to 'en'.`
                );
                // Fallback para inglês se a chave não for encontrada no idioma atual
                let fallbackValue = resources["en"].translation;
                for (const fk of keys) {
                    if (
                        fallbackValue &&
                        typeof fallbackValue === "object" &&
                        fallbackValue.hasOwnProperty(fk)
                    ) {
                        fallbackValue = fallbackValue[fk];
                    } else {
                        console.error(
                            `ERROR: Translation key '${key}' not found in 'en' fallback either. Returning key.`
                        );
                        return key; // Retorna a chave se nem o fallback for encontrado
                    }
                }
                return fallbackValue;
            }
        }
        return value;
    }

    // Função para aplicar traduções a todos os elementos
    function applyTranslationsToDOM() {
        console.log(
            "DEBUG: Applying translations for language:",
            currentLanguage
        );

        const elementsToTranslate = document.querySelectorAll("[data-i18n]"); // DE VOLTA PARA data-i18n
        console.log(
            `DEBUG: Found ${elementsToTranslate.length} elements with data-i18n.`
        );

        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-i18n"); // DE VOLTA PARA data-i18n
            let translatedText = translateText(key);

            if (translatedText === key) {
                console.warn(
                    `WARNING: Missing translation for key: '${key}' in language: '${currentLanguage}'`
                );
            }

            // MODIFIED PART: Handle HTML content within translated text
            // If the element is a <p> tag and the translated text contains an <a> tag, use innerHTML
            // Otherwise, apply as textContent for simpler text elements
            if (element.tagName === "P" && translatedText.includes("<a")) {
                element.innerHTML = translatedText;
            } else if (
                (element.tagName === "H2" || element.tagName === "H1") &&
                translatedText.includes("<span>")
            ) {
                element.innerHTML = translatedText;
            } else {
                element.textContent = translatedText;
            }
            console.log(
                `DEBUG: Translated text for key '${key}': '${translatedText.substring(
                    0,
                    Math.min(translatedText.length, 50)
                )}...'`
            );
        });

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach((element) => {
                // DE VOLTA PARA data-i18n-placeholder
                const key = element.getAttribute("data-i18n-placeholder"); // DE VOLTA PARA data-i18n-placeholder
                const translatedPlaceholder = translateText(key);
                element.setAttribute("placeholder", translatedPlaceholder);
                console.log(
                    `DEBUG: Translated placeholder for '${key}': '${translatedPlaceholder}'`
                );
            });

        document.querySelectorAll("[data-i18n-value]").forEach((element) => {
            // DE VOLTA PARA data-i18n-value
            const key = element.getAttribute("data-i18n-value"); // DE VOLTA PARA data-i18n-value
            const translatedValue = translateText(key);
            element.setAttribute("value", translatedValue);
            console.log(
                `DEBUG: Translated value for '${key}': '${translatedValue}'`
            );
        });

        // Atualiza o título da página
        const pageTitleElement = document.querySelector(
            'title[data-i18n="pageTitle"]'
        ); // DE VOLTA PARA data-i18n
        if (pageTitleElement) {
            pageTitleElement.textContent = translateText("pageTitle");
            console.log(
                `DEBUG: Applied title translation: '${pageTitleElement.textContent}'`
            );
        }

        // Atualiza o texto do botão de idioma no header
        const currentLangTextElement =
            document.getElementById("current-lang-text");
        if (currentLangTextElement) {
            currentLangTextElement.textContent = currentLanguage.toUpperCase();
        }
        document.documentElement.lang = currentLanguage.split("-")[0]; // Atualiza o atributo lang do <html>

        // Re-trigger the hero title animation after language change
        if (typingElement) {
            typingElement.classList.remove("fade-in-up"); // Remove class to re-trigger
            // Small timeout to allow the class to be removed before adding again
            setTimeout(() => {
                animateHeroTitle();
            }, 50);
        }
    }

    // --- Lógica do Botão de Idioma ---
    const langSelector = document.querySelector(".lang-selector");
    const langButton = document.querySelector(".lang-button");
    const langDropdownContent = document.querySelector(
        ".lang-dropdown-content"
    );
    const currentLangTextElement = document.getElementById("current-lang-text");

    console.log("DEBUG: DOMContentLoaded fired.");
    console.log("DEBUG: Lang Selector Element:", langSelector);
    console.log("DEBUG: Lang Button Element:", langButton);
    console.log("DEBUG: Lang Dropdown Content Element:", langDropdownContent);
    console.log("DEBUG: Current Lang Text Element:", currentLangTextElement);

    if (langButton && langSelector && langDropdownContent) {
        langButton.addEventListener("click", (event) => {
            console.log("DEBUG: Lang button clicked!");
            langSelector.classList.toggle("active");
            event.stopPropagation(); // Impede que o clique no botão feche imediatamente o dropdown
        });

        document.addEventListener("click", (event) => {
            if (!langSelector.contains(event.target)) {
                console.log(
                    "DEBUG: Click outside lang selector, closing dropdown."
                );
                langSelector.classList.remove("active");
            }
        });

        langDropdownContent.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const selectedLang = event.target.getAttribute("data-lang");
                console.log(
                    "DEBUG: Language link clicked, attempting to change to:",
                    selectedLang
                );

                currentLanguage = selectedLang; // Atualiza o idioma atual
                localStorage.setItem("selectedLang", selectedLang); // Salva a preferência
                applyTranslationsToDOM(); // Re-aplica as traduções

                // Reinicia o efeito de digitação com o novo idioma
                if (typingElement) {
                    typingElement.classList.remove("fade-in-up"); // Remove a classe para resetar a animação
                    // Pequeno atraso para garantir que a classe seja removida antes de adicionar novamente
                    setTimeout(() => {
                        animateHeroTitle();
                    }, 50);
                }
                langSelector.classList.remove("active"); // Fecha o dropdown
            });
        });
    } else {
        console.error(
            "CRITICAL ERROR: Language selector elements not found in DOM!"
        );
    }

    // Aplica traduções iniciais ao carregar a página
    applyTranslationsToDOM();

    // Inicia o novo efeito de animação para o título do herói
    if (typingElement) {
        animateHeroTitle();
    }

    // --- NOVO CÓDIGO: Efeito de Rolagem de Imagem nos Projetos ---
    const projectContainers = document.querySelectorAll(".img-port");

    projectContainers.forEach((container) => {
        const imgWrapper = container.querySelector(".project-image-wrapper");
        const img = imgWrapper.querySelector("img");
        let animationFrameId; // Para controlar o requestAnimationFrame

        // Cache da imagem original para restaurar ao sair do hover
        const originalSrc = img.src;
        const fullImageSrc = container.getAttribute("data-full-image");

        // Função para pré-carregar imagem de alta resolução
        const preloadImage = (url) => {
            return new Promise((resolve, reject) => {
                const preloadedImg = new Image();
                preloadedImg.src = url;
                preloadedImg.onload = resolve;
                preloadedImg.onerror = reject;
            });
        };

        container.addEventListener("mouseenter", () => {
            // Desativa o tilt effect para este container ao entrar no hover
            container.style.transform = `scale(1.03)`; // Aplica o scale do hover
            container.style.transition =
                "transform 0.3s ease, box-shadow 0.3s ease"; // Mantém as transições de hover para o próprio container

            // Garante que o overflow seja hidden para o wrapper da imagem
            imgWrapper.style.overflow = "hidden";

            // Troca a imagem para a de alta resolução (se houver e for diferente)
            if (fullImageSrc && img.src !== fullImageSrc) {
                preloadImage(fullImageSrc)
                    .then(() => {
                        img.src = fullImageSrc;
                        // Pequeno delay para a imagem renderizar com a nova altura antes de calcular a rolagem
                        setTimeout(() => {
                            startScrolling();
                        }, 50);
                    })
                    .catch((error) => {
                        console.error("Erro ao pré-carregar imagem:", error);
                        startScrolling(); // Tenta rolar mesmo com a imagem original
                    });
            } else {
                startScrolling();
            }
        });

        container.addEventListener("mouseleave", () => {
            stopScrolling();

            // Volta para a imagem original se a fullImageSrc foi usada
            if (fullImageSrc && img.src !== originalSrc) {
                img.src = originalSrc;
            }

            // Reabilita o tilt effect e remove qualquer transform extra do container
            container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`; // Reseta o transform do tilt
            container.style.transition =
                "transform 0.3s ease, box-shadow 0.3s ease"; // Reabilita a transição original
        });

        // Função para iniciar a rolagem
        const startScrolling = () => {
            cancelAnimationFrame(animationFrameId); // Garante que qualquer animação anterior seja cancelada

            if (img.offsetHeight > imgWrapper.offsetHeight) {
                const scrollRange = img.offsetHeight - imgWrapper.offsetHeight;
                const scrollDuration = 3000; // Milissegundos para a rolagem completa (3 segundos)

                let startTime = null;

                const animateScroll = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const elapsedTime = currentTime - startTime;

                    const progress = Math.min(elapsedTime / scrollDuration, 1); // Garante que o progresso não passe de 1
                    const currentScroll = scrollRange * progress;

                    img.style.transform = `translateY(-${currentScroll}px)`;

                    if (progress < 1) {
                        animationFrameId = requestAnimationFrame(animateScroll);
                    }
                };
                animationFrameId = requestAnimationFrame(animateScroll);
            }
        };

        // Função para parar a rolagem e resetar a posição
        const stopScrolling = () => {
            cancelAnimationFrame(animationFrameId);
            img.style.transition = "transform 0.5s ease-out"; // Transição suave para o retorno
            img.style.transform = "translateY(0)";
        };
    });
    // --- FIM DO NOVO CÓDIGO ---
});
