import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI/ML Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading AI initiatives and developing advanced machine learning models for enterprise clients. Built end-to-end ML pipelines handling millions of data points daily.",
      achievements: [
        "Improved model accuracy by 35% using advanced ensemble techniques",
        "Reduced training time by 60% through optimized data pipelines",
        "Led a team of 5 ML engineers on multi-million dollar projects"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Kubernetes", "MLflow"]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataMinds Inc",
      location: "New York, NY",
      period: "2021 - 2022",
      description: "Developed and deployed predictive models for financial services and e-commerce platforms. Specialized in recommendation systems and fraud detection.",
      achievements: [
        "Built recommendation engine serving 1M+ users daily",
        "Developed fraud detection system reducing false positives by 45%",
        "Implemented real-time ML inference with 99.9% uptime"
      ],
      technologies: ["PyTorch", "Scikit-learn", "Docker", "PostgreSQL", "Apache Spark"]
    },
    {
      title: "Data Scientist",
      company: "InnovateLab",
      location: "Boston, MA",
      period: "2020 - 2021",
      description: "Analyzed complex datasets to extract actionable insights for healthcare and retail clients. Focused on predictive analytics and statistical modeling.",
      achievements: [
        "Increased customer retention by 25% through predictive modeling",
        "Automated reporting processes saving 20 hours/week",
        "Published 3 research papers in peer-reviewed journals"
      ],
      technologies: ["R", "Python", "Tableau", "SQL", "Azure ML"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through innovative projects and cutting-edge AI solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-professional hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                    <div className="text-lg font-semibold text-foreground">{exp.company}</div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;