import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface NavItem {
    label: string;
    href: string;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: LucideIcon;
}

export const navItems: NavItem[] = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Contato", href: "#contato" }
];

export const socialLinks: SocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/Raulcezarsantos",
        icon: Github
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/raul-cezar-336b94164/",
        icon: Linkedin
    },
    {
        label: "Contato",
        href: "#contato",
        icon: Mail
    }
];
