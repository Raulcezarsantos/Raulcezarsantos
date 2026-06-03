import type { SocialLink } from "../../../data/socialLinks";

interface SocialLinksProps {
    links: SocialLink[];
    tone?: "light" | "dark";
}

export function SocialLinks({ links, tone = "light" }: SocialLinksProps) {
    return (
        <div className={`social-links social-links-${tone}`}>
            {links.map((link) => {
                const Icon = link.icon;
                return (
                    <a
                        key={link.label}
                        className="social-link"
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        aria-label={link.label}
                    >
                        <Icon size={18} />
                        <span>{link.label}</span>
                    </a>
                );
            })}
        </div>
    );
}
