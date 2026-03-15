export interface MenuItem {
  id: string;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  price: number;
  currency: "EUR" | "TND";
  allergens?: string;
  badges?: Array<"signature" | "vegetarian" | "new" | "spice">;
  featured?: boolean;
  image?: string;
}

export interface MenuSection {
  id: string;
  number: string;
  titleFr: string;
  titleEn: string;
  subtitleEn: string;
  items: MenuItem[];
}

export interface Formule {
  id: string;
  name: { fr: string; en: string };
  price: number;
  items: { fr: string; en: string }[];
  note: string;
  highlight?: boolean;
}

export const menuSections: MenuSection[] = [
  {
    id: "entrees",
    number: "01",
    titleFr: "Nos Entrées",
    titleEn: "Our Starters",
    subtitleEn: "To start your flavor journey",
    items: [
      {
        id: "foie-gras",
        name: { fr: "Foie Gras de Canard Maison", en: "House Duck Foie Gras" },
        description: {
          fr: "Terrine de foie gras prepare artisanalement, confit de figues au porto, brioche toastee et fleur de sel de Guerande",
          en: "House-prepared foie gras terrine, fig confit with port, toasted brioche and Guerande sea salt",
        },
        price: 24,
        currency: "EUR",
        allergens: "Gluten / Alcool",
        badges: ["signature"],
        featured: true,
      },
      {
        id: "seasonal-veloute",
        name: { fr: "Seasonal Velouté", en: "Seasonal Velouté" },
        description: {
          fr: "Creme de legumes du moment, huile de truffe et croutes dorees au beurre clarifie",
          en: "Seasonal vegetable cream, truffle oil and golden crutons with clarified butter",
        },
        price: 12,
        currency: "EUR",
        allergens: "Gluten / Lactose",
      },
      {
        id: "scallop-carpaccio",
        name: { fr: "Scallop Carpaccio", en: "Scallop Carpaccio" },
        description: {
          fr: "Noix de Saint-Jacques tranchees finement, citron caviar, micro-herbes et vinaigrette d'agrumes",
          en: "Thinly sliced scallops, caviar lemon, microherbs and citrus vinaigrette",
        },
        price: 18,
        currency: "EUR",
        allergens: "Crustaces / Acidite",
        badges: ["new"],
      },
      {
        id: "warm-goat-cheese",
        name: { fr: "Warm Goat Cheese Salad", en: "Warm Goat Cheese Salad" },
        description: {
          fr: "Chevre chaud legerement dore, mesclun de jeunes pousses, noix caramelisees et miel de lavande",
          en: "Warm lightly golden goat cheese, young mesclun, caramelized walnuts and lavender honey",
        },
        price: 14,
        currency: "EUR",
        allergens: "Lactose / Gluten",
      },
      {
        id: "heirloom-tomato",
        name: { fr: "Heirloom Tomato Gazpacho", en: "Heirloom Tomato Gazpacho" },
        description: {
          fr: "Tomates coeur de boeuf et green zebra, basilic frais, poudre d'olive et pickles de fenouil",
          en: "Heirloom and green zebra tomatoes, fresh basil, olive powder and fennel pickles",
        },
        price: 11,
        currency: "EUR",
        badges: ["vegetarian"],
      },
      {
        id: "burgundy-snails",
        name: { fr: "Burgundy Snails", en: "Burgundy Snails" },
        description: {
          fr: "Six escargots au beurre d'ail persille, croute de pain de campagne et echalotes confites",
          en: "Six snails in parsley garlic butter, country bread crust and candied shallots",
        },
        price: 16,
        currency: "EUR",
        allergens: "Gluten / Lactose",
      },
    ],
  },
  {
    id: "plats",
    number: "02",
    titleFr: "Mains Principaux",
    titleEn: "Main Courses",
    subtitleEn: "Exceptional meats and poultry",
    items: [
      {
        id: "ribeye",
        name: { fr: "45-Day Aged Ribeye", en: "45-Day Aged Ribeye" },
        description: {
          fr: "Cote de boeuf race Limousine maturee 45 jours, grilles au feu de bois, pommes sarladaises a l'ail doux, jus a la moelle et bone marrow",
          en: "45-day aged Limousine ribeye, wood-fired grilled, potatoes with garlic, marrow sauce and bone marrow",
        },
        price: 68,
        currency: "EUR",
        allergens: "Pour 2 personnes / Cuisson au choix",
        badges: ["signature"],
        featured: true,
      },
      {
        id: "whole-roasted-duck",
        name: { fr: "Whole Roasted Duck", en: "Whole Roasted Duck" },
        description: {
          fr: "Canard de Challans roti a la broche, navets glaces et chutney de cerise noire au Porto",
          en: "Challans duck spit-roasted, glazed turnips and black cherry Port chutney",
        },
        price: 34,
        currency: "TND",
        allergens: "Alcool",
      },
      {
        id: "pyrenean-lamb",
        name: { fr: "Pyrenean Milk Lamb", en: "Pyrenean Milk Lamb" },
        description: {
          fr: "Carres d'agneau confits aux herbes de Provence, jus reduit au romarin, tian de legumes meridionaux",
          en: "Lamb racks confit with Provençal herbs, rosemary reduction, Mediterranean vegetable tian",
        },
        price: 38,
        currency: "EUR",
        badges: ["new"],
      },
      {
        id: "farm-chicken",
        name: { fr: "Farm-Raised Chicken Stew", en: "Farm-Raised Chicken Stew" },
        description: {
          fr: "Poulet fermier de Bresse cuit en cocotte, champignons sauvages, creme et tarragon, pommes vapeur",
          en: "Bresse farm chicken stewed in casserole, wild mushrooms, cream and tarragon, steamed potatoes",
        },
        price: 26,
        currency: "EUR",
        allergens: "Lactose",
      },
      {
        id: "risotto-cepes",
        name: { fr: "Risotto Crémeux aux Cèpes", en: "Creamy Porcini Risotto" },
        description: {
          fr: "Arborio cuit au bouillon de legumes, cepés sauvages poeles, parmesan 24 mois, huile de truffe blanche",
          en: "Arborio rice in vegetable stock, sautéed wild porcini, 24-month Parmesan, white truffle oil",
        },
        price: 24,
        currency: "EUR",
        allergens: "Lactose / Gluten",
        badges: ["vegetarian"],
      },
    ],
  },
  {
    id: "poissons",
    number: "03",
    titleFr: "Poissons & Fruits de mer",
    titleEn: "Seafood & Mer",
    subtitleEn: "Seafood at peak freshness",
    items: [
      {
        id: "lobster",
        name: { fr: "Grilled Breton Lobster", en: "Grilled Breton Lobster" },
        description: {
          fr: "Demi-homard breton grille au beurre clarifie, emulsion de corail, asperges blanches et caviar de Neuvic",
          en: "Half Breton lobster grilled in clarified butter, coral emulsion, white asparagus and Neuvic caviar",
        },
        price: 58,
        currency: "EUR",
        allergens: "Crustaces / Lactose",
        badges: ["signature"],
        featured: true,
      },
      {
        id: "sole-meuniere",
        name: { fr: "Classic Sole Meunière", en: "Classic Sole Meunière" },
        description: {
          fr: "Sole de Douvres levee, beurre noisette, câpres et citron confit, pommes vapeur au persil",
          en: "Dover sole, brown butter, capers and preserved lemon, parsley steamed potatoes",
        },
        price: 36,
        currency: "EUR",
        allergens: "Gluten / Lactose",
      },
      {
        id: "sea-bass",
        name: { fr: "Wild Sea Bass Fillet", en: "Wild Sea Bass Fillet" },
        description: {
          fr: "Bar de ligne en croute d'herbes, vierge de legumes croquants, beurre blanc aux herbes marines",
          en: "Line-caught sea bass in herb crust, crisp vegetable salad, marine herb butter sauce",
        },
        price: 32,
        currency: "EUR",
        allergens: "Seafood / Lactose",
        badges: ["new"],
      },
      {
        id: "salmon",
        name: { fr: "Half-Cooked Atlantic Salmon", en: "Half-Cooked Atlantic Salmon" },
        description: {
          fr: "Saumon d'Ecosse mi-cuit, concombre mariné, creme fraiche d'Isigny et aneth sauvage",
          en: "Scottish salmon rare, marinated cucumber, Isigny crème fraîche and wild dill",
        },
        price: 28,
        currency: "EUR",
        allergens: "Seafood / Lactose",
      },
    ],
  },
  {
    id: "desserts",
    number: "04",
    titleFr: "Douceurs & Desserts",
    titleEn: "Douceurs & Desserts",
    subtitleEn: "The final touch to remember",
    items: [
      {
        id: "signature-dessert",
        name: { fr: "The Chef's Signature Dessert", en: "The Chef's Signature Dessert" },
        description: {
          fr: "Trilogie gourmande : creme brulee a la vanille Bourbon, mille-feuille a la fraise Mara et sorbet champagne — experience a partager",
          en: "Gourmet trilogy: Bourbon vanilla crème brûlée, Mara strawberry mille-feuille and champagne sorbet — experience to share",
        },
        price: 22,
        currency: "EUR",
        allergens: "Gluten / Lactose / Alcool",
        badges: ["signature"],
        featured: true,
      },
      {
        id: "creme-brulee",
        name: { fr: "Vanilla Crème Brûlée", en: "Vanilla Crème Brûlée" },
        description: {
          fr: "Vanille de Madagascar, caramel croquant, sable breton a la fleur de sel",
          en: "Madagascar vanilla, crisp caramel, Breton shortbread with sea salt",
        },
        price: 10,
        currency: "EUR",
        allergens: "Lactose / Gluten",
      },
      {
        id: "apple-tart",
        name: { fr: "Thin Apple Tart", en: "Thin Apple Tart" },
        description: {
          fr: "Pommes golden feuilletees, glace caramel beurre sale, coulis de cidre reduit",
          en: "Golden apple puff pastry, salted caramel ice cream, reduced cider coulis",
        },
        price: 12,
        currency: "EUR",
        allergens: "Gluten / Lactose",
      },
      {
        id: "chocolate-fondant",
        name: { fr: "72% Dark Chocolate Fondant", en: "72% Dark Chocolate Fondant" },
        description: {
          fr: "Coeur coulant au chocolat Valrhona, glace tonka et eclats de praline croustillant",
          en: "Valrhona chocolate lava heart, tonka ice cream and crispy praline pieces",
        },
        price: 13,
        currency: "EUR",
        allergens: "Gluten / Lactose / Oeufs",
        badges: ["new"],
      },
      {
        id: "cheese-platter",
        name: { fr: "Aged Cheese Platter", en: "Aged Cheese Platter" },
        description: {
          fr: "Plateau de 4 fromages affinés selectionnes, pain au levain, confiture de figues et raisins secs",
          en: "Selection of 4 aged cheeses, sourdough bread, fig jam and raisins",
        },
        price: 16,
        currency: "EUR",
        allergens: "Lactose / Gluten",
      },
    ],
  },
  {
    id: "boissons",
    number: "05",
    titleFr: "Vins & Drinks",
    titleEn: "Vins & Drinks",
    subtitleEn: "A carefully selected cellar",
    items: [
      {
        id: "champagne",
        name: { fr: "Blanc de Blancs Champagne", en: "Blanc de Blancs Champagne" },
        description: {
          fr: "Cuvee prestige, notes de brioche et de fleurs blanches, finesse et longueur en bouche",
          en: "Prestige cuvée, brioche and white flower notes, delicate with long finish",
        },
        price: 18,
        currency: "EUR",
        allergens: "",
      },
      {
        id: "bordeaux-red",
        name: { fr: "Bordeaux Red - Pauillac", en: "Bordeaux Red - Pauillac" },
        description: {
          fr: "Grand cru classe, tanins soyeux, notes de cassis, cedre et epices douces",
          en: "Grand cru classé, silky tannins, cassis, cedar and sweet spice notes",
        },
        price: 14,
        currency: "EUR",
        allergens: "",
      },
      {
        id: "burgundy-white",
        name: { fr: "Burgundy White - Meursault", en: "Burgundy White - Meursault" },
        description: {
          fr: "Premier cru, beurre noisette, noisette et agrumes, richesse et mineraloite",
          en: "Premier cru, brown butter, hazelnut and citrus, richness and minerality",
        },
        price: 15,
        currency: "EUR",
        allergens: "",
      },
      {
        id: "mineral-water",
        name: { fr: "Mineral Water", en: "Mineral Water" },
        description: {
          fr: "Evian ou Badoit, plate ou gazeuse, carafe de 50cl ou 1L",
          en: "Evian or Badoit, still or sparkling, 50cl or 1L pitcher",
        },
        price: 5,
        currency: "EUR",
        allergens: "",
      },
      {
        id: "coffee-petit-fours",
        name: { fr: "Coffee and Petit Fours", en: "Coffee and Petit Fours" },
        description: {
          fr: "Espresso ou americano, accompagne de trois mignardises maison du jour",
          en: "Espresso or americano, accompanied by three house petit fours",
        },
        price: 6,
        currency: "EUR",
        allergens: "",
      },
      {
        id: "digestifs",
        name: { fr: "Quality Digestifs", en: "Quality Digestifs" },
        description: {
          fr: "Armagnac, Cognac XO, Calvados ou Chartreuse Verte selon disponibilite",
          en: "Armagnac, XO Cognac, Calvados or Green Chartreuse by availability",
        },
        price: 12,
        currency: "EUR",
        allergens: "",
        badges: ["signature"],
      },
    ],
  },
];

