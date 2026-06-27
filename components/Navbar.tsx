"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#histoire", label: "Notre histoire" },
  { href: "#actions", label: "Nos actions" },
  { href: "#valeurs", label: "Nos valeurs" },
  { href: "#equipe", label: "L'équipe" },
  { href: "#soutiens", label: "Nos soutiens" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nacre/90 backdrop-blur-md shadow-[0_2px_20px_rgba(35,38,42,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo / Titre : Blanc au début, Ardoise au scroll */}
        <a 
          href="#accueil" 
          className={`flex items-center gap-2 font-display text-lg font-semibold transition-colors duration-300 ${
            scrolled ? "text-ardoise-900" : "text-white drop-shadow-sm"
          }`}
        >
          {/* Note: Ajuste la taille du logo si width={4} est une typo, par exemple width={32} height={32} */}
          <Image 
            width={52} 
            height={52} 
            alt="logo zaza midola" 
            src={"/logo/logo.png"} 
            className={`transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`} 
          />
          <span>Zaza Midola</span>
        </a>

        {/* Liens de navigation : Blancs au début, Ardoise au scroll */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled 
                    ? "text-ardoise-700 hover:text-vahiny" 
                    : "text-white/90 hover:text-white drop-shadow-sm"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-vahiny px-5 py-2.5 text-sm font-semibold text-nacre shadow-sm transition hover:bg-vahiny-dark lg:inline-block"
        >
          Nous soutenir
        </a>

        {/* Bouton Menu Burger : Blanc au début, Ardoise au scroll */}
        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className={`rounded-full p-2 transition-colors duration-300 lg:hidden ${
            scrolled ? "text-ardoise-900" : "text-white"
          }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menu mobile (garde son fond nacre pour rester lisible) */}
      {open && (
        <div className="border-t border-ardoise-100 bg-nacre px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ardoise-700 hover:bg-ardoise-50 hover:text-vahiny"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-vahiny px-5 py-3 text-center text-sm font-semibold text-nacre"
          >
            Nous soutenir
          </a>
        </div>
      )}
    </header>
  );
}