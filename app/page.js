import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import About from "@/components/About";

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
