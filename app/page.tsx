"use client";

import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { MenuSection } from "@/components/MenuSection";
import { FormuleCard } from "@/components/FormuleCard";
import { Footer } from "@/components/Footer";
import { menuSections, formules } from "@/lib/menu-data";

export default function Home() {
  return (
    <>
      <LanguageSwitch />
      <Header />
      <Navigation />
      <main>
        {menuSections.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}

        {/* FORMULES SECTION */}
        <section className="menu-section" id="formules">
          <div className="section-header">
            <div className="section-number">06</div>
            <h2 className="section-title">
              <span className="fr">Nos <em>Menus</em></span>
              <span className="en">Our <em>Set Menus</em></span>
            </h2>
            <div className="section-divider">
              <div className="div-line"></div>
              <div className="div-icon"></div>
              <div className="div-line r"></div>
            </div>
            <p className="section-sub">Lunch and dinner, for every moment</p>
          </div>
          <div className="formules-grid">
            {formules.map((formule) => (
              <FormuleCard key={formule.id} formule={formule} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
