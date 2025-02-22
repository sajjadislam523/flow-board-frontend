const ThemeToggle = () => {
    const toggleTheme = () => {
        const rootElement = document.documentElement;
        if (rootElement.classList.contains("dark")) {
            rootElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            rootElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 text-gray-800 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-200"
        >
            Toggle Dark Mode
        </button>
    );
};

export default ThemeToggle;
