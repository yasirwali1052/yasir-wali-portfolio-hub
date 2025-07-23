import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const NAV_LINKS = [
  { label: "Profile", href: "#about" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Professional Experience", href: "#experience" },
  { label: "Project Experience", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Languages", href: "#languages" },
  { label: "Contact", href: "#contact" },
];

const Hero = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <section id="home" className="flex flex-col items-start bg-background pt-8 pb-0 relative">
      {/* Main Content Row for larger screens */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-10 md:gap-20">
        {/* Left: Profile Photo and Hamburger */}
        <div className="flex-1 flex flex-col items-center md:items-start relative w-full">
          {/* Hamburger button for mobile */}
          <div className="flex md:hidden w-full justify-start mb-2 relative">
            <button
              className="p-2 rounded focus:outline-none border border-gray-300"
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
              <ul className="absolute left-0 top-12 z-20 w-52 bg-gray-100 border border-gray-300 rounded-lg shadow-lg flex flex-col py-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="text-center">
                    <a
                      href={link.href}
                      className="block px-4 py-2 text-base text-[#222] hover:text-[#19e6ff] hover:bg-gray-200 transition-all duration-150"
                      onClick={() => setNavOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-[#19e6ff] bg-white shadow-xl" style={{boxShadow: '0 0 32px #23272f'}}>
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover object-center rounded-full border-4 border-[#1a2634]"
            />
          </div>
        </div>
        {/* Right: Text and Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#666A6D] drop-shadow-lg mb-2">
            Yasir Wali
          </h1>
          {/* Subtitle/Role with Typewriter Effect */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 min-h-[2.5rem] text-[#b0c4d6]">
            <Typewriter
              words={["AI Engineer", "Machine Learning Engineer", "MLOps Enthusiast"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </div>
          {/* Buttons Row - responsive */}
          <div className="flex flex-col sm:flex-row flex-nowrap justify-center md:justify-start gap-3 mb-10 w-full max-w-full">
            <Button size="lg" className="bg-[#d3544b] hover:bg-[#b03a2e] text-white font-bold px-2 py-1 sm:px-8 sm:py-4 text-xs sm:text-lg rounded-xl transition-all duration-200 whitespace-nowrap w-full sm:w-auto">
              <a href="mailto:yasirwali301302@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4 sm:w-6 sm:h-6" /> Email Me
              </a>
            </Button>
            <Button size="lg" className="bg-[#2176d2] hover:bg-[#1b5fa7] text-white font-bold px-2 py-1 sm:px-8 sm:py-4 text-xs sm:text-lg rounded-xl transition-all duration-200 whitespace-nowrap w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/waliyasir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 sm:w-6 sm:h-6" /> LinkedIn
              </a>
            </Button>
            <Button size="lg" className="bg-[#232323] hover:bg-[#111] text-white font-bold px-2 py-1 sm:px-8 sm:py-4 text-xs sm:text-lg rounded-xl transition-all duration-200 whitespace-nowrap w-full sm:w-auto">
              <a href="https://github.com/yasirwali1052" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4 sm:w-6 sm:h-6" /> GitHub
              </a>
            </Button>
            <Button size="lg" className="bg-[#1ed760] hover:bg-[#17a74a] text-white font-bold px-2 py-1 sm:px-8 sm:py-4 text-xs sm:text-lg rounded-xl transition-all duration-200 whitespace-nowrap w-full sm:w-auto">
              <a href="/YasirWali-Resume.pdf" download className="flex items-center gap-2">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* Navigation Bar - Hamburger on mobile */}
      <nav className="w-full flex justify-center mt-4">
        {/* Nav links: show on desktop, hidden on mobile */}
        <ul className="hidden md:flex flex-wrap justify-center gap-10 py-4 px-8 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="text-center">
              <a
                href={link.href}
                className="text-lg font-medium text-[#222] hover:text-[#19e6ff] transition-all duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Hero;