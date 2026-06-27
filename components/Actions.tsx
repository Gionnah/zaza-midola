import Reveal from "./Reveal";
import { timeline } from "@/lib/data";

export default function Actions() {
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
            nouvelles actions solidaires en faveur des enfants et des
            familles.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[18px] top-0 hidden h-full w-px bg-ardoise-900/10 sm:block" />
          <ul className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <li className="relative flex gap-6 sm:pl-2">
                  <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-tana text-xs font-bold text-nacre ring-4 ring-nacre">
                    {i + 1}
                  </div>
                  <div className="rounded-2xl border border-ardoise-900/5 bg-ardoise-50 px-6 py-5 sm:flex-1">
                    <p className="text-sm font-semibold uppercase tracking-wide text-masoandro">
                      {t.year}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ardoise-900">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ardoise-700">{t.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
