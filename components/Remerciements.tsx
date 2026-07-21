import Reveal from "./Reveal";

const personnes = [
  {
    titre: "Josinie — Restaurant Nanie Soupe",
    paragraphes: [
      "Un immense merci à ma petite sœur Josinie, propriétaire du restaurant Nanie Soupe à Toamasina.",
      "À chaque édition du tournoi Zaza Midôla, elle prépare avec son équipe les repas destinés aux enfants participants et à leurs éducateurs.",
      "Sa générosité, sa disponibilité et son investissement sont essentiels à la réussite de cet événement. Grâce à elle, les enfants peuvent partager de bons repas dans une ambiance chaleureuse et conviviale tout au long du tournoi.",
    ],
  },
  {
    titre: "Tonton Solo et Madame Simonelle",
    paragraphes: [
      "Je tiens également à remercier chaleureusement mon tonton Solo et Madame Simonelle pour leur implication remarquable.",
      "Depuis le début de cette aventure, ils consacrent beaucoup de temps et d'énergie à la préparation du tournoi. Ils participent notamment à l'organisation sur le terrain, à la préparation des infrastructures sportives ainsi qu'aux différentes démarches administratives nécessaires au bon déroulement de l'événement.",
      "Leur dévouement, leur sérieux et leur disponibilité sont précieux pour Zaza Midôla.",
    ],
  },
];

export default function Remerciements() {
  return (
    <section
      id="remerciements"
      className="relative overflow-hidden bg-ardoise-50/50 py-24 sm:py-32"
    >
      {/* Ornement de fond — guillemet décoratif */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-6 select-none font-display text-[18rem] font-semibold leading-none text-ardoise-900/[0.04] sm:left-12"
      >
        "
      </span>

      <div className="relative mx-auto max-w-3xl px-6">

        {/* Chapeau */}
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-tana">
            Remerciements
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ardoise-900 sm:text-4xl">
            Ma famille à Toamasina
          </h2>
        </Reveal>

        {/* Introduction */}
        <Reveal delay={0.1} className="mt-8 space-y-4 text-ardoise-700">
          <p className="text-lg leading-relaxed">
            Je souhaite adresser une reconnaissance toute particulière à ma
            famille à Toamasina, qui m'accompagne avec{" "}
            <em>amour, énergie et dévouement</em> depuis la première édition
            de Zaza Midôla.
          </p>
          <p className="leading-relaxed">
            Même à plusieurs milliers de kilomètres de distance, je sais
            pouvoir compter sur leur présence et leur engagement pour faire
            vivre ce projet auprès des enfants.
          </p>
        </Reveal>

        {/* Séparateur */}
        <Reveal delay={0.12}>
          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-ardoise-900/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-masoandro" />
            <div className="h-px flex-1 bg-ardoise-900/10" />
          </div>
        </Reveal>

        {/* Blocs par personne */}
        <div className="space-y-10">
          {personnes.map((p, i) => (
            <Reveal key={p.titre} delay={0.08 + i * 0.1}>
              <div className="relative bg-nacre px-7 py-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-ardoise-900">
                  {p.titre}
                </h3>
                <div className="mt-4 space-y-3 text-ardoise-700">
                  {p.paragraphes.map((txt, j) => (
                    <p key={j} className="leading-relaxed">
                      {txt}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Séparateur */}
        <Reveal delay={0.1}>
          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-ardoise-900/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-masoandro" />
            <div className="h-px flex-1 bg-ardoise-900/10" />
          </div>
        </Reveal>

        {/* Clôture */}
        <Reveal delay={0.12} className="space-y-4 text-ardoise-700">
          <h3 className="font-display text-xl font-semibold text-ardoise-900">
            Merci du fond du cœur
          </h3>
          <p className="leading-relaxed">
            À travers ces quelques lignes, je souhaite exprimer toute ma
            gratitude à ma famille, à mes proches et à toutes les personnes
            qui contribuent, chacun à leur manière, à faire vivre Zaza Midôla.
          </p>
          <p className="leading-relaxed">
            Cette aventure est la nôtre, et chaque sourire d'enfant est aussi
            le fruit de votre engagement.
          </p>
        </Reveal>

        {/* Signature */}
        <Reveal delay={0.15}>
          <div className="mt-10 border-t border-ardoise-900/10 pt-8">
            <p className="text-sm italic text-ardoise-500">
              Avec toute mon affection et ma reconnaissance,
            </p>
            <p className="mt-3 font-display text-lg font-semibold text-ardoise-900">
              Aurélie Soanimino Radomiarisoa épouse Picot
            </p>
            <p className="mt-1 text-sm font-medium text-tana">
              Fondatrice de l'association Zaza Midôla
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}