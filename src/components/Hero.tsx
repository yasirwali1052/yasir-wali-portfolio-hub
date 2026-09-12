import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/proff-pic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { useReveal } from "@/hooks/use-reveal";

const Hero = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-grid"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
        <div className="absolute -left-24 -top-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full blur-3xl bg-primary/20 animate-blob" />
        <div className="absolute -right-20 top-20 h-72 w-72 sm:h-[26rem] sm:w-[26rem] rounded-full blur-3xl bg-accent/15 animate-blob [animation-delay:2s]" />
      </div>

      <div
        ref={ref}
        className={`relative flex flex-col md:flex-row items-center justify-center w-full shell gap-10 md:gap-16 lg:gap-20 pt-32 pb-20 sm:pt-40 sm:pb-28 reveal ${visible ? "is-visible" : ""}`}
      >
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-card to-secondary shadow-[var(--shadow-lg)] mx-auto p-1.5">
            <div className="absolute inset-3 rounded-full gradient-ring opacity-70" aria-hidden />
            <div className="absolute -inset-1.5 rounded-full bg-gradient-hero opacity-0 md:opacity-20 blur-xl" aria-hidden />
            <img
              src={profilePhoto}
              alt="Yasir Wali"
              className="w-full h-full object-cover object-center rounded-full ring-4 ring-background shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl">
          <span className="section-eyebrow">Available for opportunities</span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-foreground leading-[1.1] tracking-tight">
            Yasir Wali
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground flex items-center gap-2 min-h-[2.5rem]">
            <span className="gradient-text">
              <Typewriter
                words={["AI/ML Engineer", "MLOps Pipelines", "Agentic AI Systems"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={45}
                delaySpeed={1400}
              />
            </span>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
            I build intelligent, agent-based systems that turn complex data into real-world,
            production-ready AI solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <Button asChild size="lg" className="bg-gradient-hero text-white font-semibold rounded-xl shadow-[var(--shadow-md)] hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
              <a href="mailto:yasirwali301302@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4.5 h-4.5" /> Email Me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold rounded-xl border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5">
              <a href="/Yasir_Wali_Resume.pdf" download className="flex items-center gap-2">
                <Download className="w-4.5 h-4.5" /> Resume
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/yasirwali1052"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-border text-foreground/70 hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/waliyasir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-border text-foreground/70 hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to content"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground/60 hover:text-primary transition-colors duration-300"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-float" />
      </button>
    </section>
  );
};

export default Hero;
