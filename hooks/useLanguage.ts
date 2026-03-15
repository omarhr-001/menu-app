import { useEffect, useState } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isEnMode = document.body.classList.contains("en-mode");
    setLanguage(isEnMode ? "en" : "fr");
  }, []);

  if (!mounted) return "fr";
  return language;
}
