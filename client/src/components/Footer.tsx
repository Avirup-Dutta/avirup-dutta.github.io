import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/manus-storage/logo_5f162fbf.png"
                  alt="Avirup Dutta"
                  className="w-6 h-6"
                />
                <span className="font-mono font-bold text-foreground">
                  avirup<span className="text-accent">.</span>dev
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Backend engineer passionate about scalable systems and clean code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h4 className="font-mono font-bold text-foreground text-sm">Quick Links</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-accent transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-accent transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <h4 className="font-mono font-bold text-foreground text-sm">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/avirup-dutta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-background rounded-lg transition-colors text-muted-foreground hover:text-accent"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/avirup-dutta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-background rounded-lg transition-colors text-muted-foreground hover:text-accent"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:avirupdutta043@gmail.com"
                  className="p-2 hover:bg-background rounded-lg transition-colors text-muted-foreground hover:text-accent"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                © {currentYear} Avirup Dutta. All rights reserved.
              </p>
              <p className="font-mono text-xs">
                Built with <span className="text-accent">React</span> + <span className="text-lime-400">Tailwind</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
