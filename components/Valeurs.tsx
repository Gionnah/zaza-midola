import { HeartHandshake, Users, Sparkles, Sun } from "lucide-react";
import Reveal from "./Reveal";
import { values } from "@/lib/data";

const icons = [HeartHandshake, Users, Sparkles, Sun];

export default function Valeurs() {
  return (
    <section id="valeurs" className="bg-ardoise-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-tana">
            Nos valeurs
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ardoise-900 sm:text-4xl">
            Les valeurs qui nous guident
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = icons[i % icons.length];
            const accents = ["bg-vahiny", "bg-tana", "bg-masoandro", "bg-ardoise-700"];
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-ardoise-900/5 bg-nacre p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${accents[i % accents.length]} text-nacre`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ardoise-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-ardoise-700">{v.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
