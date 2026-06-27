"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Reveal from "./Reveal";
import { galleryImages } from "@/lib/data";

// Le pas de chargement (8 par 8)
const IMAGE_INCREMENT = 8;

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Initialisation à 8 images
  const [visibleCount, setVisibleCount] = useState(IMAGE_INCREMENT);

  const close = () => setActiveIndex(null);
  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  };
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  };

  // Augmente le nombre d'images visibles de 8 à chaque clic
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + IMAGE_INCREMENT);
  };

  // Tableau des images actuellement affichées dans la grille
  const displayedImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;

  return (
    <section id="galerie" className="bg-ardoise-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-masoandro">
            Galerie
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ardoise-900 sm:text-4xl">
            Moments partagés
          </h2>
          <p className="mt-4 text-ardoise-700">
            Tournois, sourires, remises de trophées et bénévoles sur le
            terrain — quelques images de l'aventure Zaza Midôla.
          </p>
        </Reveal>

        {/* Grille d'images */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {displayedImages.map((img, i) => (
            <Reveal key={img.src} delay={(i % 8) * 0.04}>
              <button
                onClick={() => setActiveIndex(i)}
                className={`relative block w-full overflow-hidden rounded-2xl ${
                  i % 7 === 0 ? "aspect-[1/1] sm:row-span-2 sm:aspect-[1/2]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </button>
            </Reveal>
          ))}
        </div>

        {/* Bouton Voir Plus : Incrémente de 8 tant qu'il reste des images */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleShowMore}
              className="inline-flex items-center gap-2 rounded-full border border-ardoise-200 bg-white px-6 py-3 text-sm font-semibold text-ardoise-700 shadow-sm transition hover:bg-ardoise-100 hover:text-ardoise-900"
            >
              <Plus size={16} />
              Voir plus de photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Modal d'affichage plein écran */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ardoise-900/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Fermer"
            onClick={close}
            className="absolute right-5 top-5 rounded-full bg-nacre/10 p-2 text-nacre hover:bg-nacre/20"
          >
            <X size={24} />
          </button>
          <button
            aria-label="Image précédente"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-nacre/10 p-2 text-nacre hover:bg-nacre/20 sm:left-6"
          >
            <ChevronLeft size={28} />
          </button>
          <div
            className="relative h-[70vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            aria-label="Image suivante"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-nacre/10 p-2 text-nacre hover:bg-nacre/20 sm:right-6"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}