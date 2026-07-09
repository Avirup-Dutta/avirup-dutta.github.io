import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'avirupdutta043@gmail.com',
    href: 'mailto:avirupdutta043@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+8801854735691',
    href: 'tel:+8801854735691',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Avirup Dutta',
    href: 'https://linkedin.com/in/avirup-dutta',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Avirup Dutta',
    href: 'https://github.com/avirup-dutta',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <div className="inline-block text-accent font-mono text-sm">// Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's build something together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group terminal-frame hover:border-accent transition-all"
                >
                  <div className="terminal-header">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">contact.ts</span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-accent" />
                      <h3 className="text-lg font-bold text-foreground">{link.label}</h3>
                    </div>
                    <p className="text-muted-foreground group-hover:text-accent transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA section */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">
                Ready to collaborate or discuss your next project?
              </p>
              <p className="text-foreground font-mono text-sm">
                I typically respond within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = 'mailto:avirupdutta043@gmail.com')}
                className="bg-accent text-accent-foreground hover:bg-cyan-500 font-mono px-8 py-6"
              >
                Send Me an Email
              </Button>
              <Button
                onClick={() => window.open('https://linkedin.com/in/avirup-dutta', '_blank')}
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-mono px-8 py-6"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
