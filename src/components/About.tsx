import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Code, Users } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const About = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const stats = [
    { icon: Code, label: "Projects Completed", value: "20+" },
    { icon: Users, label: "Clients Served", value: "20+" },
    { icon: Award, label: "Certifications", value: "5" },
    { icon: BookOpen, label: "Years Experience", value: "2+" },
  ];

  return (
    <section id="about" className="section-block scroll-mt-24">
      <div className="shell" ref={ref}>
        <div className={`text-center mb-12 sm:mb-16 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow mb-4">About Me</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mt-4 mb-4">
            Turning data into <span className="gradient-text">real-world impact</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a passionate AI/ML Engineer focused on building intelligent agent-based systems
            that transform complex data into real-world, actionable solutions.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center reveal ${visible ? "is-visible" : ""}`}
          style={{ transitionDelay: visible ? "120ms" : "0ms" }}
        >
          <div className="space-y-5 order-2 lg:order-1">
            <h3 className="text-lg sm:text-2xl font-bold font-display">My Journey</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-7">
              With a Bachelor's degree in Artificial Intelligence and over 2 years
              of hands-on experience, I've had a rewarding journey exploring the core foundations
              of machine learning, deep learning, natural language processing, and computer vision.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-7">
              My focus began with mastering the fundamentals — data preprocessing, model training,
              and evaluation — before diving into real-world problem-solving through projects and
              academic research. This foundation has led me to advanced AI trends like
              Retrieval-Augmented Generation (RAG), multi-agent systems, LangChain, and LangGraph,
              where I now specialize in building intelligent, modular, and scalable AI solutions.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-7">
              I'm passionate about combining theoretical knowledge with practical implementation
              to develop robust ML pipelines, from data ingestion to model deployment. When I'm not
              developing AI systems, I enjoy experimenting with open-source tools, sharing knowledge,
              and contributing to impactful AI projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 order-1 lg:order-2">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="text-center bg-card border border-border/70 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
