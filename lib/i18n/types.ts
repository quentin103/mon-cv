/**
 * Forme du contenu du portfolio. Les deux fichiers `data/portfolio.<locale>.json`
 * sont typés avec cette interface : si l'un des deux dérive (clé manquante,
 * structure différente), TypeScript le signale à la compilation.
 */

export type NavigationItem = {
    name: string;
    href: string;
    icon: string;
    showLabelOnDesktop: boolean;
};

export type SocialLink = {
    name: string;
    icon: string;
    href: string;
};

export type Hero = {
    title: {
        part1: string;
        highlight: string;
        part2: string;
    };
    description: string;
    codeSnippet: {
        fileName: string;
        statement: string;
        developer: {
            name: string;
            role: string;
            skills: string[];
            buildReturn: string;
        };
    };
    socialLinks: SocialLink[];
};

export type Skill = {
    name: string;
    icon: string;
};

export type ExpertiseItem = {
    id: string;
    title: string;
    icon: string;
    description: string;
    skills: Skill[];
};

export type Expertise = {
    sectionLabel: string;
    title: string;
    items: ExpertiseItem[];
};

export type ProjectCategory = {
    name: string;
    active: boolean;
};

export type Project = {
    id: string;
    layout: string;
    title: string;
    year: string;
    description: string;
    image: string;
    link: string;
    private?: boolean;
    badge?: {
        label: string;
        style: string;
    };
    categories: ProjectCategory[];
    tags: string[];
    techIcons: string[];
};

export type Projects = {
    sectionLabel: string;
    title: string;
    githubLink: string;
    items: Project[];
};

export type ExperienceEntry = {
    title: string;
    contract: string;
    company: string;
    period: string;
    description: string[];
};

export type EducationEntry = {
    degree: string;
    school: string;
    period: string;
};

export type Language = {
    name: string;
    /** Niveau de maîtrise, en pourcentage (0-100). */
    level: number;
};

export type Interest = {
    name: string;
    icon: string;
};

export type Timeline = {
    sectionLabel: string;
    title: string;
    experiences: ExperienceEntry[];
    education: EducationEntry[];
    languages: Language[];
    interests: Interest[];
};

export type Brand = {
    name: string;
    icon: string;
};

export type TrustedBy = {
    sectionLabel: string;
    title: string;
    brands: Brand[];
};

export type Cta = {
    title: string;
    description: string;
    buttonText: string;
    href: string;
};

export type Contact = {
    phone: string;
    whatsapp: string;
    telegram: string;
    location: string;
    languages: string;
};

export type About = {
    title: string;
    image: string;
    passion: string;
    gallery: string[];
};

export type Testimonial = {
    name: string;
    role: string;
    content: string;
};

export type Testimonials = {
    sectionLabel: string;
    title: string;
    items: Testimonial[];
};

export type PortfolioContent = {
    navigation: NavigationItem[];
    hero: Hero;
    expertise: Expertise;
    projects: Projects;
    timeline: Timeline;
    trustedBy: TrustedBy;
    cta: Cta;
    contact: Contact;
    about: About;
    testimonials: Testimonials;
};
