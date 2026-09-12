import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import outfitaura from "@/assets/outfitaura.webp";
import vehicle_domain from "@/assets/vehicle_domain.png";
import telecom from "@/assets/telecom.png";
import aqi from "@/assets/aqi.jpg";
import f1 from "@/assets/f1-racing.jpg";
import detection_agent from "@/assets/detection_agent.png";
import { useReveal } from "@/hooks/use-reveal";

const Projects = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const projects = [
    {
      title: "OutfitAura",
      description: "Deep learning-based virtual try-on system using computer vision to digitally overlay outfits on users.",
      image: outfitaura,
      technologies: ["LangChain", "LLaMA 3", "Python", "HuggingFace", "OpenCV", "Mediapipe", "FastAPI", "AWS"],
      github: "https://github.com/yasirwali1052/Final-Year-Project",
    },
    {
      title: "Vehicle Insurance MLOps Pipeline",
      description: "End-to-end MLOps pipeline for the Vehicle Insurance domain, from MongoDB data ingestion to model training, evaluation, and experiment tracking. Deployed the best model using FastAPI, Docker, and AWS EC2 with proper artifact management and a production-ready setup.",
      image: vehicle_domain,
      technologies: ["Python", "MongoDB", "Scikit-learn", "MLflow", "FastAPI", "Docker", "AWS EC2", "Git & GitHub"],
      github: "https://github.com/yasirwali1052/MLops-Vehicle-Insurance-Domain",
    },
    {
      title: "Telco ChurnGuard MLOps",
      description: "Predicts telecom customer churn with end-to-end ML pipelines, FastAPI deployment, Docker containerization, and MLflow tracking for reproducible, cloud-ready solutions.",
      image: telecom,
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM", "FastAPI", "MLflow", "Docker", "AWS EC2"],
      github: "https://github.com/yasirwali1052/Telco-ChurnGuard-MLops",
    },
    {
      title: "Formula 1 Pipeline",
      description: "End-to-end ETL pipeline for F1 data using Azure Databricks, ADF, Delta Lake, and Power BI — showcasing real-world data engineering in Azure.",
      image: f1,
      technologies: ["Azure Databricks", "Azure Data Factory", "Delta Lake", "Power BI", "Python"],
      github: "https://github.com/yasirwali1052/F1-Racing-Analytics-Azure",
    },
    {
      title: "AQI Forecast Pipeline",
      description: "End-to-end Air Quality Index (AQI) forecasting system using real-time API data.",
      image: aqi,
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Linear Regression", "Random Forest", "Streamlit", "GitHub Actions"],
      github: "https://github.com/yasirwali1052/AQI-forecast-pipeline",
    },
    {
      title: "Phishing and DDoS Detection Agent",
      description: "Analyzes phishing emails (URL, text, attachments) in real-time with VirusTotal and rule-based tools.",
      image: detection_agent,
      technologies: ["Python", "LangChain", "Prompt Template", "Tool Calling", "VirusTotal", "Streamlit"],
      github: "https://github.com/yasirwali1052/Phishing-and-Ddos-Detection-Agent",
    }
  ];

  return (
    <section id="projects" className="section-block bg-gradient-section scroll-mt-24">
      <div className="shell" ref={ref}>
        <div className={`text-center mb-12 sm:mb-16 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow mb-4">Projects</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mt-4 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of AI/ML solutions I've designed, built, and shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group relative bg-card border border-border/70 rounded-2xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-primary/30 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 p-0 reveal ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${project.title} on GitHub`}
              />
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                  <span className="text-white text-lg font-semibold font-display drop-shadow-lg">
                    {project.title}
                  </span>
                  <span className="relative z-20 w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300 flex-shrink-0">
                    <Github className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3.5">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Badge key={tech} className="bg-primary/10 text-primary text-[11px] font-medium rounded-full px-2.5 py-0.5 border border-primary/15">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge className="bg-secondary text-muted-foreground text-[11px] font-medium rounded-full px-2.5 py-0.5 border border-border">
                      +{project.technologies.length - 5}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
