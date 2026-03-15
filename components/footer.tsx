export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[rgba(255,255,255,0.5)] text-center px-5 py-[50px]">
      <div
        className="text-[28px] font-normal text-[var(--gold-light)] mb-1.5"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        <em className="italic">The</em> Challenge
      </div>
      <p
        className="italic text-[15px] text-[rgba(255,255,255,0.35)] mb-6"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        An exceptional culinary experience since 1998
      </p>
      <div className="w-[60px] h-px bg-[var(--gold)] mx-auto my-5 opacity-50" />
      <div
        className="text-[10px] tracking-[2px] uppercase leading-[2.2] text-[rgba(255,255,255,0.3)]"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        HAMMAMET
        <br />
        Tel : <strong className="text-[var(--gold-light)] font-medium">+33 1 42 60 08 06</strong>
        <br />
        Ouvert du Mardi au Dimanche
        <br />
        <strong className="text-[var(--gold-light)] font-medium">12h - 14h30</strong> &{" "}
        <strong className="text-[var(--gold-light)] font-medium">19h - 22h30</strong>
      </div>
      <div className="w-[60px] h-px bg-[var(--gold)] mx-auto my-5 opacity-50" />
      <div
        className="text-[10px] tracking-[2px] uppercase text-[rgba(255,255,255,0.3)]"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        Allergies or intolerances? Our team is at your service.
      </div>
    </footer>
  );
}
