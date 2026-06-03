import { useEffect, useState } from "react";
import type { NavItem } from "../../../data/socialLinks";
import { Navbar } from "../Navbar/Navbar";

interface HeaderProps {
    items: NavItem[];
    activeSection: string;
}

export function Header({ items, activeSection }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 820) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
            <a className="brand" href="#inicio" aria-label="Ir para o inicio">
                <span className="brand-mark">RC</span>
                <span className="brand-text">Raul Cezar Santos</span>
            </a>

            <button
                className="menu-toggle"
                type="button"
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMenuOpen((current) => !current)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <Navbar
                items={items}
                activeSection={activeSection}
                onNavigate={() => setMenuOpen(false)}
            />
        </header>
    );
}
