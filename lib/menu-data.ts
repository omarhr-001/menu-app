import { MenuItemData } from "@/components/menu-item";

export const menuData: Record<string, MenuItemData[]> = {
  entrees: [
    {
      name: "Foie Gras de Canard Maison",
      description:
        "Terrine de foie gras préparé artisanalement, confit de figues au porto, brioche toastée et fleur de sel de Guérande",
      price: 24,
      priceNote: "EUR",
      allergens: "Gluten / Alcool",
      badges: ["signature"],
      featured: true,
      image: "/images/OSK.jpg",
    },
    {
      name: "Seasonal Velouté",
      description:
        "Crème de légumes du moment, huile de truffe et croûtes dorées au beurre clarifié",
      price: 12,
      priceNote: "EUR",
      allergens: "Gluten / Lactose",
    },
    {
      name: "Scallop Carpaccio",
      description:
        "Noix de Saint-Jacques tranchées finement, citron caviar, micro-herbes et vinaigrette d'agrumes",
      price: 18,
      priceNote: "EUR",
      allergens: "Crustacés / Acidité",
      badges: ["new"],
    },
    {
      name: "Warm Goat Cheese Salad",
      description:
        "Chèvre chaud légèrement doré, mesclun de jeunes pousses, noix caramélisées et miel de lavande",
      price: 14,
      priceNote: "EUR",
      allergens: "Lactose / Gluten",
    },
    {
      name: "Heirloom Tomato Gazpacho",
      description:
        "Tomates cœur de bœuf et green zebra, basilic frais, poudre d'olive et pickles de fenouil",
      price: 11,
      priceNote: "EUR",
      badges: ["vegetarian"],
    },
    {
      name: "Burgundy Snails",
      description:
        "Six escargots au beurre d'ail persillé, croûte de pain de campagne et échalotes confites",
      price: 16,
      priceNote: "EUR",
      allergens: "Gluten / Lactose",
    },
  ],
  plats: [
    {
      name: "45-Day Aged Ribeye",
      description:
        "Côte de bœuf race Limousine maturée 45 jours, grillée au feu de bois, pommes sarladaises à l'ail doux, jus à la moelle et bone marrow",
      price: 68,
      priceNote: "EUR / 2 pers.",
      allergens: "Pour 2 personnes / Cuisson au choix",
      badges: ["signature"],
      featured: true,
    },
    {
      name: "Whole Roasted Duck",
      description:
        "Canard de Challans rôti à la broche, navets glacés et chutney de cerise noire au Porto",
      price: 34,
      priceNote: "TND",
      allergens: "Alcool",
    },
    {
      name: "Pyrenean Milk Lamb",
      description:
        "Carrés d'agneau confits aux herbes de Provence, jus réduit au romarin, tian de légumes méridionaux",
      price: 38,
      priceNote: "EUR",
      badges: ["new"],
    },
    {
      name: "Farm-Raised Chicken Stew",
      description:
        "Poulet fermier de Bresse cuit en cocotte, champignons sauvages, crème et estragon, pommes vapeur",
      price: 26,
      priceNote: "EUR",
      allergens: "Lactose",
    },
    {
      name: "Risotto Crémeux aux Cèpes",
      description:
        "Arborio cuit au bouillon de légumes, cèpes sauvages poêlés, parmesan 24 mois, huile de truffe blanche",
      price: 24,
      priceNote: "EUR",
      allergens: "Lactose / Gluten",
      badges: ["vegetarian"],
    },
  ],
  poissons: [
    {
      name: "Grilled Breton Lobster",
      description:
        "Demi-homard breton grillé au beurre clarifié, émulsion de corail, asperges blanches et caviar de Neuvic",
      price: 58,
      priceNote: "EUR",
      allergens: "Crustacés / Lactose",
      badges: ["signature"],
      featured: true,
    },
    {
      name: "Classic Sole Meunière",
      description:
        "Sole de Douvres levée, beurre noisette, câpres et citron confit, pommes vapeur au persil",
      price: 36,
      priceNote: "EUR",
      allergens: "Gluten / Lactose",
    },
    {
      name: "Wild Sea Bass Fillet",
      description:
        "Bar de ligne en croûte d'herbes, vierge de légumes croquants, beurre blanc aux herbes marines",
      price: 32,
      priceNote: "EUR",
      allergens: "Seafood / Lactose",
      badges: ["new"],
    },
    {
      name: "Half-Cooked Atlantic Salmon",
      description:
        "Saumon d'Écosse mi-cuit, concombre mariné, crème fraîche d'Isigny et aneth sauvage",
      price: 28,
      priceNote: "EUR",
      allergens: "Seafood / Lactose",
    },
  ],
  desserts: [
    {
      name: "The Chef's Signature Dessert",
      description:
        "Trilogie gourmande : crème brûlée à la vanille Bourbon, mille-feuille à la fraise Mara et sorbet champagne — expérience à partager",
      price: 22,
      priceNote: "EUR / 2 pers.",
      allergens: "Gluten / Lactose / Alcool",
      badges: ["signature"],
      featured: true,
    },
    {
      name: "Vanilla Crème Brûlée",
      description:
        "Vanille de Madagascar, caramel croquant, sablé breton à la fleur de sel",
      price: 10,
      priceNote: "EUR",
      allergens: "Lactose / Gluten",
    },
    {
      name: "Thin Apple Tart",
      description:
        "Pommes golden feuilletées, glace caramel beurre salé, coulis de cidre réduit",
      price: 12,
      priceNote: "EUR",
      allergens: "Gluten / Lactose",
    },
    {
      name: "72% Dark Chocolate Fondant",
      description:
        "Cœur coulant au chocolat Valrhona, glace tonka et éclats de praline croustillant",
      price: 13,
      priceNote: "EUR",
      allergens: "Gluten / Lactose / Œufs",
      badges: ["new"],
    },
    {
      name: "Aged Cheese Platter",
      description:
        "Plateau de 4 fromages affinés sélectionnés, pain au levain, confiture de figues et raisins secs",
      price: 16,
      priceNote: "EUR",
      allergens: "Lactose / Gluten",
    },
  ],
  boissons: [
    {
      name: "Blanc de Blancs Champagne",
      description:
        "Cuvée prestige, notes de brioche et de fleurs blanches, finesse et longueur en bouche",
      price: 18,
      priceNote: "verre",
    },
    {
      name: "Bordeaux Red - Pauillac",
      description:
        "Grand cru classé, tanins soyeux, notes de cassis, cèdre et épices douces",
      price: 14,
      priceNote: "verre",
    },
    {
      name: "Burgundy White - Meursault",
      description:
        "Premier cru, beurre noisette, noisette et agrumes, richesse et minéralité",
      price: 15,
      priceNote: "verre",
    },
    {
      name: "Mineral Water",
      description: "Evian ou Badoit, plate ou gazeuse, carafe de 50cl ou 1L",
      price: 5,
      priceNote: "50cl",
    },
    {
      name: "Coffee and Petit Fours",
      description:
        "Espresso ou americano, accompagné de trois mignardises maison du jour",
      price: 6,
      priceNote: "EUR",
    },
    {
      name: "Quality Digestifs",
      description:
        "Armagnac, Cognac XO, Calvados ou Chartreuse Verte selon disponibilité",
      price: 12,
      priceNote: "verre",
      badges: ["prestige"],
    },
  ],
};
