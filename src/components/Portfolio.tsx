import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      title: "Mobile Banking App",
      description: "Secure banking solution with biometric auth, real-time transactions, and intuitive UX. Built with Flutter, Firebase, and REST APIs.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tags: ["Flutter", "Firebase", "Bloc", "Biometric"],
      github: "#",
      demo: "#",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "E-Commerce App",
      description: "Full-featured shopping app with payment gateway, order tracking, and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["Flutter", "REST API", "Stripe", "Provider"],
      github: "#",
      demo: "#",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      title: "Food Delivery App",
      description: "Real-time food ordering platform with live tracking, ratings, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      tags: ["Flutter", "Google Maps", "Firebase", "GetX"],
      github: "#",
      demo: "#",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Travel Booking App",
      description: "Complete travel solution with flight/hotel bookings, itinerary planning, and destination guides.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      tags: ["Flutter", "REST API", "Riverpod", "Animations"],
      github: "#",
      demo: "#",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Social Media App",
      description: "Modern social platform with real-time chat, stories, posts, and advanced media sharing capabilities.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tags: ["Flutter", "Firebase", "Bloc", "Cloud Storage"],
      github: "#",
      demo: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Fitness Tracker",
      description: "Comprehensive fitness app with workout plans, calorie tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      tags: ["Flutter", "Health APIs", "Charts", "Provider"],
      github: "#",
      demo: "#",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Featured projects showcasing my expertise in Flutter development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-primary text-white"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
