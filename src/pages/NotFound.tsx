import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-grid bg-background px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl sm:text-8xl font-extrabold font-display gradient-text mb-4">404</div>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Button asChild size="lg" className="bg-gradient-hero text-white rounded-xl shadow-[var(--shadow-md)] hover:shadow-glow transition-shadow duration-300">
          <a href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
