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
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
            <span>Personal Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink href={item.href} className="text-lg font-medium px-2 py-1 rounded bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:text-white transition-colors">
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
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
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
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