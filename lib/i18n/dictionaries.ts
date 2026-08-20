import type { Locale } from "./config";

/**
 * Textes d'interface qui ne vivent pas dans `data/portfolio.<locale>.json`
 * (libellés de boutons, labels de formulaire, messages d'erreur, métadonnées SEO...).
 *
 * Le dictionnaire anglais sert de référence : le type `Dictionary` en est dérivé,
 * donc toute clé manquante côté français est signalée à la compilation.
 */
const en = {
    common: {
        downloadCv: "Download my CV",
        education: "Education",
        languages: "Languages",
        interests: "Interests",
        githubContributions: "My GitHub contributions",
        footer: "Built with passion using Next.js & Tailwind CSS.",
        languageSwitch: "Switch language",
    },
    home: {
        projectsIntro:
            "A selection of my recent work. Browse the list to discover the interfaces, technical architectures and features I have built.",
    },
    about: {
        badge: "About me",
        titleLead: "Let's get to",
        titleHighlight: "know each other.",
        heading: "Who I am and what I do",
        goal:
            "My goal is to build digital solutions that are both performant and beautiful. Whether it means structuring a robust database or designing a smooth user interface, I approach every project with the same rigour and curiosity.",
    },
    projects: {
        intro:
            "A selection of my recent work. Browse the list to discover the interfaces, technical architectures and features I have built.",
    },
    contact: {
        badge: "Contact",
        titleLead: "Let's bring your",
        titleHighlight: "ideas to life.",
        intro:
            "Whether it is a job opportunity, a web application project, or simply a chat about development... I'm all ears!",
        phone: "Phone",
        location: "Location",
        languages: "Languages",
        form: {
            nameLabel: "Full name",
            namePlaceholder: "John Doe",
            emailLabel: "Email address",
            emailPlaceholder: "john@example.com",
            subjectLabel: "Subject",
            subjectPlaceholder: "SaaS project proposal...",
            messageLabel: "Message",
            messagePlaceholder: "Tell me about your idea here...",
            captchaMissingConfig: "Missing configuration: NEXT_PUBLIC_TURNSTILE_SITE_KEY not found.",
            captchaRequired: "Captcha validation required...",
            submitting: "Sending...",
            submit: "Send message",
            successFallback: "Your message has been sent!",
            errorFallback: "Something went wrong while sending.",
            unexpectedError: "An unexpected error occurred.",
        },
    },
    testimonials: {
        previous: "Previous testimonial",
        next: "Next testimonial",
        goTo: "Go to testimonial",
    },
    terminal: {
        welcome: "Welcome to Quentin's terminal! Type 'help' to see the available commands.",
        help: {
            help: "Show this list of commands",
            ls: "List the available files and folders",
            cat: "Print the content of a file (e.g. cat about.txt)",
            about: "Who am I?",
            skills: "See my main tech stack",
            contact: "How to reach me",
            whoami: "Show the current user",
            date: "Show the system date and time",
            clear: "Clear the terminal",
            sudo: "???",
        },
        about:
            "Hello! I'm Quentin, a Full-Stack & UI/UX developer based in Abidjan. I'm passionate about crafting smooth interfaces and robust systems.",
        skills:
            "► Frontend: React, Next.js, Vue, Tailwind\n► Backend: Nest.js, Python, PostgreSQL\n► DevOps: Docker, Vercel, Git",
        sudo: "nice try... but you don't have root privileges here! (;",
        notFound: "command not found",
        notFoundHint: "Type 'help' for the list.",
    },
    notFound: {
        badge: "Error 404",
        title: "Page not found!",
        description:
            "Oops! It looks like the page you are looking for does not exist or has been moved. Don't worry though, you can head back home to explore my projects.",
        backHome: "Back to home",
    },
    blog: {
        badge: "Digital Garden",
        titleLead: "Articles &",
        titleHighlight: "Resources",
        empty: "No article has been published yet.",
        featured: "Featured",
        readArticle: "Read the article",
        readSuffix: "read",
        backToArticles: "Back to articles",
        notFoundTitle: "Article not found",
    },
    openGraph: {
        tagline: "Developer ",
    },
    meta: {
        siteDescription:
            "Full-Stack & UI/UX developer based in Abidjan. Discover my expertise in modern interface design (React/Next.js) and my career path.",
        keywords: [
            "Quentin",
            "koffi yannick",
            "koffi quentin",
            "quentin koffi",
            "kouamelan",
            "kouamelan yannick",
            "kouamelan quentin",
            "yannick kouamelan",
            "yannick quentin",
            "quentin kouamelan",
            "Quentinak",
            "Koffi Kouamelan Yannick Quentin",
            "Full-Stack Developer",
            "Frontend Developer",
            "UI/UX Developer",
            "Mobile Developer",
            "Web Developer",
            "React",
            "Next.js",
            "Portfolio",
            "Abidjan",
            "Ivory Coast",
            "Frontend Development",
        ],
        root: {
            title: "Quentinak | Portfolio",
            description: "Welcome to my portfolio. Discover my expertise and my projects.",
        },
        home: {
            title: "Quentin | Portfolio",
            description:
                "Welcome to my developer portfolio. Discover my expertise, my projects and my passion for UI/UX.",
        },
        about: {
            title: "About",
            description:
                "Find out who I am, my passion for code, and my approach to design and tech innovation.",
        },
        projects: {
            title: "Work",
            description:
                "Professional experience, education and projects by Quentin, Full-Stack Developer.",
        },
        contact: {
            title: "Contact",
            description:
                "Feel free to reach out to discuss your next project, a job opportunity, or simply to talk about development.",
        },
        blog: {
            title: "Blog",
            description:
                "My writing space: tutorials, case studies and thoughts on web development, Next.js, and more.",
        },
    },
};

