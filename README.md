# Zaza Midôla — Site vitrine

Site vitrine responsive pour l'association **Zaza Midôla** (tournoi de
football solidaire pour les enfants de Toamasina, Madagascar), construit
avec **Next.js 14 (App Router)**, **Tailwind CSS** et **Framer Motion**.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx       → polices (Fraunces + Hanken Grotesk), métadonnées SEO
  page.tsx          → assemble toutes les sections de la page d'accueil
  globals.css       → styles globaux + animation du background du héro
components/
  Navbar.tsx        → navigation responsive (menu mobile inclus)
  Hero.tsx          → section héro avec background animé
  Histoire.tsx       → section "Notre histoire"
  Valeurs.tsx        → section "Nos valeurs"
  Actions.tsx        → section "Nos actions" + timeline (2022 → 2026)
  Team.tsx           → fondatrice, trésorier, secrétaire, bénévoles (photos)
  Soutiens.tsx       → partenaires / soutiens de l'association
  Gallery.tsx        → galerie photo (grille + lightbox cliquable)
  Contact.tsx        → coordonnées + boutons d'action
  Footer.tsx         → pied de page
  Reveal.tsx         → wrapper d'animation au scroll réutilisable
lib/
  data.ts           → tout le contenu texte + chemins des images (à modifier)
```

## Design

- **Couleurs** : rouge `#C7372B` (vahiny), vert `#2E7D4F` (tana), blanc cassé
  `#FBF8F3` (nacre), gris ardoise `#43474D`/`#23262A`, et une couleur
  signature or/soleil `#E8A23A` (masoandro) inspirée des couchers de soleil
  de Toamasina et des médailles du tournoi. Toutes les couleurs sont
  définies dans `tailwind.config.ts`.
- **Typographies** : Fraunces (titres, via `next/font/google`) + Hanken
  Grotesk (texte courant).
- **Animations** : background du héro animé (dégradés en mouvement +
  trajectoire de ballon en pointillés), apparitions au scroll sur tous les
  blocs (`components/Reveal.tsx`, basé sur Framer Motion), micro-interactions
  au survol (cartes, galerie).
- Les animations respectent `prefers-reduced-motion`.

## Remplacer les images

Toutes les images sont actuellement des placeholders **picsum.photos**
(générées à la volée, gratuites, sans clé API) pour pouvoir visualiser le
rendu tout de suite. Pour les remplacer par vos propres photos :

1. Déposez vos fichiers dans `public/images/`.
2. Dans `lib/data.ts`, remplacez les URLs `https://picsum.photos/...` par
   `/images/nom-du-fichier.jpg`.
3. Pour les photos d'équipe (`team`), de soutiens (`supporters`) et la
   galerie (`galleryImages`), c'est le même principe — juste changer le
   chemin de l'image, le reste du composant s'adapte automatiquement.

## Modifier les textes

Tout le contenu rédactionnel (histoire, valeurs, timeline, bios, chiffres
clés) est centralisé dans `lib/data.ts` et dans les composants des sections
— pas besoin de toucher au design pour mettre à jour un texte.
