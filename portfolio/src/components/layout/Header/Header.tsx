import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import type { NavItem } from "../../../data/socialLinks";
import type { Theme } from "../../../utils/theme";
import { Navbar } from "../Navbar/Navbar";

interface HeaderProps {
    items: NavItem[];
    activeSection: string;
    theme: Theme;
    onToggleTheme: () => void;
}

export function Header({ items, activeSection, theme, onToggleTheme }: HeaderProps) {
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

            <div className="site-header-actions">
                <Navbar
                    items={items}
                    activeSection={activeSection}
                    onNavigate={() => setMenuOpen(false)}
                />

                <button
                    className="theme-toggle"
                    type="button"
                    aria-label={theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"}
                    aria-pressed={theme === "dark"}
                    onClick={onToggleTheme}
                >
                    {theme === "light" ? <MoonStar size={16} /> : <SunMedium size={16} />}
                    <span>{theme === "light" ? "Escuro" : "Claro"}</span>
                </button>

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
            </div>
        </header>
    );
}
