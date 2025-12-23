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
      <section id="about" className="section-block scroll-mt-24">
        <div className="shell">
          <div className="mx-auto max-w-7xl card-shell p-6 sm:p-10 md:p-14 lg:p-16 -mt-6 sm:-mt-10">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">About Me</h2>
              <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto px-1 sm:px-2 leading-relaxed">
                I'm a passionate AI/ML Engineer focused on building intelligent agent-based systems that transform complex data into real-world, actionable solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 items-start lg:items-center">
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">My Journey</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-7">
                  With a Bachelor's degree in Artificial Intelligence and over 2 years
                  of hands-on experience, I've had a rewarding journey exploring the core foundations of machine learning, deep learning, natural language processing, and computer vision.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-7">
                  My focus began with mastering the fundamentals—data preprocessing, model training, and evaluation—before diving into real-world problem-solving through projects and academic research. This foundation has led me to advanced AI trends like Retrieval-Augmented Generation (RAG), multi-agent systems, LangChain, and LangGraph, where I now specialize in building intelligent, modular, and scalable AI solutions.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-7">
                  I'm passionate about combining theoretical knowledge with practical implementation to develop robust ML pipelines, from data ingestion to model deployment. When I'm not developing AI systems, I enjoy experimenting with open-source tools, sharing knowledge, and contributing to impactful AI projects.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6 order-1 lg:order-2">
                {stats.map((stat) => (
                  <Card key={stat.label} className="text-center bg-gradient-card border border-border/60 shadow-[var(--shadow-lg)] hover:shadow-glow transition-all duration-300 w-full">
                    <CardContent className="p-3 sm:p-5 lg:p-6">
                      <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-2 sm:mb-3 lg:mb-4" />
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
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