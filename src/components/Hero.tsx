import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="inline-block">
              <span className="text-primary font-semibold text-lg">👋 Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Flutter Developer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-blue to-accent mt-2">
                Mobile App Engineer
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Crafting beautiful, high-performance cross-platform mobile applications 
              with Flutter and Dart. Specialized in creating seamless user experiences 
              and scalable architectures.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {["Flutter", "Dart", "Firebase", "REST API", "Bloc", "GitHub"].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 glass-card rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Apps Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Mockup */}
          <div className="relative animate-slideInRight">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative glass-card p-8 rounded-3xl animate-float">
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4 p-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.5 2L20 7.5V22H4V2H14.5M14 2V8H20M6 20H18V10H12V4H6V20Z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl">Flutter Apps</h3>
                    <p className="text-sm text-muted-foreground">Beautiful & Fast</p>
                    <div className="flex gap-2 justify-center">
                      <div className="w-12 h-2 bg-primary rounded-full"></div>
                      <div className="w-12 h-2 bg-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
