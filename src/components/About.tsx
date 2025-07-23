import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Code, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "20+" },
    { icon: Users, label: "Clients Served", value: "20+" },
    { icon: Award, label: "Certifications", value: "5" },
    { icon: BookOpen, label: "Years Experience", value: "2+" },
  ];

  return (
    <>
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl rounded-2xl shadow-lg border border-border p-10 md:p-16 -mt-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate AI/ML Engineer focused on building intelligent agent-based systems that transform complex data into real-world, actionable solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground">
                With a Bachelor's degree in Artificial Intelligence and over 2 years
                
                of hands-on experience, I've had a rewarding journey exploring the core foundations of machine learning, deep learning, natural language processing, and computer vision.
                </p>
                <p className="text-muted-foreground">
                My focus began with mastering the fundamentals—data preprocessing, model training, and evaluation—before diving into real-world problem-solving through projects and academic research. This foundation has led me to advanced AI trends like Retrieval-Augmented Generation (RAG), multi-agent systems, LangChain, and LangGraph, where I now specialize in building intelligent, modular, and scalable AI solutions.
                </p>
                <p className="text-muted-foreground">
                I'm passionate about combining theoretical knowledge with practical implementation to develop robust ML pipelines, from data ingestion to model deployment. When I'm not developing AI systems, I enjoy experimenting with open-source tools, sharing knowledge, and contributing to impactful AI projects.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <Card key={stat.label} className="text-center bg-gradient-card border-0 shadow-professional hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;