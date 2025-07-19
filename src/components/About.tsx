import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Code, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Clients Served", value: "20+" },
    { icon: Award, label: "Certifications", value: "8" },
    { icon: BookOpen, label: "Years Experience", value: "4+" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate AI/ML Engineer dedicated to creating innovative solutions 
            that bridge the gap between complex data and actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground">
              With over 4 years of experience in artificial intelligence and machine learning, 
              I've had the privilege of working on cutting-edge projects that span various 
              industries including healthcare, finance, and e-commerce.
            </p>
            <p className="text-muted-foreground">
              My expertise lies in developing end-to-end ML pipelines, from data collection 
              and preprocessing to model deployment and monitoring. I'm particularly passionate 
              about deep learning, computer vision, and natural language processing.
            </p>
            <p className="text-muted-foreground">
              I believe in the power of continuous learning and staying updated with the 
              latest advancements in AI. When I'm not coding, you'll find me contributing 
              to open-source projects or writing technical articles.
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
    </section>
  );
};

export default About;