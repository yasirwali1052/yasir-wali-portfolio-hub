import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return true;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) return stored === "dark";
  return true;
}

/** Shared dark-mode state, persisted to localStorage and reflected on <html class="dark">. */
export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  return { isDark, setIsDark, toggle: () => setIsDark((d) => !d) };
}
