import { Metadata } from "next";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroParallax } from "@/components/ui/hero-parallax"; // Vérifiez si ce composant est bien défini
import { TracingBeam } from "@/components/ui/tracing-beam"; // Vérifiez si ce composant est bien défini
import Head from "@/components/head/head";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Formation from "@/components/formation/page";
import Projects from "@/components/projects/page";
import Contact from "@/components/contact/page";

export const metadata: Metadata = {
  title: "Ramanatombosoa Nantenaina",
  description: "This is my personal portfolio",
};

// Si vous utilisez TypeScript, ajoutez un type pour les produits.
type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

const products: Product[] = [
  { title: "string1", link: "string1", thumbnail: "/img/img1.jpg" },
  { title: "string2", link: "string2", thumbnail: "/img/img2.jpg" },
  { title: "string3", link: "string3", thumbnail: "/img/img3.jpg" },
  { title: "string4", link: "string4", thumbnail: "/img/img4.jpg" },
  { title: "string5", link: "string5", thumbnail: "/img/img5.jpg" },
  { title: "string6", link: "string6", thumbnail: "/img/img1.jpg" },
  { title: "string7", link: "string7", thumbnail: "/img/img2.jpg" },
  { title: "string8", link: "string8", thumbnail: "/img/img3.jpg" },
  { title: "string9", link: "string9", thumbnail: "/img/img4.jpg" },
];

export default function Home() {
  return (
    <AuroraBackground className="outline-hidden">
      <TracingBeam>
        <Head />
        <About />
        <Formation />
        <Projects />
        <Contact />
        <Footer />
      </TracingBeam>
    </AuroraBackground>
  );
}
