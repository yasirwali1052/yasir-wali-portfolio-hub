import { Award } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const certificates = [
  {
    title: "Complete Generative AI and Agentic AI course with LangChain and HuggingFace",
    organization: "Udemy",
    date: "March 2025",
    author: "Krish Naik",
    url: "https://www.udemy.com/certificate/UC-27b6da4f-1ddb-42fb-ab7a-1fdd59af513e/",
  },
  {
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    organization: "Oracle",
    date: "October 2025",
    author: "Oracle University Professors",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2BF6CA5D3E758DA02863D23CAFF58C098462BED91D2FB3788F3098FFE6C76BFA",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    organization: "Oracle",
    date: "September 2025",
    author: "Oracle University Professors",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=70E4C2B4A266EA2D9E0B4494B9997DC57F75249851F18F326FD953E776EC824A",
  },
];

const Certifications = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="section-block scroll-mt-24">
      <div className="shell" ref={ref}>
        <div className={`text-center mb-12 sm:mb-16 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow mb-4">Certifications</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mt-4 mb-4">
            Continuous <span className="gradient-text">learning</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Credentials that back up hands-on experience with formal training.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {certificates.map((cert, idx) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-primary/30 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 reveal ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: visible ? `${idx * 100}ms` : "0ms" }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold font-display leading-snug group-hover:text-primary transition-colors duration-200">
                  {cert.title}
                </h3>
                <div className="text-sm text-muted-foreground">{cert.organization}</div>
                <div className="text-xs text-muted-foreground/80">Issued {cert.date} · {cert.author}</div>
              </div>
              <span className="mt-auto text-xs font-semibold text-primary inline-flex items-center gap-1">
                View credential
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
