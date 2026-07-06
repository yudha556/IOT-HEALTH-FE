import { useEffect, useState } from "react";
import { ThemeProviderContext } from "./theme-context";

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return defaultTheme;
    }

    return localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      root.classList.add("light");
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, theme);
      }
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

