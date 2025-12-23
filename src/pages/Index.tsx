import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const StickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 mt-3 sm:mt-5 px-3 max-w-5xl mx-auto transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-[var(--shadow-lg)] border border-border backdrop-blur'
          : 'bg-white/70 border border-border shadow-sm backdrop-blur'
      } rounded-2xl`}
    >
      <ul className="hidden md:flex flex-nowrap whitespace-nowrap justify-center gap-5 py-3 px-2">
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#about")}
            className={`text-sm font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer rounded-lg ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Profile
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#skills")}
            className={`text-sm font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer rounded-lg ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Technical Skills
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#experience")}
            className={`text-sm font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer rounded-lg ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Professional Experience
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#projects")}
            className={`text-sm font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer rounded-lg ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Project Experience
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#certifications")}
            className={`text-sm font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer rounded-lg ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Certifications
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#contact")}
            className={`text-sm font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer rounded-lg ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Certificates Section
const certificates = [
  {
    title: "Complete Generative AI and Agnetic AI course with Langchain and Huggingface",
    organization: "Udemy",
    date: "March 2025",
    author: "Krish Naik",
    url: "https://www.udemy.com/certificate/UC-27b6da4f-1ddb-42fb-ab7a-1fdd59af513e/",
  },
  {
    title: "Oracle Cloud Infrastructure Geneartive AI Professional",
    organization: "Orcale",
    date: "October 2025",
    author: "Oracle University Professors",
    url: "https://www.udemy.com/certificate/UC-27b6da4f-1ddb-42fb-ab7a",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    organization: "Oracle",
    date: "September 2025",
    author: "Oracle University Professors",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=70E4C2B4A266EA2D9E0B4494B9997DC57F75249851F18F326FD953E776EC824A",
  },
];

const Certificates = () => (
  <section id="certifications" className="section-block">
    <div className="shell">
      <div className="mx-auto max-w-7xl card-shell p-6 sm:p-10 md:p-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Certificates</h2>
          <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-border bg-white/90 shadow-[var(--shadow-lg)] p-5 sm:p-6 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="space-y-2 pt-1">
                <h3 className="text-lg font-semibold leading-tight">{cert.title}</h3>
                <div className="text-sm text-muted-foreground">{cert.organization}</div>
                <div className="text-xs text-muted-foreground">Issued: {cert.date}</div>
                <div className="text-xs text-muted-foreground">Author: {cert.author}</div>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold transition-colors duration-200 hover:bg-primary/90"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <StickyNavbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Index;
