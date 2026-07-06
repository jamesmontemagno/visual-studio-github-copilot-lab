window.tinyShopTheme = {
    getPreferredTheme: function () {
        const storedTheme = localStorage.getItem("tinyshop-theme");
        if (storedTheme === "light" || storedTheme === "dark") {
            return storedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    },
    applyTheme: function (theme) {
        const resolvedTheme = theme === "dark" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", resolvedTheme);
        localStorage.setItem("tinyshop-theme", resolvedTheme);
    }
};
