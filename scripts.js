function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains("dark-theme");

    if (isDark) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    }
}

// Apply theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(`${savedTheme}-theme`);
});
