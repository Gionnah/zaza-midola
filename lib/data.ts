export const team = [
  {
    name: "Aurélie Soanimino Radomiarisoa épouse Picot",
    role: "Fondatrice et Présidente",
    bio: "Originaire de Toamasina (Madagascar) et résidant à Pau, elle est à l'origine du projet Zaza Midôla depuis sa première édition en 2022.",
    photo: "https://picsum.photos/seed/zaza-aurelie/480/480",
  },
  {
    name: "Christophe Picot",
    role: "Trésorier",
    bio: "Présent depuis le début de cette aventure, il apporte son soutien moral, sa confiance et son aide financière qui participent activement à la réalisation des projets de l'association.",
    photo: "/equipes/picot.jpg",
  },
  {
    name: "Yves Rosati",
    role: "Secrétaire",
    bio: "Passionné de football et fidèle soutien de l'association, il contribue au développement du projet grâce à son accompagnement, ses conseils et son réseau.",
    photo: "/equipes/rosati.jpg",
  },
  {
    name: "Josinie",
    role: "Restaurant Ninie Soupe — Toamasina",
    bio: "À chaque édition du tournoi, elle prépare avec son équipe les repas destinés aux enfants participants et à leurs éducateurs, dans une ambiance chaleureuse et conviviale.",
     photo: "/equipes/josinie.jpg",
  },
  {
    name: "Tonton Solo & Madame Simonelle",
    role: "Organisation sur le terrain",
    bio: "Ils consacrent beaucoup de temps et d'énergie à la préparation du tournoi : infrastructures sportives et démarches administratives sur place à Toamasina.",
    photo: "https://picsum.photos/seed/zaza-solo/480/480",
  },
  {
    name: "Les bénévoles",
    role: "France & Madagascar",
    bio: "Ils participent à l'organisation des événements et aux actions solidaires, en France comme à Madagascar.",
    photo: "/benevoles/benevoles.png",
  },
];

export const supporters = [
  {
    name: "Patrick Cazaux",
    role: "Gravoplast Pau",
    bio: "Depuis la première édition du tournoi, il accompagne l'association avec générosité en réalisant et offrant les médailles, trophées, coupes et gravures destinés aux jeunes participants.",
    photo: "https://picsum.photos/seed/zaza-patrick/400/400",
  },
  {
    name: "Christophe Picot",
    role: "Soutien financier",
    bio: "Présent depuis le début de cette aventure, il apporte son soutien moral, sa confiance et son aide financière.",
    photo: "/equipes/picot.jpg",
  },
  {
    name: "Yves Rosati",
    role: "Conseils & réseau",
    bio: "Passionné de football et fidèle soutien de l'association, il contribue au développement du projet grâce à son accompagnement.",
    photo: "/equipes/rosati.jpg",
  },
];

export const values = [
  {
    title: "Solidarité",
    text: "Aider ceux qui en ont besoin, sans distinction.",
  },
  {
    title: "Respect",
    text: "Respect des enfants, des éducateurs, des familles et des bénévoles.",
  },
  {
    title: "Partage",
    text: "Créer des moments de rencontre et de fraternité.",
  },
  {
    title: "Espoir",
    text: "Permettre aux enfants de croire en leurs rêves.",
  },
];

export const timeline = [
  {
    year: "2022",
    title: "Première édition",
    text: "Un cadeau d'anniversaire devient une aventure humaine : naissance du tournoi à Toamasina.",
  },
  {
    year: "2024",
    title: "Deuxième édition",
    text: "Face au succès de la première édition, le tournoi revient avec encore plus d'enfants et de bénévoles.",
  },
  {
    year: "30 juillet 2025",
    title: "Création de l'association",
    text: "Zaza Midôla devient officiellement une association (RNA : W643013903) pour pérenniser le projet.",
  },
  {
    year: "Déc. 2026",
    title: "Troisième édition",
    text: "Une nouvelle édition se prépare, avec toujours plus d'ambition solidaire.",
  },
];

export const stats = [
  { value: "3", label: "éditions du tournoi" },
  { value: "2022", label: "année de création" },
  { value: "100%", label: "bénévole" },
  { value: "2", label: "pays mobilisés" },
];

export const galleryImages = Array.from({ length: 82 }).map((_, i) => ({
  src: `/gallery/${i + 1}.jfif`,
  alt: `Photo du tournoi Zaza Midôla ${i + 1}`,
}));
