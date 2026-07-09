import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Online Judge Management System',
    period: '2025–Present',
    description: 'A full-stack online judge platform enabling users to solve coding problems, submit solutions, and receive automated verdicts.',
    highlights: [
      'Built REST APIs for authentication, problem management, code submission, and verdict generation',
      'Implemented secure C++ code execution with sandboxing',
      'Automated test case evaluation and asynchronous submission processing',
      'Designed scalable database schema for efficient query performance',
    ],
    tech: ['Spring Boot', 'Next.js', 'MySQL', 'REST APIs', 'Docker'],
    color: 'cyan',
  },
  {
    title: 'ExoWiz – AI-Powered Exoplanet Analysis Platform',
    period: '2025',
    description: 'A web-based AI platform for integrating exoplanet signal classification and analysis workflows.',
    highlights: [
      'Developed Flask backend with data preprocessing and feature extraction pipelines',
      'Implemented LightGBM and CNN models for signal detection',
      'Built human-in-the-loop validation system with feedback-driven prediction verification',
      'Integrated interactive review interfaces for data scientists',
    ],
    tech: ['Flask', 'Python', 'Pandas', 'NumPy', 'LightGBM', 'CNN', 'AI/ML'],
    color: 'lime',
  },
  {
    title: 'Ride Sharing Management System',
    period: '2023',
    description: 'A console-based ride sharing application demonstrating core OOP principles and system design.',
    highlights: [
      'Implemented ride booking and driver management systems',
      'Built trip tracking and payment handling modules',
      'Applied OOP design patterns for maintainability',
      'Demonstrated scalable architecture for future web deployment',
    ],
    tech: ['Java', 'OOP', 'System Design', 'Data Structures'],
    color: 'violet',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section header */}
          <div className="space-y-4">
            <div className="inline-block text-accent font-mono text-sm">// Featured Projects</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Building systems that matter
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects showcasing my expertise in backend development, system design, and full-stack engineering.
            </p>
          </div>

          {/* Projects grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group terminal-frame hover:border-accent transition-colors overflow-hidden"
              >
                {/* Terminal header */}
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">project.tsx</span>
                </div>

                {/* Project content */}
                <div className="p-8 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-sm text-accent font-mono">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <p className="text-sm font-mono text-muted-foreground">Key Features:</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className={`text-${project.color}-400 font-bold mt-1`}>▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-card border border-border rounded-full text-xs font-mono text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
            <p className="text-muted-foreground">
              Interested in learning more about these projects or discussing collaboration opportunities?
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-cyan-500 font-mono">
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