export const formules: Formule[] = [
  {
    id: "dejeuner",
    name: { fr: "Le Déjeuner", en: "The Lunch" },
    price: 28,
    items: [
      { fr: "Entree du jour", en: "Starter of the day" },
      { fr: "Plat du jour", en: "Main of the day" },
      { fr: "Boisson offerte", en: "Free beverage" },
    ],
    note: "Disponible uniquement le midi",
  },
  {
    id: "carte-blanche",
    name: { fr: "La Carte Blanche", en: "The Carte Blanche" },
    price: 55,
    items: [
      { fr: "Entree au choix", en: "Starter of your choice" },
      { fr: "Plat ou Poisson au choix", en: "Main or seafood of your choice" },
      { fr: "Dessert au choix", en: "Dessert of your choice" },
      { fr: "Cafe et mignardises", en: "Coffee and petit fours" },
    ],
    note: "Midi et soir, sauf fetes",
    highlight: true,
  },
  {
    id: "prestige",
    name: { fr: "Le Prestige", en: "The Prestige" },
    price: 89,
    items: [
      { fr: "Amuse-bouche du chef", en: "Chef's amuse-bouche" },
      { fr: "Entree, Plat, Fromages", en: "Starter, main, cheeses" },
      { fr: "Dessert signature", en: "Signature dessert" },
      { fr: "Accord mets et vins", en: "Wine pairing" },
    ],
    note: "Sur reservation uniquement",
  },
];
