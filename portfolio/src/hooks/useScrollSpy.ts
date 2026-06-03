import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 160) {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

    useEffect(() => {
        const onScroll = () => {
            const currentSection = [...sectionIds]
                .reverse()
                .find((id) => {
                    const element = document.getElementById(id);
                    if (!element) {
                        return false;
                    }

                    return element.getBoundingClientRect().top <= offset;
                });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, [offset, sectionIds]);

    return activeSection;
}
