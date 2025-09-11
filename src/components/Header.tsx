import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const menuItems = [
    { href: "#about", label: "Profile" },
    { href: "#skills", label: "Technical Skills" },
    { href: "#experience", label: "Professional Experience" },
    { href: "#projects", label: "Project Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];
  
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
            <span>Personal Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap justify-center gap-7 py-3 px-4 bg-gray-100 border border-gray-300 rounded-lg shadow-lg w-full mx-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-base font-medium text-[#222] hover:text-[#19e6ff] transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button asChild size="sm" className="ml-2 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow">
              <a href="/yasir-wali-cv.pdf" download>
                <Download className="w-4 h-4 mr-1" /> Download CV
              </a>
            </Button>
            <div className="flex items-center ml-4">
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                aria-label="Toggle dark mode"
              />
              {darkMode ? <Moon className="ml-2 w-5 h-5 text-primary" /> : <Sun className="ml-2 w-5 h-5 text-accent" />}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-lg text-[#222] font-medium hover:text-[#19e6ff] transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <Button asChild size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground mt-2">
                <a href="/yasir-wali-cv.pdf" download>
                  <Download className="w-4 h-4 mr-1" /> Download CV
                </a>
              </Button>
              <div className="flex items-center gap-2 mt-4">
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  aria-label="Toggle dark mode"
                />
                {darkMode ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-accent" />}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;