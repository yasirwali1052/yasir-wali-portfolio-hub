import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const Experience = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Testiva (Onsite)",
      period: "Mar 2026 - Present",
      description: "Built an end-to-end Voice Agent Testing & Evaluation Tool to evaluate the accuracy, reliability, performance, and security of AI voice agents. Tested key layers including speech recognition, LLM response quality, tool calling, conversation flow and latency, with automated metrics for measuring overall agent performance. Integrated red teaming and adversarial testing to detect prompt injection, unsafe responses, security vulnerabilities, and failure scenarios.",
      skills: ["Python", "LangChain", "OpenAI", "ElevenLabs", "DeepEval", "Promptfoo"]
    },
    {
      title: "Associate AI/ML Engineer",
      company: "Siber Koza Alpha - Dassoft (Onsite)",
      period: "Sep 2025 - Feb 2026",
      description: "Fine-tuned Qwen vision model for image captioning using PEFT/LoRA, deployed on RunPod for production inference. Built LangGraph and LangChain RAG pipelines implementing Adaptive and Corrective RAG strategies to improve response accuracy across enterprise queries.",
      skills: ["Python", "LLM Fine-tuning", "Hugging Face", "LangChain", "LangGraph", "RAG", "RunPod", "PEFT/LoRA"]
    },
    {
      title: "Data Science Intern",
      company: "10pearls Pakistan (Remote)",
      period: "Jun 2025 - Aug 2025",
      description: "Worked on real-time Air Quality Index prediction using live API data, involving data ingestion, cleaning, and feature engineering for model training. Responsible for building and evaluating machine learning models to forecast pollution trends, while implementing CI/CD pipelines for continuous integration, automated retraining, and model deployment.",
      skills: ["Python", "Machine Learning", "FastAPI", "CI/CD Pipelines", "Docker"]
    },
    {
      title: "AI/ML Intern",
      company: "Siber Koza Alpha (Onsite)",
      period: "Mar 2025 - May 2025",
      description: "Contributed to AI/ML initiatives by developing intelligent multi-agent cybersecurity solutions, leveraging machine learning for real-time threat analysis, anomaly detection, and automated incident response to enhance system security and resilience.",
      skills: ["LLM", "Python", "LangChain", "LangGraph", "FastAPI"]
    }
  ];

  const education = [
    {
      degree: "BS in Artificial Intelligence",
      institution: "NUML Islamabad",
      period: "Jan 2022 - Jan 2026",
      description: "Pursuing a Bachelor's in AI with focus on ML, DL, NLP, and CV."
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "Science College Kallar Kahar",
      period: "2019 - 2021",
      description: "Focused on core science subjects including Mathematics, Physics, and Statistics."
    },
    {
      degree: "Matriculation",
      institution: "GHSS Chakwal",
      period: "2017 - 2019",
      description: "Completed with a focus on Science and Computer Studies."
    }
  ];

  return (
    <section id="experience" className="section-block scroll-mt-24">
      <div className="shell" ref={ref}>
        <div className={`text-center mb-12 sm:mb-16 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow mb-4">Experience</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mt-4 mb-4">
            My journey <span className="gradient-text">building AI solutions</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and academic background driving my work in AI/ML.
          </p>
        </div>

        {/* Work Experience — timeline */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold font-display">Work Experience</h3>
          </div>

          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-border" aria-hidden />
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.title}
                  className={`relative reveal ${visible ? "is-visible" : ""}`}
                  style={{ transitionDelay: visible ? `${idx * 110}ms` : "0ms" }}
                >
                  <span className="absolute -left-8 sm:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/15" aria-hidden />
                  <Card className="bg-card border border-border/70 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-primary/30 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <CardTitle className="text-base sm:text-lg font-semibold font-display">{exp.title}</CardTitle>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{exp.company}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm sm:text-base text-foreground/80 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="rounded-full text-xs px-3 py-1 bg-secondary text-foreground/75 font-normal">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold font-display">Education</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {education.map((edu, idx) => (
              <Card
                key={edu.degree}
                className={`bg-card border border-border/70 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 reveal ${visible ? "is-visible" : ""}`}
                style={{ transitionDelay: visible ? `${idx * 100}ms` : "0ms" }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base sm:text-lg font-semibold font-display">{edu.degree}</CardTitle>
                  <div className="text-xs sm:text-sm text-muted-foreground">{edu.institution} · {edu.period}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
