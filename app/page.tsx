import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Capabilities from "@/components/sections/Capabilities";
import Why from "@/components/sections/Why";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Capabilities />
      <Why />
      <CTA />
      <Footer />
    </main>
  );
}
