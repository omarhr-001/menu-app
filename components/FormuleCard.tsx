"use client";

import { Formule } from "@/lib/menu-data";

export function FormuleCard({ formule }: { formule: Formule }) {
  return (
    <div
      className={`formule-card ${formule.highlight ? "highlight" : ""}`}
    >
      <div className="formule-name">
        <span className="fr">{formule.name.fr}</span>
        <span className="en">{formule.name.en}</span>
      </div>
      <div className="formule-price">
        <sup>EUR</sup>
        {formule.price}
      </div>
      <ul className="formule-items">
        {formule.items.map((item, idx) => (
          <li key={idx}>
            <span className="fr">{item.fr}</span>
            <span className="en">{item.en}</span>
          </li>
        ))}
      </ul>
      <div className="formule-note">{formule.note}</div>
    </div>
  );
}
