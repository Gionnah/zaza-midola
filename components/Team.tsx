import Image from "next/image";
import Reveal from "./Reveal";
import { team } from "@/lib/data";

export default function Team() {
  return (
    <section id="equipe" className="bg-ardoise-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-tana">
            Notre équipe
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ardoise-900 sm:text-4xl">
            Une aventure familiale, portée à plusieurs
          </h2>
          <p className="mt-4 text-ardoise-700">
            Même à plusieurs milliers de kilomètres de distance, toute une
            famille et des bénévoles font vivre Zaza Midôla, en France comme
            à Madagascar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.08}>
              <div className="group h-full overflow-hidden rounded-3xl bg-nacre shadow-sm transition hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ardoise-900">
                    {m.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-vahiny">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ardoise-700">
                    {m.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
