import Header from "@/components/header";
import Navigation from "@/components/navigation";
import MenuSection from "@/components/menu-section";
import FormulesSection from "@/components/formules-section";
import Footer from "@/components/footer";
import { menuData } from "@/lib/menu-data";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="max-w-[1100px] mx-auto px-6 py-16 pb-24">
        <MenuSection
          id="entrees"
          number="01"
          titleFr="Nos"
          titleEm="Entrées"
          titleEn="Our"
          titleEmEn="Starters"
          subtitle="To start your flavor journey"
          items={menuData.entrees}
        />
        <MenuSection
          id="plats"
          number="02"
          titleFr="Mains"
          titleEm="Principaux"
          titleEn="Mains"
          titleEmEn="Principaux"
          subtitle="Exceptional meats and poultry"
          items={menuData.plats}
        />
        <MenuSection
          id="poissons"
          number="03"
          titleFr="Seafood &"
          titleEm="Mer"
          titleEn="Seafood &"
          titleEmEn="Mer"
          subtitle="Seafood at peak freshness"
          items={menuData.poissons}
        />
        <MenuSection
          id="desserts"
          number="04"
          titleFr="Douceurs &"
          titleEm="Desserts"
          titleEn="Douceurs &"
          titleEmEn="Desserts"
          subtitle="The final touch to remember"
          items={menuData.desserts}
        />
        <MenuSection
          id="boissons"
          number="05"
          titleFr="Vins &"
          titleEm="Drinks"
          titleEn="Vins &"
          titleEmEn="Drinks"
          subtitle="A carefully selected cellar"
          items={menuData.boissons}
        />
        <FormulesSection />
      </main>
      <Footer />
    </>
  );
}
