"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    document.body.classList.remove("fr-mode", "en-mode");
    document.body.classList.add(`${lang}-mode`);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <header className="relative bg-[var(--warm-white)] text-center px-5 pt-[70px] pb-[50px] border-b border-[var(--border)] overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold-light)] via-[var(--gold)] to-transparent" />
      
      {/* Bottom accent line */}
      <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-[120px] h-0.5 bg-[var(--gold)]" />

      {/* Language switcher */}
      <div className="absolute top-[30px] right-[30px] z-10">
        <button
          onClick={() => setLang("fr")}
          className={`border px-3 py-1.5 mx-1 text-xs font-medium transition-all ${
            lang === "fr"
              ? "bg-[var(--gold)] text-white border-[var(--gold)]"
              : "bg-transparent text-[var(--gold-dark)] border-[var(--gold-light)] hover:bg-[var(--gold)] hover:text-white hover:border-[var(--gold)]"
          }`}
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          FR
        </button>
        <button
          onClick={() => setLang("en")}
          className={`border px-3 py-1.5 mx-1 text-xs font-medium transition-all ${
            lang === "en"
              ? "bg-[var(--gold)] text-white border-[var(--gold)]"
              : "bg-transparent text-[var(--gold-dark)] border-[var(--gold-light)] hover:bg-[var(--gold)] hover:text-white hover:border-[var(--gold)]"
          }`}
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          EN
        </button>
      </div>

      {/* Logo */}
      <Image
        src="/images/logo1.png"
        alt="Logo The Challenge"
        width={500}
        height={200}
        className="mx-auto mb-0.5 animate-fade-up animate-delay-100"
        priority
      />

      {/* Ornament */}
      <div className="flex items-center justify-center gap-[18px] mb-5 animate-fade-up animate-delay-200">
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
        <div className="w-1 h-1 bg-[var(--gold-light)] rotate-45 shrink-0" />
        <div className="w-2 h-2 bg-[var(--gold)] rotate-45 shrink-0" />
        <div className="w-1 h-1 bg-[var(--gold-light)] rotate-45 shrink-0" />
        <div className="w-20 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
      </div>

      {/* Label */}
      <p
        className="text-[10px] font-medium tracking-[5px] uppercase text-[var(--gold)] mb-3 animate-fade-up animate-delay-400 fr"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        Là où les nuits prennent vie
      </p>
      <p
        className="text-[10px] font-medium tracking-[5px] uppercase text-[var(--gold)] mb-3 animate-fade-up animate-delay-400 en"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        Where Nights Come Alive
      </p>

      {/* Restaurant name */}
      <h1
        className="text-[clamp(42px,8vw,80px)] font-normal text-[var(--charcoal)] leading-[1.1] -tracking-[1px] animate-fade-up animate-delay-600"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        <em className="italic text-[var(--gold-dark)]">THE</em> CHALLENGE
      </h1>

      {/* Tagline */}
      <p
        className="italic text-lg text-[var(--text-sub)] mt-2.5 animate-fade-up animate-delay-800 fr"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        La nuit vous appartient
      </p>
      <p
        className="italic text-lg text-[var(--text-sub)] mt-2.5 animate-fade-up animate-delay-800 en"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        The Night is Yours
      </p>

      {/* Meta */}
      <div className="flex justify-center gap-8 mt-7 animate-fade-up animate-delay-1000">
        <span
          className="text-[10px] tracking-[2px] uppercase text-[var(--text-light)] font-medium fr"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Ambiance <strong className="text-[var(--gold)] font-semibold">Non-Stop</strong>
        </span>
        <span
          className="text-[10px] tracking-[2px] uppercase text-[var(--text-light)] font-medium en"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Vibes <strong className="text-[var(--gold)] font-semibold">No-Stop</strong>
        </span>
      </div>
    </header>
  );
}
