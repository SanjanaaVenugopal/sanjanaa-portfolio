import { useEffect, useState } from "react";

export const useTheme = () => {
    const getInitialTheme = () => {
        const userPref = localStorage.getItem("theme");
        if (userPref) return userPref === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const [isDark, setIsDark] = useState(getInitialTheme); 

    useEffect(() => {
        const userPref = localStorage.getItem("theme");
        if (userPref) {
            setIsDark(userPref === "dark");
        } else {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDark(systemPrefersDark);
        }
    }, []);
    
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);
    return { isDark, toggleTheme };
}
