import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Terminal Elegance Portfolio
 * A backend engineer's digital workspace showcasing expertise in scalable systems,
 * REST APIs, and clean software architecture.
 * 
 * Design: Dark theme with electric cyan (#00d9ff) and lime green (#39ff14) accents
 * Typography: JetBrains Mono for headlines, Inter for body text
 * Layout: Asymmetric sections with terminal-inspired components
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
