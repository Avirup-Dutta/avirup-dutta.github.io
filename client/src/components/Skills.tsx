import { Code2, Database, Zap } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Java', 'C++', 'Python', 'Go', 'JavaScript', 'TypeScript'],
    color: 'cyan',
  },
  {
    icon: Zap,
    title: 'Frameworks & Tools',
    skills: ['Spring Boot', 'Next.js', 'Flask', 'REST APIs', 'Git', 'Docker'],
    color: 'lime',
  },
  {
    icon: Database,
    title: 'Databases & Concepts',
    skills: ['MySQL', 'NoSQL', 'System Design', 'Data Structures', 'Algorithms', 'OOP'],
    color: 'violet',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section header */}
          <div className="space-y-4">
            <div className="inline-block text-accent font-mono text-sm">// Technical Skills</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tools & Technologies
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive toolkit built through hands-on experience and continuous learning.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group terminal-frame hover:border-accent transition-all hover:shadow-lg"
                >
                  {/* Terminal header */}
                  <div className="terminal-header">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">skills.ts</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                    </div>

                    <div className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group/skill"
                        >
                          <span className="text-cyan-400 font-bold">›</span>
                          <span className="group-hover/skill:translate-x-1 transition-transform">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Proficiency breakdown */}
          <div className="bg-background border border-border rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Proficiency Areas</h3>
            
            <div className="space-y-4">
              {[
                { label: 'Backend Development', level: 95 },
                { label: 'System Design', level: 85 },
                { label: 'Full-Stack Development', level: 80 },
                { label: 'Data Structures & Algorithms', level: 90 },
                { label: 'Database Design', level: 85 },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-mono text-sm">{item.label}</span>
                    <span className="text-accent font-mono text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2 overflow-hidden border border-border">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-lime-400 transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
