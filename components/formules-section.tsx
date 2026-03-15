"use client";

import { useEffect, useRef } from "react";

const formules = [
  {
    name: { prefix: "Le", em: "Déjeuner" },
    price: 28,
    items: ["Entrée du jour", "Plat du jour", "Boisson offerte"],
    note: "Disponible uniquement le midi",
    highlight: false,
  },
  {
    name: { prefix: "La", em: "Carte Blanche" },
    price: 55,
    items: ["Entrée au choix", "Plat ou Poisson au choix", "Dessert au choix", "Café et mignardises"],
    note: "Midi et soir, sauf fêtes",
    highlight: true,
  },
  {
    name: { prefix: "Le", em: "Prestige" },
    price: 89,
    items: ["Amuse-bouche du chef", "Entrée, Plat, Fromages", "Dessert signature", "Accord mets et vins"],
    note: "Sur réservation uniquement",
    highlight: false,
  },
];

export default function FormulesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="formules"
      className="menu-section mb-20 opacity-0 translate-y-[30px] transition-all duration-700 [&.visible]:opacity-100 [&.visible]:translate-y-0"
    >
      <div className="text-center mb-[50px] relative">
        <div
          className="text-[72px] font-light text-[var(--gold-pale)] leading-none -mb-5 -tracking-[3px] select-none"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          06
        </div>
        <h2
          className="text-[clamp(28px,5vw,44px)] font-normal text-[var(--charcoal)] tracking-[1px] relative z-[1]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Nos <em className="italic text-[var(--gold-dark)]">Menus</em>
        </h2>
        <div className="flex items-center justify-center gap-3.5 mt-4">
          <div className="w-[60px] h-px bg-gradient-to-r from-transparent to-[var(--gold-light)]" />
          <div className="w-1.5 h-1.5 border border-[var(--gold)] rotate-45" />
          <div className="w-[60px] h-px bg-gradient-to-l from-transparent to-[var(--gold-light)]" />
        </div>
        <p
          className="italic text-[15px] text-[var(--text-light)] mt-2.5 tracking-[0.5px]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Lunch and dinner, for every moment
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 max-[700px]:grid-cols-1">
        {formules.map((formule, index) => (
          <div
            key={index}
            className={`border px-7 py-9 text-center bg-[var(--warm-white)] relative transition-all hover:-translate-y-1 hover:shadow-[0_16px_60px_var(--shadow)] ${
              formule.highlight
                ? "border-[var(--gold-light)] bg-gradient-to-b from-[#fffef5] to-[#fdf8ec]"
                : "border-[var(--border)]"
            }`}
          >
            {formule.highlight && (
              <span
                className="absolute -top-px left-1/2 -translate-x-1/2 bg-[var(--gold)] text-white text-[8px] font-semibold tracking-[2px] uppercase px-4 py-1 whitespace-nowrap"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Our Recommendation
              </span>
            )}
            <div
              className="text-[22px] text-[var(--charcoal)] mb-2"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {formule.name.prefix}{" "}
              <em className="text-[var(--gold-dark)] italic">{formule.name.em}</em>
            </div>
            <div
              className="text-5xl font-light text-[var(--gold)] leading-none my-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              <sup className="text-[22px] align-super text-[var(--gold-dark)]">EUR</sup>
              {formule.price}
            </div>
            <ul className="list-none my-5">
              {formule.items.map((item, i) => (
                <li
                  key={i}
                  className="italic text-[15px] text-[var(--text-sub)] py-1.5 border-b border-[var(--border)] last:border-b-0"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  <span className="text-[var(--gold)] not-italic mr-2">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <div
              className="text-[9px] tracking-[1px] text-[var(--text-light)] uppercase mt-4"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {formule.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
