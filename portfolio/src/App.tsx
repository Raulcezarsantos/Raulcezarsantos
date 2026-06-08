import { useEffect, useMemo, useState } from "react";
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import { navItems } from "./data/socialLinks";
import { projects } from "./data/projects";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { applyTheme, getPreferredTheme, themeStorageKey, type Theme } from "./utils/theme";

const sectionIds = ["inicio", "sobre", "especialidades", "projetos", "experiencia", "contato"];

function App() {
    const activeSection = useScrollSpy(sectionIds, 180);
    const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());
    const [activeProjectId, setActiveProjectId] = useState(
        projects.find((project) => project.id === "payment-event-hub")?.id ?? projects[0].id
    );

    const activeProject = useMemo(
        () => projects.find((project) => project.id === activeProjectId) ?? projects[0],
        [activeProjectId]
    );

    useEffect(() => {
        applyTheme(theme);
        window.localStorage.setItem(themeStorageKey, theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    }

    return (
        <div className="page-shell">
            <Header
                items={navItems}
                activeSection={activeSection}
                theme={theme}
                onToggleTheme={toggleTheme}
            />
            <main>
                <Hero
                    activeProject={activeProject}
                    projects={projects}
                    onProjectChange={setActiveProjectId}
                />
                <About />
                <Skills />
                <Projects
                    projects={projects}
                    activeProject={activeProject}
                    onProjectChange={setActiveProjectId}
                />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
