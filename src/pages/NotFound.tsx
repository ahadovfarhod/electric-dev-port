import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      <div className="text-center relative z-10 px-4">
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-blue to-accent">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideInLeft">
          Page Not Found
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto animate-slideInRight">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="gradient-primary text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
