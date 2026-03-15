"use client";

import { MenuItem as MenuItemType } from "@/lib/menu-data";

const badgeStyles: Record<string, { bg: string; text: string; border: string }> = {
  signature: {
    bg: "bg-[#f0e6cc]",
    text: "text-[#8c6d3f]",
    border: "border-[#d4af7a]",
  },
  vegetarian: {
    bg: "bg-[#edf5ee]",
    text: "text-[#4a7c5a]",
    border: "border-[#c4deca]",
  },
  new: {
    bg: "bg-[#f5eaf0]",
    text: "text-[#8c4a6e]",
    border: "border-[#dfc0d3]",
  },
  spice: {
    bg: "bg-[#fdf0ea]",
    text: "text-[#8c4a2a]",
    border: "border-[#e8c8b8]",
  },
};

const badgeLabels: Record<string, { fr: string; en: string }> = {
  signature: { fr: "Signature", en: "Signature" },
  vegetarian: { fr: "Végétarien", en: "Vegetarian" },
  new: { fr: "Nouveau", en: "New" },
  spice: { fr: "Épicé", en: "Spicy" },
};

export function MenuItem({ item, featured }: { item: MenuItemType; featured?: boolean }) {
  const itemClasses = featured
    ? "menu-item featured"
    : "menu-item";

  return (
    <div className={itemClasses}>
      <div className="item-inner">
        <div className="item-content">
          {item.badges && item.badges.length > 0 && (
            <div className="item-badges">
              {item.badges.map((badge) => {
                const style = badgeStyles[badge];
                const label = badgeLabels[badge];
                return (
                  <span
                    key={badge}
                    className={`badge ${style.bg} ${style.text} border ${style.border}`}
                  >
                    <span className="fr">{label.fr}</span>
                    <span className="en">{label.en}</span>
                  </span>
                );
              })}
            </div>
          )}
          <div className="item-name">
            <span className="fr">{item.name.fr}</span>
            <span className="en">{item.name.en}</span>
          </div>
          <div className="item-sep"></div>
          <div className="item-desc">
            <span className="fr">{item.description.fr}</span>
            <span className="en">{item.description.en}</span>
          </div>
          {item.allergens && (
            <div className="item-allergens">{item.allergens}</div>
          )}
        </div>
        <div className="item-price-wrap">
          <div className="item-price">{item.price}</div>
          <div className="item-price-note">
            {item.currency === "EUR" ? "EUR" : "TND"}
          </div>
        </div>
      </div>
    </div>
  );
}
