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
        "Python", "R", "SQL", "JavaScript", "Java", "C++", "Scala", "Julia"
      ]
    },
    {
      icon: Database,
      title: "Frameworks & Tools",
      skills: [
        "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas", "NumPy",
        "OpenCV", "NLTK", "Spark", "Docker", "Kubernetes", "Git"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        "AWS", "Google Cloud", "Azure", "MLflow", "Airflow", "Jenkins",
        "Terraform", "MongoDB", "PostgreSQL", "Redis"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-gradient-card border-0 shadow-professional hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <category.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg">{category.title}</CardTitle>
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
    </section>
  );
};

export default Skills;