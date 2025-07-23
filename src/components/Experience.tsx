import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Engineer Intern",
      company: "Siber Koza Alpha (Onsite)",
      period: "July 2025 - Present",
      description:"Contributing to AI/ML initiatives as an intern by developing intelligent multi-agent cybersecurity solutions, leveraging machine learning for real-time threat analysis, anomaly detection, and automated incident response to enhance system security and resilience",
      skills: ["LLM", "Python", "Langchain", "LangGarph","Fast API"]
    },
    {
      title: "Machine Learning Intern",
      company: "Dassoft (Onsite)",
      period: "2025 Jan - 2025 April",
      description: "As an ML Intern, I worked on designing, training, and evaluating machine learning models, contributing to data preprocessing, model optimization, and real-world AI solution development across various domains.",
      skills: [ "Python","ML models","Neural Networks","Data Preprocessing","PyTorch", "Model Optimization"]
    },
    {
      title: "Data Analytics Intern",
      company: "Tech Insight (Remote)",
      period: "2024 July - 2024 Sep",
      description: "As a Data Analytics Intern, I assisted in collecting, cleaning, and analyzing large datasets to uncover insights and support data-driven decision-making. I worked on generating reports, building dashboards, and using analytical tools to identify trends, patterns, and key business metrics",
      skills: ["SQL","Python(numpy,pandas)","Data Visualization","Power BI"]
    }
  ];

  const education = [
    {
      degree: "BS in Artificial Intelligence",
      institution: "NUML Islamabad",
      period: "2022 - Present",
      description: "Pursuing a Bachelor’s in AI with focus on core concepts and technologies."
    },
    {
      degree: "M.S. in Data Science",
      institution: "MIT",
      period: "2013 - 2015",
      description: "Focus on statistical modeling and machine learning algorithms"
    },
    {
      degree: "B.S. in Computer Engineering",
      institution: "University of California, Berkeley",
      period: "2009 - 2013",
      description: "Foundation in computer systems and programming"
    }
  ];

  return (
    <section id="experience" className="pt-0 pb-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl bg-background/80 backdrop-blur-md rounded-2xl shadow-lg border border-border p-10 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey building AI solutions and driving innovation
            </p>
          </div>
          
          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-primary mr-4" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((exp) => (
                <Card key={exp.title} className="bg-gradient-card border-0 shadow-professional hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">{exp.company} | {exp.period}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary mr-4" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu) => (
                <Card key={edu.degree} className="bg-gradient-card border-0 shadow-professional hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="text-sm text-muted-foreground">{edu.institution} | {edu.period}</div>
                  </CardHeader>
                  <CardContent>
                    <p>{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;