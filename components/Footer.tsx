import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ardoise-900 py-8 text-center text-xs text-ardoise-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6">
        <span className="flex items-center gap-2 font-display text-sm font-semibold text-nacre">
          <Heart size={14} fill="currentColor" className="text-vahiny" />
          Zaza Midôla
        </span>
        <p>
          Association loi 1901 — RNA W643013903 — Pau, France
        </p>
        <p>© {new Date().getFullYear()} Zaza Midôla. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
