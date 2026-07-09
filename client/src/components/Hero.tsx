import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with hero image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/manus-storage/hero-background_ac6fa38a.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-1" />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-8 py-20">
        <div className="space-y-6 max-w-3xl">
          {/* Name */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
              Avirup Dutta
            </h1>
            <p className="text-xl md:text-2xl text-accent font-mono font-semibold">
              Backend Engineer & System Designer
            </p>
          </div>

          {/* Badge */}
          <div className="inline-block px-3 py-1 bg-card border border-border rounded-full text-sm text-muted-foreground font-mono">
            Computer Science Student | Chittagong Independent University
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable backend systems, REST APIs, and clean software architecture. Experienced with Java, Spring Boot, Go, and Next.js. Strong interest in system design and problem solving.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-accent text-accent-foreground hover:bg-cyan-500 font-mono px-8 py-6 text-base"
          >
            Explore My Work
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10 font-mono px-8 py-6 text-base"
          >
            Get in Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 hover:bg-card rounded-lg transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
}
