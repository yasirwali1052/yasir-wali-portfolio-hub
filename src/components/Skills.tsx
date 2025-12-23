import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Cloud } from "lucide-react";

const Skills = () => {
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
        "Python",  "SQL", "JavaScript(Basic)",  "C++" , "HTML", "CSS"
      ]
    },
    {
      icon: Database,
      title: "Frameworks & Tools",
      skills: [
        "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas", "NumPy",
        "OpenCV", "NLTK", "Spark", "Docker", "Langchain","LangGraph", "Git"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        "AWS Bedrock", "Azure", "MLflow", "MangoDB","Firebase"
      ]
    }
  ];

  return (
    <section id="skills" className="section-block scroll-mt-24">
      <div className="shell">
        <div className="mx-auto max-w-7xl card-shell p-6 sm:p-10 md:p-14">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Technical Skills</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent systems and scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
            {skillCategories.map((category) => (
              <Card key={category.title} className="bg-gradient-card border border-border/60 shadow-[var(--shadow-lg)] hover:shadow-glow transition-transform duration-300 group w-full hover:-translate-y-1">
                <CardHeader className="text-center">
                  <category.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-base sm:text-lg font-semibold text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs bg-secondary text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded-full px-3 py-1"
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
      </div>
    </section>
  );
};

export default Skills;