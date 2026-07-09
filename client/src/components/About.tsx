export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative">
      {/* Subtle pattern background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(/manus-storage/accent-pattern_e9752362.png)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section header */}
          <div className="space-y-4">
            <div className="inline-block text-accent font-mono text-sm">// About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Backend Engineer & Problem Solver
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm a Computer Science undergraduate with a passion for building robust, scalable systems.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">Education</h3>
                <div className="border-l-2 border-accent pl-4 space-y-2">
                  <p className="font-mono text-accent">Chittagong Independent University</p>
                  <p className="text-muted-foreground">Bachelor of Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground">CGPA: 3.17/4.00 | Jan 2022 – June 2026</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">Expertise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span>Backend services and REST API design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span>System design and scalable architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span>Data structures, algorithms, and problem solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span>Full-stack development with modern frameworks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">Achievements</h3>
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors">
                    <p className="font-mono text-accent text-sm">🏆 Regional Winner</p>
                    <p className="text-foreground font-semibold">NASA Space Apps Challenge 2023</p>
                    <p className="text-sm text-muted-foreground mt-1">Developed AI-powered exoplanet analysis platform</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors">
                    <p className="font-mono text-accent text-sm">🥈 First Runners-up</p>
                    <p className="text-foreground font-semibold">Science Hackathon 2024</p>
                    <p className="text-sm text-muted-foreground mt-1">Chittagong University Science Carnival 3.0</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">Leadership</h3>
                <div className="border-l-2 border-lime-400 pl-4 space-y-2">
                  <p className="font-mono text-lime-400">Advisor (2025–Present)</p>
                  <p className="text-foreground font-semibold">Independent University Science & Engineering Club</p>
                  <p className="text-sm text-muted-foreground">Organizing technical events, workshops, and student activities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal statement */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-foreground leading-relaxed">
              I'm driven by the challenge of designing systems that scale. Whether it's architecting REST APIs, optimizing database queries, or solving complex algorithmic problems, I approach each challenge with precision and creativity. My goal is to build software that not only works but is elegant, maintainable, and built on solid foundations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I'm passionate about sharing knowledge—I've led technical workshops and mentored peers in system design and backend best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
