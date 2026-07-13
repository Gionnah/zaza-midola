import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Histoire from "@/components/Histoire";
import Valeurs from "@/components/Valeurs";
import Actions from "@/components/Actions";
import Team from "@/components/Team";
import Soutiens from "@/components/Soutiens";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Histoire />
      <Valeurs />
      <Actions />
      <Soutiens />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
