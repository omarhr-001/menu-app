import Image from "next/image";

export interface MenuItemData {
  name: string;
  description: string;
  price: number;
  priceNote?: string;
  allergens?: string;
  badges?: Array<"signature" | "vegetarian" | "new" | "spicy" | "prestige">;
  featured?: boolean;
  image?: string;
}

interface MenuItemProps {
  item: MenuItemData;
}

const badgeStyles = {
  signature: "bg-[var(--gold-pale)] text-[var(--gold-dark)] border-[var(--gold-light)]",
  vegetarian: "bg-[#edf5ee] text-[#4a7c5a] border-[#c4deca]",
  new: "bg-[#f5eaf0] text-[#8c4a6e] border-[#dfc0d3]",
  spicy: "bg-[#fdf0ea] text-[#8c4a2a] border-[#e8c8b8]",
  prestige: "bg-[var(--gold-pale)] text-[var(--gold-dark)] border-[var(--gold-light)]",
};

const badgeLabels = {
  signature: "Signature",
  vegetarian: "Végétarien",
  new: "Nouveau",
  spicy: "Épicé",
  prestige: "Prestige",
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div
      className={`bg-[var(--warm-white)] relative transition-all cursor-default hover:bg-[#fffdf5] hover:z-[2] hover:shadow-[0_0_0_1px_var(--gold-light),0_8px_40px_var(--shadow)] ${
        item.featured
          ? "col-span-full bg-gradient-to-br from-[#fffef9] to-[#faf5e8] px-12 py-10 border-t-2 border-[var(--gold-light)]"
          : "px-8 py-[30px]"
      }`}
    >
      <div className="flex justify-between items-start gap-5">
        {item.image && (
          <div className="animate-fade-up animate-delay-100">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="mx-auto mb-0.5 object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          {item.badges && item.badges.length > 0 && (
            <div className="flex gap-1.5 flex-wrap mb-2.5">
              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className={`text-[8px] font-semibold tracking-[1.5px] uppercase px-2 py-[3px] border ${badgeStyles[badge]}`}
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {badgeLabels[badge]}
                </span>
              ))}
            </div>
          )}
          <div
            className={`font-normal text-[var(--charcoal)] mb-1.5 leading-[1.3] ${
              item.featured ? "text-2xl" : "text-lg"
            }`}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {item.name}
          </div>
          <div className="w-[30px] h-px bg-[var(--gold-light)] my-3.5" />
          <div
            className="text-[15px] text-[var(--text-sub)] leading-[1.7] italic"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {item.description}
          </div>
          {item.allergens && (
            <div
              className="mt-2.5 text-[9px] tracking-[1px] text-[var(--text-light)] uppercase"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {item.allergens}
            </div>
          )}
        </div>
        <div className="text-right shrink-0">
          <div
            className={`font-medium text-[var(--gold-dark)] leading-none ${
              item.featured ? "text-[32px]" : "text-2xl"
            }`}
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {item.price}
          </div>
          {item.priceNote && (
            <div
              className="text-[9px] text-[var(--text-light)] tracking-[1px] mt-1"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {item.priceNote}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
