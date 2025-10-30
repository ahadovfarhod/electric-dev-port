import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Blog = () => {
  const articles = [
    {
      title: "Mastering Flutter State Management with Bloc",
      excerpt: "A comprehensive guide to implementing the Bloc pattern effectively in your Flutter applications for scalable state management.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "State Management",
    },
    {
      title: "Flutter Performance Optimization: Best Practices",
      excerpt: "Learn essential techniques to boost your Flutter app's performance, from lazy loading to widget optimization.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Performance",
    },
    {
      title: "Building Beautiful UI with Custom Animations",
      excerpt: "Explore advanced animation techniques in Flutter to create stunning, interactive user interfaces that engage users.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "UI/UX",
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Insights, tutorials, and tips on Flutter development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Article Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold group"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="gradient-primary text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
