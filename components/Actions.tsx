"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ImageIcon, Film } from "lucide-react";
import Reveal from "./Reveal";
import { timeline } from "@/lib/data";

function TimelineMedia({
  media,
}: {
  media: NonNullable<(typeof timeline)[number]["media"]>;
}) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-ardoise-900/8">
      {media.type === "image" ? (
        <div className="relative aspect-video w-full bg-ardoise-100">
          <Image
            src={media.src}
            alt={media.caption ?? "Photo du tournoi"}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>
      ) : (
        <video
          src={media.src}
          poster={media.poster}
          controls
          preload="none"
          className="aspect-video w-full bg-ardoise-900"
          aria-label={media.caption ?? "Vidéo du tournoi"}
        />
      )}
      {media.caption && (
        <p className="border-t border-ardoise-900/8 bg-ardoise-50/60 px-4 py-2.5 text-xs text-ardoise-700">
          {media.caption}
        </p>
      )}
    </div>
  );
}

export default function Actions() {
  // Garde l'index de l'item dont le media est ouvert (null = tous fermés)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="actions" className="bg-nacre py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-vahiny">
            Nos actions
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ardoise-900 sm:text-4xl">
            Le tournoi Zaza Midôla
          </h2>
          <p className="mt-4 text-ardoise-700">
            Chaque édition rassemble des enfants autour des valeurs du sport :
            respect, esprit d'équipe, partage et dépassement de soi.
            Au-delà du football, notre ambition est aussi de développer de
            nouvelles actions solidaires en faveur des enfants et des familles.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-[18px] top-0 hidden h-full w-px bg-ardoise-900/10 sm:block" />

          <ul className="space-y-10">
            {timeline.map((t, i) => {
              const isOpen = openIndex === i;
              const hasMedia = !!t.media;

              return (
                <Reveal key={t.year} delay={i * 0.08}>
                  <li className="relative flex gap-6 sm:pl-2">
                    {/* Pastille numérotée */}
                    <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-tana text-xs font-bold text-nacre ring-4 ring-nacre">
                      {i + 1}
                    </div>

                    {/* Carte de l'édition */}
                    <div className="rounded-2xl border border-ardoise-900/5 bg-ardoise-50 px-6 py-5 sm:flex-1">
                      {/* En-tête de la carte */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold uppercase tracking-wide text-masoandro">
                            {t.year}
                          </p>
                          <h3 className="mt-1 font-display text-lg font-semibold text-ardoise-900">
                            {t.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-ardoise-700">
                            {t.text}
                          </p>
                        </div>

                        {/* Bouton "voir le media" — visible uniquement si media présent */}
                        {hasMedia && (
                          <button
                            onClick={() =>
                              setOpenIndex(isOpen ? null : i)
                            }
                            aria-expanded={isOpen}
                            aria-label={
                              isOpen
                                ? "Masquer le media"
                                : t.media!.type === "video"
                                ? "Voir la vidéo"
                                : "Voir la photo"
                            }
                            className={`mt-0.5 flex flex-shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                              isOpen
                                ? "border-vahiny/30 bg-vahiny/10 text-vahiny"
                                : "border-ardoise-900/10 bg-nacre text-ardoise-700 hover:border-tana/40 hover:bg-tana/10 hover:text-tana"
                            }`}
                          >
                            {t.media!.type === "video" ? (
                              <Film size={13} />
                            ) : (
                              <ImageIcon size={13} />
                            )}
                            <span className="hidden sm:inline">
                              {t.media!.type === "video"
                                ? "Vidéo"
                                : "Photo"}
                            </span>
                            <ChevronDown
                              size={13}
                              className={`transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Zone media dépliable */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          isOpen && hasMedia
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                        aria-hidden={!isOpen}
                      >
                        <div className="overflow-hidden">
                          {hasMedia && (
                            <TimelineMedia media={t.media!} />
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}