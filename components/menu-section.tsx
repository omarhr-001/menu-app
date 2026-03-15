"use client";

import { useEffect, useRef } from "react";
import MenuItem, { MenuItemData } from "./menu-item";

interface MenuSectionProps {
  id: string;
  number: string;
  titleFr: string;
  titleEm: string;
  titleEn: string;
  titleEmEn: string;
  subtitle: string;
  items: MenuItemData[];
}

export default function MenuSection({
  id,
  number,
  titleFr,
  titleEm,
  titleEn,
  titleEmEn,
  subtitle,
  items,
}: MenuSectionProps) {
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
      id={id}
      className="menu-section mb-20 opacity-0 translate-y-[30px] transition-all duration-700 [&.visible]:opacity-100 [&.visible]:translate-y-0"
    >
      <div className="text-center mb-[50px] relative">
        <div
          className="text-[72px] font-light text-[var(--gold-pale)] leading-none -mb-5 -tracking-[3px] select-none"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          {number}
        </div>
        <h2
          className="text-[clamp(28px,5vw,44px)] font-normal text-[var(--charcoal)] tracking-[1px] relative z-[1] fr"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {titleFr} <em className="italic text-[var(--gold-dark)]">{titleEm}</em>
        </h2>
        <h2
          className="text-[clamp(28px,5vw,44px)] font-normal text-[var(--charcoal)] tracking-[1px] relative z-[1] en"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {titleEn} <em className="italic text-[var(--gold-dark)]">{titleEmEn}</em>
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
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-0.5 bg-[var(--border)] border border-[var(--border)] max-[600px]:grid-cols-1">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
