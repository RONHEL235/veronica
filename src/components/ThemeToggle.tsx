import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

//In the process of making it work 
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  //I think this is where the problem starts 
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        p-2
        text-neutral-500
        hover:text-neutral-900
        dark:text-neutral-400
        dark:hover:text-neutral-100
        transition
      "
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
