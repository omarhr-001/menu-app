"use client";

import { useState, useEffect } from "react";

const navItemsFr = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "poissons", label: "Poissons & Fruits de mer" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
  { id: "formules", label: "Formules" },
];

const navItemsEn = [
  { id: "entrees", label: "Starters" },
  { id: "plats", label: "Mains" },
  { id: "poissons", label: "Seafood" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Drinks" },
  { id: "formules", label: "Set Menus" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("entrees");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".menu-section");
      const threshold = 150;
      let active = "entrees";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= threshold) {
          active = section.id;
        }
      });

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="sticky top-0 z-[100] bg-[rgba(250,248,243,0.95)] backdrop-blur-[12px] border-b border-[var(--border)] shadow-[0_4px_30px_var(--shadow)]">
      <nav className="flex justify-center gap-0 overflow-x-auto px-5 scrollbar-hide">
        {/* French navigation */}
        {navItemsFr.map((item) => (
          <button
            key={`fr-${item.id}`}
            onClick={() => scrollToSection(item.id)}
            className={`fr bg-transparent border-none cursor-pointer px-[22px] py-[18px] text-[10px] font-medium tracking-[2.5px] uppercase relative transition-colors whitespace-nowrap shrink-0 ${
              activeSection === item.id
                ? "text-[var(--gold-dark)]"
                : "text-[var(--text-sub)] hover:text-[var(--gold-dark)]"
            }`}
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {item.label}
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[var(--gold)] transition-all ${
                activeSection === item.id ? "w-[calc(100%-24px)]" : "w-0"
              }`}
            />
          </button>
        ))}
        {/* English navigation */}
        {navItemsEn.map((item) => (
          <button
            key={`en-${item.id}`}
            onClick={() => scrollToSection(item.id)}
            className={`en bg-transparent border-none cursor-pointer px-[22px] py-[18px] text-[10px] font-medium tracking-[2.5px] uppercase relative transition-colors whitespace-nowrap shrink-0 ${
              activeSection === item.id
                ? "text-[var(--gold-dark)]"
                : "text-[var(--text-sub)] hover:text-[var(--gold-dark)]"
            }`}
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {item.label}
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[var(--gold)] transition-all ${
                activeSection === item.id ? "w-[calc(100%-24px)]" : "w-0"
              }`}
            />
          </button>
        ))}
      </nav>
    </div>
  );
}
