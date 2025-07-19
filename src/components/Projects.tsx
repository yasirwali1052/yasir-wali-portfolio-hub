import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectsImage from "@/assets/projects-bg.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Medical Diagnosis System",
      description: "Deep learning model for automated medical image analysis with 94% accuracy in detecting anomalies. Deployed in 3 hospitals serving 10,000+ patients.",
      image: projectsImage,
      technologies: ["TensorFlow", "Computer Vision", "Flask", "AWS", "Docker"],
      github: "https://github.com/yasirwali1052/Search-Engine-Agent",
      demo: "https://demo.com",
      highlights: ["94% accuracy", "10k+ patients served", "Real-time processing"]
    },
    {
      title: "Intelligent Trading Bot",
      description: "Reinforcement learning-based trading algorithm that achieved 23% annual returns. Uses sentiment analysis and technical indicators for decision making.",
      image: projectsImage,
      technologies: ["PyTorch", "RL", "NLP", "PostgreSQL", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["23% annual returns", "Multi-asset trading", "Risk management"]
    },
    {
      title: "Smart Recommendation Engine",
      description: "Collaborative filtering system serving personalized recommendations to 1M+ users with 40% improvement in click-through rates.",
      image: projectsImage,
      technologies: ["Scikit-learn", "Apache Spark", "Redis", "MongoDB", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["1M+ users", "40% CTR improvement", "Real-time recommendations"]
    },
    {
      title: "Natural Language Processing Pipeline",
      description: "End-to-end NLP system for sentiment analysis and entity extraction from social media data. Processes 100k+ posts daily.",
      image: projectsImage,
      technologies: ["spaCy", "BERT", "Elasticsearch", "Kafka", "Python"],
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["100k+ posts/day", "Multi-language support", "Real-time processing"]
    },
    {
      title: "Computer Vision Quality Control",
      description: "Automated defect detection system for manufacturing using CNN. Reduced manual inspection time by 80% while improving accuracy.",
      image: projectsImage,
      technologies: ["OpenCV", "YOLOv5", "EdgeAI", "RaspberryPi", "MQTT"],
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["80% time reduction", "99.5% accuracy", "Edge deployment"]
    },
    {
      title: "Predictive Maintenance Platform",
      description: "IoT-based ML system for predicting equipment failures. Reduced downtime by 60% and maintenance costs by 35% across 50+ facilities.",
      image: projectsImage,
      technologies: ["Time Series", "XGBoost", "InfluxDB", "Grafana", "Azure IoT"],
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["60% downtime reduction", "50+ facilities", "Real-time monitoring"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of AI/ML solutions that have made real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-professional hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <a href={project.github} className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1">
                    <a href={project.demo} className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;