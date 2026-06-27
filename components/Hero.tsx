"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { stats } from "@/lib/data";

const BACKGROUND_IMAGES = [
  "/hero/hero-2.png",
  "/hero/hero-3.png",
  "/hero/hero-4.png",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === BACKGROUND_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="accueil"
      className="relative flex min-h-[100vh] flex-col justify-between overflow-hidden pt-32 pb-6"
    >
      {/* Arrière-plan */}
      <div className="absolute inset-0 z-0">
        
        {/* EN MOBILE : Image fixe unique (hero-4.png) sans animation */}
        <div className="absolute inset-0 blur-[2px] scale-105 sm:hidden">
          <Image
            src="/hero/hero-4.png"
            alt="Photo d'illustration Toamasina Mobile"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* EN DESKTOP (sm et +) : Carrousel d'images animé */}
        <div className="hidden sm:block absolute inset-0 blur-[2px] scale-105">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={BACKGROUND_IMAGES[currentImageIndex]}
                alt={`Photo d'illustration Toamasina ${currentImageIndex + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Overlay renforcé commun à toutes les tailles */}
        <div className="absolute inset-0 bg-black/60 grain z-10" aria-hidden="true">
          {/* Ligne du coup franc (Signature) */}
          <svg
            className="absolute inset-0 h-full w-full opacity-30"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M -5 78 C 25 8, 75 8, 105 78"
              fill="none"
              stroke="#fff"
              strokeOpacity="0.2"
              strokeWidth="0.4"
              strokeDasharray="1.2 2.4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {/* Le ballon */}
          <div
            className="ball-path animate-ball-arc absolute h-4 w-4 rounded-full bg-nacre shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 35% 30%, #fff 0%, #fff 35%, #23262A 36%, #fff 37%, #fff 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center px-6 text-center tracking-wide">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ardoise-900"
        >
          Toamasina, Madagascar — depuis 2022
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-snug text-white drop-shadow-lg sm:text-5xl md:text-6xl"
        >
          Ensemble pour les enfants
          <br className="hidden sm:inline" /> de{" "}
          <span className="text-vahiny brightness-125 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            Toamasina
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl text-balance text-lg md:text-xl text-nacre font-medium leading-relaxed drop-shadow-md"
        >
          Offrir aux enfants des moments de joie, de partage et d'espoir, à
          travers le sport et des actions solidaires.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#histoire"
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-ardoise-900 shadow-lg transition transform hover:scale-105 hover:bg-nacre"
          >
            Découvrir notre histoire
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/40 bg-black/40 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white shadow-lg transition transform hover:scale-105 hover:bg-black/60"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 pb-6 mt-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4 shadow-xl">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center gap-2 bg-white/95 px-3 py-6 text-center backdrop-blur-md"
            >
              <span className="font-display text-2xl font-bold text-tana sm:text-3xl">
                {s.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-ardoise-600">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center text-white/90">
          <ArrowDown size={22} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}