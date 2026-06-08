export type Theme = "light" | "dark";

export const themeStorageKey = "raul-cezar-portfolio:theme";

export function getPreferredTheme(): Theme {
    if (typeof window === "undefined") {
        return "light";
    }

    const stored = window.localStorage.getItem(themeStorageKey);

    if (stored === "light" || stored === "dark") {
        return stored;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
    if (typeof document === "undefined") {
        return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
}
