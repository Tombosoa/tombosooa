import { Metadata } from "next";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TracingBeam } from "@/components/ui/tracing-beam";
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

const products = [
   {
    title: "string1",
    link: "string1",
    thumbnail: "/img/img1.jpg"
},{
  title: "string2",
  link: "string2",
  thumbnail: "/img/img2.jpg"
},{
  title: "string3",
  link: "string3",
  thumbnail: "/img/img3.jpg"
},{
  title: "string4",
  link: "string4",
  thumbnail: "/img/img4.jpg"
},{
  title: "string5",
  link: "string5",
  thumbnail: "/img/img5.jpg"
},{
  title: "string6",
  link: "string6",
  thumbnail: "/img/img1.jpg"
},{
  title: "string7",
  link: "string7",
  thumbnail: "/img/img2.jpg"
},{
  title: "string8",
  link: "string8",
  thumbnail: "/img/img3.jpg"
},{
  title: "string9",
  link: "string9",
  thumbnail: "/img/img4.jpg"
},
]

export function ItChild() {
  return (
    <>
      <Head />
      <About />
      <Formation />
      <Projects />
      <Contact />
      <Footer />
 {/*     <HeroParallax products={products} />
*/}    </>
  )
}

export function BBody(){
  return(
    <TracingBeam children={<ItChild/>} />
  )
}

export default function Home() {
  return (
    <AuroraBackground className=" outline-hidden" children={<BBody/>} />
  );
}
