"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
  const saved = localStorage.getItem("theme") || "light";

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(saved);

  setTheme(saved);
}, []);


  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="transition-all duration-300 
                 dark:text-white hover:scale-110"
    >
      {theme === "dark" ? (
        <FiSun size={20} />
      ) : (
        <FiMoon size={20} />
      )}
    </button>
  );
}
