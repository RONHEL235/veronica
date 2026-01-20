import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (localStorage.theme === "dark") return "dark";
    if (localStorage.theme === "light") return "light";

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.theme = theme;
  }, [theme]);

  return {
    theme,
    toggleTheme: () =>
      setTheme((t) => (t === "dark" ? "light" : "dark")),
  };
}
