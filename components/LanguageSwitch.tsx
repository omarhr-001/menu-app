"use client";

import { useEffect, useState } from "react";

type Language = "fr" | "en";

export function LanguageSwitch() {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const handleLangChange = (lang: Language) => {
      setLanguage(lang);
      document.body.classList.remove("fr-mode", "en-mode");
      document.body.classList.add(`${lang}-mode`);
      document.documentElement.lang = lang;
    };

    // Initialize from body class
    if (document.body.classList.contains("en-mode")) {
      setLanguage("en");
    }

    const buttons = document.querySelectorAll(".lang-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const lang = (target.getAttribute("data-lang") as Language) || "fr";
        handleLangChange(lang);

        buttons.forEach((b) => b.classList.remove("active"));
        target.classList.add("active");
      });
    });
  }, []);

  return (
    <div className="lang-switch">
      <button
        className="lang-btn active"
        data-lang="fr"
      >
        FR
      </button>
      <button className="lang-btn" data-lang="en">
        EN
      </button>
    </div>
  );
}
