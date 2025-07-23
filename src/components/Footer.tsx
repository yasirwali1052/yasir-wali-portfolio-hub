import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Yasir Wali</h3>
            <p className="text-muted-foreground">
              AI/ML Engineer passionate about building intelligent systems 
              that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/yasirwali1052" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/waliyasir" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:yasirwali301302@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>yasirwali301302@gmail.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Yasir Wali. Made with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;