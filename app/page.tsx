import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <footer className="text-center py-12 text-slate-400 text-sm border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">
            Designed & Built by{" "}
            <span className="gradient-text font-semibold">Sampath Arjunan</span>
          </p>
          <p>&copy; 2025 All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
