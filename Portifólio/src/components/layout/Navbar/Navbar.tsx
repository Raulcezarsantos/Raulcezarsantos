import type { NavItem } from "../../../data/socialLinks";

interface NavbarProps {
    items: NavItem[];
    activeSection: string;
    onNavigate: () => void;
}

export function Navbar({ items, activeSection, onNavigate }: NavbarProps) {
    return (
        <nav className="site-nav" id="site-menu" aria-label="Menu principal">
            {items.map((item) => {
                const itemSection = item.href.replace("#", "");
                const isActive = itemSection === activeSection;

                return (
                    <a
                        key={item.href}
                        href={item.href}
                        className={isActive ? "is-active" : ""}
                        onClick={onNavigate}
                    >
                        {item.label}
                    </a>
                );
            })}
        </nav>
    );
}
