import { useEffect } from "react";

const useThemeSync = () => {
    useEffect(() => {
        const rootElement = document.documentElement;
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            rootElement.classList.add(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            rootElement.classList.add("dark");
        }
    }, []);
};

export default useThemeSync;
