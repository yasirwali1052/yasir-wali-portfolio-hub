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
      description: "Pursuing a Bachelor’s in AI with focus on ML,DL, NLP, CV."
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "Science Collge Kallar Kahar",
      period: "2019 - 2021",
      description: "Focused on core science subjects including Mathematics, Physics, and Statistics"
    },
    {
      degree: "Matriculation",
      institution: "GHSS Chakwal",
      period: "2017 - 2019",
      description: "Completed with a focus on Science and Computer Studies"
    }
  ];

  return (
    <section id="experience" className="scroll-mt-24 pt-0 pb-16">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="mx-auto max-w-7xl bg-background/80 backdrop-blur-md rounded-2xl shadow-lg border border-border p-4 sm:p-10 md:p-16">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Professional Experience</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey building AI solutions and driving innovation
            </p>
          </div>
          
          {/* Work Experience */}
          <div className="mb-10 sm:mb-16">
            <div className="flex items-center mb-6 sm:mb-8">
              <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-primary mr-3 sm:mr-4" />
              <h3 className="text-lg sm:text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {experiences.map((exp) => (
                <Card key={exp.title} className="bg-gradient-card border-0 shadow-professional hover:shadow-glow transition-all duration-300 w-full">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">{exp.title}</CardTitle>
                    <div className="text-xs sm:text-sm text-muted-foreground">{exp.company} | {exp.period}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 sm:mb-4 text-xs sm:text-base">{exp.description}</p>
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
            <div className="flex items-center mb-6 sm:mb-8">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-primary mr-3 sm:mr-4" />
              <h3 className="text-lg sm:text-2xl font-bold">Education</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {education.map((edu) => (
                <Card key={edu.degree} className="bg-gradient-card border-0 shadow-professional hover:shadow-glow transition-all duration-300 w-full">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">{edu.degree}</CardTitle>
                    <div className="text-xs sm:text-sm text-muted-foreground">{edu.institution} | {edu.period}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-base">{edu.description}</p>
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