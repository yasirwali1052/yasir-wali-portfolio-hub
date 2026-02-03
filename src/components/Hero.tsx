import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/proff-pic.jpg";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const NAV_LINKS = [
  { label: "Profile", href: "#about" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Professional Experience", href: "#experience" },
  { label: "Project Experience", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Hero = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setNavOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-white to-primary/5 dark:from-background dark:via-background/95 dark:to-primary/5"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-16 -top-24 h-56 w-56 rounded-full blur-3xl bg-primary/15" />
        <div className="absolute right-4 top-10 h-72 w-72 rounded-full blur-3xl bg-accent/12" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full shell gap-8 md:gap-14 lg:gap-20 pt-14 pb-24 sm:pb-16">
        {/* Left: Profile Photo */}
        <div className="flex-1 flex flex-col items-center md:items-start relative w-full">
          {/* Hamburger button for mobile - moved to right */}
          <div className="flex md:hidden w-full justify-end mb-4 relative">
            <button
              className="p-2 rounded-lg border border-border bg-white/70 shadow-sm hover:shadow-md transition-shadow duration-200"
              onClick={() => setNavOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {navOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
            {/* Dropdown nav links for mobile */}
            {navOpen && (
              <ul className="absolute right-0 top-12 z-20 w-11/12 max-w-xs bg-white/90 border border-border rounded-xl shadow-[var(--shadow-lg)] flex flex-col py-2 text-base backdrop-blur">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="text-center">
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full px-4 py-3 text-base text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-150 bg-transparent border-none cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-white to-secondary shadow-[var(--shadow-lg)] mx-auto p-1.5">
            <div className="absolute inset-3 rounded-full gradient-ring opacity-60" aria-hidden />
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover object-center rounded-full ring-4 ring-white shadow-2xl"
            />
          </div>
        </div>
        {/* Right: Text and Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 space-y-5">
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
            Yasir Wali
          </h1>
          {/* Subtitle/Role with Typewriter Effect */}
          <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-foreground/80 flex items-center gap-2">
            <span className="h-10 inline-flex items-center px-3 rounded-full bg-primary/10 text-primary font-medium shadow-sm">
              <Typewriter
                words={["AI/ML Engineer","MLOps Pipelines"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </div>
          {/* Buttons Row - responsive */}
          <div className="flex flex-col sm:flex-row flex-nowrap justify-center md:justify-start gap-3 sm:gap-4 pt-2">
            <Button size="lg" className="bg-[#D93025] text-white hover:bg-[#bd261d] font-semibold px-4 sm:px-7 py-3 sm:py-4 text-sm sm:text-base rounded-xl shadow-[var(--shadow-lg)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-glow w-full sm:w-auto">
              <a href="mailto:yasirwali301302@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5 sm:w-5 sm:h-5 text-white" /> Email Me
              </a>
            </Button>
            <Button size="lg" className="bg-[#0A66C2] text-white hover:bg-[#094f99] font-semibold px-4 sm:px-7 py-3 sm:py-4 text-sm sm:text-base rounded-xl shadow-[var(--shadow-lg)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-glow w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/waliyasir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 sm:w-5 sm:h-5" /> LinkedIn
              </a>
            </Button>
            <Button size="lg" className="bg-[#24292e] text-white hover:bg-[#1b1f23] font-semibold px-4 sm:px-7 py-3 sm:py-4 text-sm sm:text-base rounded-xl shadow-[var(--shadow-lg)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-glow w-full sm:w-auto">
              <a href="https://github.com/yasirwali1052" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5 sm:w-5 sm:h-5" /> GitHub
              </a>
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-[#5B8DEF] to-[#6A5AE0] text-white font-semibold px-4 sm:px-7 py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-glow w-full sm:w-auto">
              <a href="/yasir_wali_resume.pdf" download className="flex items-center gap-2">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;