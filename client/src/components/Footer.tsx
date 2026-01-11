import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display text-white">DevFolio</h3>
            <p className="text-muted-foreground max-w-xs">
              Building digital experiences with modern technologies. 
              Always learning, always creating.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors w-fit">About Me</Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors w-fit">Projects</Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors w-fit">Services</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors w-fit">Contact</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} DevFolio. All rights reserved.</p>
          <p>Designed & Built with ❤️ using MERN Stack</p>
        </div>
      </div>
    </footer>
  );
}
