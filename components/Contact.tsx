import { MapPin, Mail, Phone, Facebook } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ardoise-900 py-24 text-nacre sm:py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-tana/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-vahiny/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-masoandro">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Vous aussi, participez à cette aventure
          </h2>
          <p className="mt-4 text-ardoise-300">
            Vous souhaitez en savoir plus, soutenir nos actions, devenir
            bénévole ou nous adresser un message&nbsp;? N'hésitez pas à nous
            contacter.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-nacre/5 p-6">
              <MapPin className="text-masoandro" size={22} />
              <p className="mt-3 text-sm font-semibold">Adresse</p>
              <p className="mt-1 text-sm text-ardoise-300">
                12 allée Mère Teresa
                <br />
                64000 Pau, France
              </p>
            </div>
            <div className="rounded-2xl bg-nacre/5 p-6">
              <Mail className="text-masoandro" size={22} />
              <p className="mt-3 text-sm font-semibold">E-mail</p>
              <a
                href="mailto:zaza_midola@yahoo.com"
                className="mt-1 inline-block text-sm text-ardoise-300 hover:text-nacre"
              >
                zaza_midola@yahoo.com
              </a>
            </div>
            <div className="rounded-2xl bg-nacre/5 p-6">
              <Phone className="text-masoandro" size={22} />
              <p className="mt-3 text-sm font-semibold">Téléphone</p>
              <a
                href="tel:+33652111566"
                className="mt-1 inline-block text-sm text-ardoise-300 hover:text-nacre"
              >
                06 52 11 15 66
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:zaza_midola@yahoo.com"
            className="rounded-full bg-vahiny px-7 py-3.5 text-sm font-semibold text-nacre transition hover:bg-vahiny-light"
          >
            Envoyer un message
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-nacre/20 px-7 py-3.5 text-sm font-semibold text-nacre transition hover:bg-nacre/10"
          >
            <Facebook size={16} /> Suivez-nous sur Facebook
          </a>
        </Reveal>
      </div>
    </section>
  );
}
