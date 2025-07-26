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
    <section id="skills" className="scroll-mt-24 pt-0 pb-16">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="mx-auto max-w-7xl bg-background/80 backdrop-blur-md rounded-2xl shadow-lg border border-border p-4 sm:p-10 md:p-16">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Technical Skills</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent systems and scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {skillCategories.map((category) => (
              <Card key={category.title} className="bg-gradient-card border-0 shadow-professional hover:shadow-glow transition-all duration-300 group w-full">
                <CardHeader className="text-center">
                  <category.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
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