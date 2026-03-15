"use client";

import { useCallback, useEffect, useState } from "react";

const navSections = [
  { id: "entrees", frLabel: "Entrées", enLabel: "Starters" },
  { id: "plats", frLabel: "Plats", enLabel: "Mains" },
  { id: "poissons", frLabel: "Poissons & Fruits de mer", enLabel: "Seafood" },
  { id: "desserts", frLabel: "Desserts", enLabel: "Desserts" },
  { id: "boissons", frLabel: "Boissons", enLabel: "Drinks" },
  { id: "formules", frLabel: "Formules", enLabel: "Set Menus" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("entrees");

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 150;
      let active = "entrees";

      for (const { id } of navSections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold) {
            active = id;
          }
        }
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-wrap">
      <nav id="mainNav">
        {navSections.map(({ id, frLabel, enLabel }) => (
          <button
            key={id}
            className={`nav-btn ${activeSection === id ? "active" : ""} ${id === "entrees" ? "active" : ""}`}
            data-target={id}
            onClick={() => scrollToSection(id)}
          >
            <span className="fr">{frLabel}</span>
            <span className="en">{enLabel}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
