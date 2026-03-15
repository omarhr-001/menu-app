"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function Header() {
  return (
    <header>
      <div className="header-ornament">
        <div className="ornament-line"></div>
        <div className="ornament-sm"></div>
        <div className="ornament-diamond"></div>
        <div className="ornament-sm"></div>
        <div className="ornament-line right"></div>
      </div>

      <p className="restaurant-label fr">Là où les nuits prennent vie</p>
      <p className="restaurant-label en">Where Nights Come Alive</p>

      <h1 className="restaurant-name">
        <em>THE</em> CHALLENGE
      </h1>

      <p className="restaurant-tagline fr">La nuit vous appartient</p>
      <p className="restaurant-tagline en">The Night is Yours</p>

      <div className="header-meta">
        <span className="fr">
          Ambiance <strong>Non-Stop</strong>
        </span>
        <span className="en">
          Vibes <strong>No-Stop</strong>
        </span>
      </div>
    </header>
  );
}
