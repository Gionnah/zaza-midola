import Image from "next/image";
import Reveal from "./Reveal";

export default function Histoire() {
  return (
    <section id="histoire" className="relative bg-nacre py-24 sm:py-32 text-justify">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image
              src="/histoire/histoire.png"
              alt="Enfants pendant un match du tournoi Zaza Midôla"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-masoandro px-6 py-4 text-nacre shadow-lg sm:block">
              <p className="font-display text-3xl font-semibold">2022</p>
              <p className="text-xs uppercase tracking-wide">premier coup d'envoi</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-tana">
              Notre histoire
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ardoise-900 sm:text-4xl">
              D'un cadeau d'anniversaire à une aventure humaine
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 space-y-4 text-ardoise-700">
            <p>
              L’histoire de Zaza Midôla a commencé en 2022, lors de la préparation d’un voyage familial à Madagascar.
              À cette période, je cherchais une idée originale de cadeau d’anniversaire pour mon fils, passionné de football.
              Je souhaitais lui offrir bien plus qu’un cadeau matériel : une expérience unique, porteuse de valeurs et de souvenirs.
            </p>
            <p>
              C’est alors qu’une idée m’est venue : organiser un tournoi de football pour les enfants de ma ville natale,{" "}
              <strong className="text-ardoise-900">Toamasina</strong>.
              Ce projet a donné naissance à la première édition de <strong className="text-ardoise-900">Zaza Midôla</strong>.

              Ce qui devait être au départ un cadeau d’anniversaire est rapidement devenu une magnifique aventure humaine.
              Voir la joie des enfants, leur enthousiasme et leur passion pour le football m’a profondément touchée.
            </p>
            <p>
              Face au succès de cette première édition, une deuxième a suivi
              en 2024. Aujourd'hui, nous préparons avec enthousiasme la
              troisième édition, prévue en décembre 2026.
            </p>
            <p>
              Afin de donner une structure durable à cette initiative et de développer de nouvelles actions solidaires,
              l’association Zaza Midôla a été officiellement créée le <strong className="text-ardoise-900">30 juillet 2025</strong>. 
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-6 inline-flex items-center gap-2 rounded-full bg-ardoise-50 px-4 py-2 text-xs font-medium text-ardoise-700">
            RNA&nbsp;: W643013903
          </Reveal>
        </div>
      </div>
    </section>
  );
}
