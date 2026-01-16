import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import outfitaura from "@/assets/outfitaura.webp";
import vehicle_domain from "@/assets/vehicle_domain.png";
import telecom from "@/assets/telecom.png";
import aqi from "@/assets/aqi.jpg";
import f1 from "@/assets/f1-racing.jpg";
import detection_agent from "@/assets/detection_agent.png";

const Projects = () => {
  const projects = [
    {
      title: "OutfitAura",
      description: "Developed a deep learning-based  virtual try-on system using computer vision  to digitally overlay outfits on users. ",
      image: outfitaura,
      technologies: [ "LangChain", "LLaMA 3", "Python","HuggingFace","OpenCV","Mediapipe","Fastapi","aws"],
      github: "https://github.com/yasirwali1052/Final-Year-Project",
      demo: "https://demo.com",
      highlights: ["94% accuracy", "10k+ patients served", "Real-time processing"]
    },
    {
      title: "Vehicle Insurance MLOps Pipeline",
      description: "Built an end-to-end MLOps pipeline for the Vehicle Insurance domain, from MongoDB data ingestion to model training, evaluation, and experiment tracking. Deployed the best model using FastAPI, Docker, and AWS EC2 with proper artifact management and a production-ready setup.",
      image: vehicle_domain,
      technologies:  ["Python", "MongoDB", "Scikit-learn", "MLflow", "FastAPI", "Docker", "AWS EC2", "Git & GitHub"],
      github: "https://github.com/yasirwali1052/MLops-Vehicle-Insurance-Domain",
      demo: "https://demo.com",
      highlights: ["23% annual returns", "Multi-asset trading", "Risk management"]
    },
    {
      title: "Telco ChurnGuard MLOps",
      description: "Telco ChurnGuard MLOps  predicts telecom customer churn with end-to-end ML pipelines, FastAPI deployment, Docker containerization, and MLflow tracking for reproducible, cloud-ready solutions",
      image: telecom,
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM", "FastAPI", "MLflow", "Docker", "AWS EC2"],
      github: "https://github.com/yasirwali1052/Telco-ChurnGuard-MLops",
      demo: "https://demo.com",
      highlights: ["1M+ users", "40% CTR improvement", "Real-time recommendations"]
    },
    {
      title: " Formula1 Pipeline",
      description: "End-to-end ETL pipeline for F1 data using Azure Databricks, ADF, Delta Lake, and Power BI — showcasing real-world data engineering in Azure..",
      image: f1,
      technologies: ["Azure Databricks", "Azure Data Factory", "Delta Lake", "Power BI", "Python"],
      github: "https://github.com/yasirwali1052/F1-Racing-Analytics-Azure",
      demo: "https://demo.com",
      highlights: ["100k+ posts/day", "Multi-language support", "Real-time processing"]
    },
    {
      title: "AQI Forecast Pipeline ",
      description: " End-to-end Air Quality Index (AQI) forecasting system using real-time API data.",
      image: aqi,
      technologies:["Python", "Pandas", "NumPy", "Scikit-learn", "Linear Regression","Random Forest", "Streamlit", "Github Actions"],
      github: "https://github.com/yasirwali1052/AQI-forecast-pipeline",
      demo: "https://demo.com",
      highlights: ["80% time reduction", "99.5% accuracy", "Edge deployment"]
    },
    {
      title: "Phishing and Ddos detection agent",
      description: "Analyzes phishing emails (URL, text, attachments) in real-time with VirusTotal and rule-based tools",
      image:detection_agent,
      technologies: ["Python","Langchain","Prompt Template","Tool Calling","Virus Total","Streamlit"],
      github: "https://github.com/yasirwali1052/Phishing-and-Ddos-Detection-Agent",
      demo: "https://demo.com",
      highlights: ["60% downtime reduction", "50+ facilities", "Real-time monitoring"]
    }
  ];

  return (
    <section id="projects" className="section-block scroll-mt-24">
      <div className="shell">
        <div className="mx-auto max-w-7xl card-shell p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Featured Projects</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase of AI/ML solutions that have made real-world impact
            </p>
          </div>
          <div className="featured-projects-container w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="relative bg-white/90 dark:bg-background/85 backdrop-blur-lg border border-border rounded-2xl shadow-[var(--shadow-lg)] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl group w-full max-w-sm mx-auto p-0"
                  style={{ minHeight: '320px' }}
                >
                  {/* Project Image with overlay and title */}
                  <div className="relative h-40 sm:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/5" />
                    <div className="absolute bottom-3 left-3 text-white text-lg font-semibold drop-shadow-lg">
                      {project.title}
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-primary/10 text-primary text-xs rounded-full px-3 py-1 border border-primary/15">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 rounded-full" aria-label="View Code">
                        <a href={project.github} target="_blank" rel="noopener" title="View Code"><Github className="w-5 h-5" /></a>
                      </Button>
                      <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 rounded-full" aria-label="Live Demo">
                        <a href={project.demo} target="_blank" rel="noopener" title="Live Demo"><ExternalLink className="w-5 h-5" /></a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;