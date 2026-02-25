import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CaseStudy from "@/components/sections/CaseStudies";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <CaseStudy />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}
