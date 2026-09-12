import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Cloud } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const Skills = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const skillCategories = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: [
        "Deep Learning", "Neural Networks", "Computer Vision", "NLP",
        "Reinforcement Learning", "MLOps", "Model Optimization", "AutoML"
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        "Python", "SQL", "JavaScript (Basic)", "C++", "HTML", "CSS"
      ]
    },
    {
      icon: Database,
      title: "Frameworks & Tools",
      skills: [
        "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas", "NumPy",
        "OpenCV", "NLTK", "Spark", "Docker", "LangChain", "LangGraph", "Git"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        "AWS Bedrock", "Azure", "MLflow", "MongoDB", "Firebase"
      ]
    }
  ];

  return (
    <section id="skills" className="section-block bg-gradient-section scroll-mt-24">
      <div className="shell" ref={ref}>
        <div className={`text-center mb-12 sm:mb-16 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow mb-4">Technical Skills</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mt-4 mb-4">
            A toolkit for <span className="gradient-text">intelligent systems</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            The languages, frameworks, and infrastructure I use to build and ship AI/ML solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className={`bg-card border border-border/70 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 reveal ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: visible ? `${idx * 90}ms` : "0ms" }}
            >
              <CardHeader className="pb-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <category.icon className="w-5.5 h-5.5 text-primary" />
                </div>
                <CardTitle className="text-base font-semibold font-display">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs bg-secondary text-foreground/75 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded-full px-3 py-1 font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