/**
 * Le dictionnaire anglais fait foi : `Dictionary` en est dérivé, donc la version
 * française doit exposer exactement les mêmes clés.
 */
export type Dictionary = typeof en;

/** Version française — structurellement identique au dictionnaire anglais. */
const fr: Dictionary = {
    common: {
        downloadCv: "Télécharger mon CV",
        education: "Formation",
        languages: "Langues",
        interests: "Centres d'intérêt",
        githubContributions: "Mes contributions GitHub",
        footer: "Construit avec passion en Next.js & Tailwind CSS.",
        languageSwitch: "Changer de langue",
    },
    home: {
        projectsIntro:
            "Une sélection de mes travaux récents. Parcourez la liste pour découvrir les interfaces, architectures techniques et fonctionnalités que j'ai pu développer.",
    },
    about: {
        badge: "À propos de moi",
        titleLead: "Faisons plus ample",
        titleHighlight: "connaissance.",
        heading: "Qui je suis et ce que je fais",
        goal:
            "Mon objectif est de créer des solutions numériques à la fois performantes et esthétiques. Que ce soit pour structurer une base de données robuste ou concevoir une interface utilisateur fluide, j'aborde chaque projet avec la même rigueur et curiosité.",
    },
    projects: {
        intro:
            "Une sélection de mes travaux récents. Parcourez la liste pour découvrir les interfaces, architectures techniques et fonctionnalités que j'ai pu développer.",
    },
    contact: {
        badge: "Contact",
        titleLead: "Donnons vie à vos",
        titleHighlight: "idées.",
        intro:
            "Que ce soit pour une opportunité professionnelle, un projet de création d'application web, ou simplement pour échanger sur le développement... je suis à votre écoute !",
        phone: "Téléphone",
        location: "Localisation",
        languages: "Langues",
        form: {
            nameLabel: "Nom complet",
            namePlaceholder: "John Doe",
            emailLabel: "Adresse Email",
            emailPlaceholder: "john@example.com",
            subjectLabel: "Sujet",
            subjectPlaceholder: "Proposition de projet SaaS...",
            messageLabel: "Message",
            messagePlaceholder: "Détaillez votre idée ici...",
            captchaMissingConfig: "Configuration manquante : NEXT_PUBLIC_TURNSTILE_SITE_KEY introuvable.",
            captchaRequired: "Validation Captcha requise...",
            submitting: "Envoi en cours...",
            submit: "Envoyer le message",
            successFallback: "Votre message a bien été envoyé !",
            errorFallback: "Erreur lors de l'envoi.",
            unexpectedError: "Une erreur inattendue s'est produite.",
        },
    },
    testimonials: {
        previous: "Témoignage précédent",
        next: "Témoignage suivant",
        goTo: "Aller au témoignage",
    },
    terminal: {
        welcome: "Bienvenue sur le terminal de Quentin ! Tapez 'help' pour voir les commandes disponibles.",
        help: {
            help: "Affiche cette liste de commandes",
            ls: "Liste les fichiers et dossiers disponibles",
            cat: "Affiche le contenu d'un fichier (ex: cat about.txt)",
            about: "Qui suis-je ?",
            skills: "Voir ma stack technique principale",
            contact: "Comment me joindre",
            whoami: "Affiche l'utilisateur actuel",
            date: "Affiche la date et l'heure système",
            clear: "Efface le terminal",
            sudo: "???",
        },
        about:
            "Hello ! Je suis Quentin, un développeur Full-Stack & UI/UX basé à Abidjan. Je suis passionné par la création d'interfaces fluides et de systèmes robustes.",
        skills:
            "► Frontend: React, Next.js, Vue, Tailwind\n► Backend: Nest.js, Python, PostgreSQL\n► DevOps: Docker, Vercel, Git",
        sudo: "nice try... mais vous n'avez pas les droits root ici ! (;",
        notFound: "command not found",
        notFoundHint: "Tapez 'help' pour la liste.",
    },
    notFound: {
        badge: "Erreur 404",
        title: "Page introuvable !",
        description:
            "Oups ! Il semble que la page que vous recherchez n'existe pas ou a été déplacée. Mais ne vous inquiétez pas, vous pouvez retourner à l'accueil pour découvrir mes projets.",
        backHome: "Retour à l'accueil",
    },
    blog: {
        badge: "Digital Garden",
        titleLead: "Articles &",
        titleHighlight: "Ressources",
        empty: "Aucun article n'a été publié pour le moment.",
        featured: "À la une",
        readArticle: "Lire l'article",
        readSuffix: "de lecture",
        backToArticles: "Retour aux articles",
        notFoundTitle: "Article introuvable",
    },
    openGraph: {
        tagline: "Développeur ",
    },
    meta: {
        siteDescription:
            "Développeur Full-Stack & UI/UX basé à Abidjan. Découvrez mon expertise en conception d'interfaces modernes (React/Next.js) et mon parcours.",
        keywords: [
            "Quentin",
            "koffi yannick",
            "koffi quentin",
            "quentin koffi",
            "kouamelan",
            "kouamelan yannick",
            "kouamelan quentin",
            "yannick kouamelan",
            "yannick quentin",
            "quentin kouamelan",
            "Quentinak",
            "Koffi Kouamelan Yannick Quentin",
            "Développeur Full-Stack",
            "Développeur Frontend",
            "Développeur UI/UX",
            "Développeur mobile",
            "Développeur web",
            "React",
            "Next.js",
            "Portfolio",
            "Abidjan",
            "Côte d'Ivoire",
            "Création Frontend",
        ],
        root: {
            title: "Quentinak | Portfolio",
            description: "Bienvenue sur mon Portfolio. Découvrez mes expertises et projets.",
        },
        home: {
            title: "Quentin | Portfolio",
            description:
                "Bienvenue sur mon portfolio de développeur. Découvrez mes expertises, mes projets et ma passion de l'UI/UX.",
        },
        about: {
            title: "À Propos",
            description:
                "Découvrez qui je suis, ma passion pour le code, mon approche du design et de l'innovation tech.",
        },
        projects: {
            title: "Activités",
            description:
                "Expériences professionnelles, Formations et Projets de Quentin, Développeur Full-Stack.",
        },
        contact: {
            title: "Contact",
            description:
                "N'hésitez pas à me contacter pour discuter de votre prochain projet, d'une opportunité professionnelle ou simplement échanger sur le développement.",
        },
        blog: {
            title: "Blog",
            description:
                "Mon espace d'écriture : tutoriels, études de cas et pensées sur le développement web, Next.js, et plus encore.",
        },
    },
};

export const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale];
}
