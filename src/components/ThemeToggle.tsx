
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative rounded-full p-2 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none",
        theme === "dark" 
          ? "bg-secondary/80 text-primary hover:bg-secondary" 
          : "bg-primary/10 text-primary hover:bg-primary/20",
        className
      )}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
    </button>
  );
}
