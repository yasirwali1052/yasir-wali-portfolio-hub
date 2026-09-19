import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import XLogo from "@/components/icons/XLogo";

const NAV_LINKS = [
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/yasirwali1052", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/waliyasir", label: "LinkedIn" },
  { icon: XLogo, href: "https://x.com/YasirWali18", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:yasirwali301302@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="shell py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-xs">
            <div className="font-display text-xl font-bold gradient-text mb-2">Yasir Wali</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI/ML Engineer building intelligent, agent-based systems — from data pipelines to production deployment.
            </p>
            <div className="flex gap-2 mt-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  title={social.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150 text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {currentYear} Yasir Wali. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-border text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors duration-200"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
