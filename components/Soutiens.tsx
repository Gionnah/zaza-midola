import Image from "next/image";
import Reveal from "./Reveal";
import { supporters } from "@/lib/data";

export default function Soutiens() {
  return (
    <section id="soutiens" className="bg-nacre py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-vahiny">
            Nos soutiens
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ardoise-900 sm:text-4xl">
            Ils nous accompagnent
          </h2>
          <p className="mt-4 text-ardoise-700">
            Depuis la naissance de Zaza Midôla, plusieurs personnes ont cru
            en ce projet et contribuent à son développement.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {supporters.map((s, i) => (
            <Reveal key={s.name + i} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-3xl border border-ardoise-900/5 bg-ardoise-50 p-8 text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-masoandro/30">
                  <Image src={s.photo} alt={s.name} fill className="object-cover" sizes="96px" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ardoise-900">
                  {s.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-tana">{s.role}</p>
                <p className="mt-3 text-sm text-ardoise-700">{s.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
