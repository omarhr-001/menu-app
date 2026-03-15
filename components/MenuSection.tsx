"use client";

import { useEffect, useRef } from "react";
import { MenuSection as MenuSectionType } from "@/lib/menu-data";
import { MenuItem } from "./MenuItem";

export function MenuSection({ section }: { section: MenuSectionType }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -65px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="menu-section" id={section.id} ref={sectionRef}>
      <div className="section-header">
        <div className="section-number">{section.number}</div>
        <h2 className="section-title">
          <span className="fr">
            {section.titleFr}
          </span>
          <span className="en">
            {section.titleEn}
          </span>
        </h2>
        <div className="section-divider">
          <div className="div-line"></div>
          <div className="div-icon"></div>
          <div className="div-line r"></div>
        </div>
        <p className="section-sub">{section.subtitleEn}</p>
      </div>
      <div className="menu-grid">
        {section.items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            featured={item.featured}
          />
        ))}
      </div>
    </section>
  );
}
