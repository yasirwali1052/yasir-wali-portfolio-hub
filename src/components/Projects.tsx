import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectsImage from "@/assets/projects-bg.jpg";
import searchengine from "@/assets/Search-Engine.jpg";
import cyberagent from "@/assets/cyberagent.jpg";
import nextwordlstm from "@/assets/nextwordlstm.jpg";
import caltech101 from "@/assets/caltech-101.jpg";
import f1 from "@/assets/f1-racing.jpg";
import rainfall from "@/assets/rainfall.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Search Engine Agent",
      description: "Smart chatbot with LangChain & LLaMA 3—searches web, Wikipedia, Arxiv, and shows step-by-step reasoning",
      image: searchengine,
      technologies: ["Streamlit", "LangChain", "LLaMA 3", "Python","Google Search Tools","LangGraph"],
      github: "https://github.com/yasirwali1052/Search-Engine-Agent",
      demo: "https://demo.com",
      highlights: ["94% accuracy", "10k+ patients served", "Real-time processing"]
    },
    {
      title: "Cybersecurity Agent",
      description: "Real-time system for detecting phishing emails and DDoS attacks using VirusTotal, rules, and LLM-based analysis.",
      image: cyberagent,
      technologies: ["VirusTotal", "Rules", "LLM", "Python","Langchain","LangGraph"],
      github: "https://github.com/yasirwali1052/Phishing-and-Ddos-Detection-Agent",
      demo: "https://demo.com",
      highlights: ["23% annual returns", "Multi-asset trading", "Risk management"]
    },
    {
      title: "Next Word LSTM",
      description: " A deep learning app that predicts the next word in a sequence using LSTM, trained on Shakespeare’s text and deployed via a Streamlit interface",
      image: nextwordlstm,
      technologies: ["NLTK", "LSTM", "Streamlit", "Python","Neural Network"],
      github: "https://github.com/yasirwali1052/NextWord-LSTM",
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
      title: "Viton-Image-Classifier",
      description: " Fine-tuned Vision Transformer (ViT) on Caltech-101 for accurate image classification using transfer learning",
      image: caltech101,
      technologies: ["PyTorch", "Vision Transformer", "Transfer Learning", "Caltech-101", "Python"],
      github: "https://github.com/yasirwali1052/ViT-Transformer-ImageClassify",
      demo: "https://demo.com",
      highlights: ["80% time reduction", "99.5% accuracy", "Edge deployment"]
    },
    {
      title: "Rainfall Prediction",
      description: "Trained Logistic Regression, XGBoost, and SVC models for rainfall prediction with full preprocessing, evaluation, and model comparison",
      image:rainfall,
      technologies: ["Logistic Regression", "XGBoost", "SVC", "Preprocessing", "Model Comparison", "Python"],
      github: "https://github.com/yasirwali1052/Rain_prediction_Machine_learning",
      demo: "https://demo.com",
      highlights: ["60% downtime reduction", "50+ facilities", "Real-time monitoring"]
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-4">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl bg-background/80 backdrop-blur-md rounded-2xl shadow-lg border border-border p-4 sm:p-8 md:p-12 lg:p-16">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Featured Projects</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase of AI/ML solutions that have made real-world impact
            </p>
          </div>
          <div className="featured-projects-container w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="relative bg-white/80 dark:bg-background/80 backdrop-blur-lg border border-border rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl group w-full max-w-sm mx-auto p-0"
                  style={{ minHeight: '320px' }}
                >
                  {/* Project Image with overlay and title */}
                  <div className="relative h-40 sm:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-white text-lg font-bold drop-shadow-lg">
                      {project.title}
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="p-4 flex flex-col gap-2">
                    <p className="text-muted-foreground text-xs line-clamp-2 mb-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-primary/10 text-primary text-xs rounded-full px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-1">
                      <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10" aria-label="View Code">
                        <a href={project.github} target="_blank" rel="noopener" title="View Code"><Github className="w-5 h-5" /></a>
                      </Button>
                      <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10" aria-label="Live Demo">
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