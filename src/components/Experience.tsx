import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scinece Intern ",
      company: "10pearls Pakistan (Remote)",
      period: "2025 Sep - 2025 Nov",
      description: "Working on real-time Air Quality Index prediction using live API data, involving data ingestion, cleaning, and feature engineering for model training. Responsible for building and evaluating machine learning models to forecast pollution trends, while implementing CI/CD pipelines for continuous integration, automated retraining, and model deployment.",
      skills: ["Python","Machine Learning","Fastapi","CI/CD Pipelines","Docker"]
    },
    {
      title: "AI/ML Engineer Intern",
      company: "Siber Koza Alpha (Onsite)",
      period: "July 2025 - September 2025",
      description:"Contributing to AI/ML initiatives as an intern by developing intelligent multi-agent cybersecurity solutions, leveraging machine learning for real-time threat analysis, anomaly detection, and automated incident response to enhance system security and resilience",
      skills: ["LLM", "Python", "Langchain", "LangGarph","Fast API"]
    },
    {
      title: "Machine Learning Intern",
      company: "Dassoft (Onsite)",
      period: "2025 Jan - 2025 April",
      description: "As an ML Intern, I worked on designing, training, and evaluating machine learning models, contributing to data preprocessing, model optimization, and real-world AI solution development across various domains.",
      skills: [ "Python","ML models","Neural Networks","Data Preprocessing","PyTorch", "Model Optimization"]
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
    <section id="experience" className="section-block scroll-mt-24">
      <div className="shell">
        <div className="mx-auto max-w-7xl card-shell p-6 sm:p-10 md:p-14">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Professional Experience</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey building AI solutions and driving innovation
            </p>
          </div>
          
          {/* Work Experience */}
          <div className="mb-12">
            <div className="flex items-center mb-6 sm:mb-8">
              <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-primary mr-3 sm:mr-4" />
              <h3 className="text-lg sm:text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {experiences.map((exp) => (
                <Card key={exp.title} className="bg-gradient-card border border-border/60 shadow-[var(--shadow-lg)] hover:shadow-glow transition-transform duration-300 w-full hover:-translate-y-1">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-base sm:text-lg font-semibold">{exp.title}</CardTitle>
                    <div className="text-xs sm:text-sm text-muted-foreground">{exp.company} | {exp.period}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm sm:text-base text-foreground/80 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="rounded-full text-xs px-3 py-1 bg-secondary text-foreground/80">{skill}</Badge>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {education.map((edu) => (
                <Card key={edu.degree} className="bg-gradient-card border border-border/60 shadow-[var(--shadow-lg)] hover:shadow-glow transition-transform duration-300 w-full hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg font-semibold">{edu.degree}</CardTitle>
                    <div className="text-xs sm:text-sm text-muted-foreground">{edu.institution} | {edu.period}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{edu.description}</p>
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