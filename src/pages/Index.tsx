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
      className={`sticky top-0 z-50 mt-2 sm:mt-4 px-2 max-w-5xl mx-auto border rounded-lg shadow-lg transition-colors duration-300 ${
        scrolled ? 'border-blue-700' : 'bg-gray-100 border-gray-300'
      }`}
      style={{
        transition: 'background 0.3s, color 0.3s',
        background: scrolled ? 'hsl(var(--primary))' : undefined
      }}
    >
      <ul className="hidden md:flex flex-nowrap whitespace-nowrap justify-center gap-7 py-3 px-4">
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#about")}
            className={`text-base font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer ${
              scrolled ? 'text-white hover:text-[#19e6ff]' : 'text-[#222] hover:text-[#19e6ff]'
            }`}
          >
            Profile
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#skills")}
            className={`text-base font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer ${
              scrolled ? 'text-white hover:text-[#19e6ff]' : 'text-[#222] hover:text-[#19e6ff]'
            }`}
          >
            Technical Skills
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#experience")}
            className={`text-base font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer ${
              scrolled ? 'text-white hover:text-[#19e6ff]' : 'text-[#222] hover:text-[#19e6ff]'
            }`}
          >
            Professional Experience
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#projects")}
            className={`text-base font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer ${
              scrolled ? 'text-white hover:text-[#19e6ff]' : 'text-[#222] hover:text-[#19e6ff]'
            }`}
          >
            Project Experience
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#certifications")}
            className={`text-base font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer ${
              scrolled ? 'text-white hover:text-[#19e6ff]' : 'text-[#222] hover:text-[#19e6ff]'
            }`}
          >
            Certifications
          </button>
        </li>
        <li className="text-center">
          <button
            onClick={() => handleNavClick("#contact")}
            className={`text-base font-medium transition-all duration-150 px-4 py-2 min-w-[90px] text-center bg-transparent border-none cursor-pointer ${
              scrolled ? 'text-white hover:text-[#19e6ff]' : 'text-[#222] hover:text-[#19e6ff]'
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
    title: "Complete MLOPs bootcamp with AWS, GCP, and Azure",
    organization: "Udemy",
    date: "June 2025",
    author: "Krish Naik",
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
  <section id="certifications" className="py-8 sm:py-12 lg:py-14 pt-0 pb-2">
    <div className="container mx-auto px-2 sm:px-4">
      <div className="mx-auto max-w-7xl bg-background/80 backdrop-blur-md rounded-2xl shadow-lg border border-border p-4 sm:p-10 md:p-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl shadow p-5 flex flex-col items-start justify-between min-h-[220px]">
              <div>
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <div className="text-sm text-gray-500 mb-1">{cert.organization}</div>
                <div className="text-xs text-gray-400 mb-2">Issued: {cert.date}</div>
                <div className="text-xs text-gray-400 mb-4">Author: {cert.author}</div>
              </div>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded transition">View Credential</a>
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
