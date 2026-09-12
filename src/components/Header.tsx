import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const NAV_LINKS = [
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-[var(--shadow-sm)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between h-16 sm:h-[72px]">
        {/* Brand */}
        <button
          onClick={() => handleNavClick("#home")}
          className="font-display text-lg sm:text-xl font-bold gradient-text tracking-tight"
        >
          Yasir Wali
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors duration-200 px-3.5 py-2 rounded-lg"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors duration-200"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button asChild size="sm" className="bg-gradient-hero text-white shadow-sm hover:shadow-glow transition-shadow duration-300">
            <a href="/Yasir_Wali_Resume.pdf" download>
              <Download className="w-4 h-4 mr-1.5" /> Resume
            </a>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground/70"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-fade-up">
          <nav className="shell flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-150 px-2 py-3 rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <Button asChild size="sm" className="mt-2 bg-gradient-hero text-white">
              <a href="/Yasir_Wali_Resume.pdf" download>
                <Download className="w-4 h-4 mr-1.5" /> Download Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
