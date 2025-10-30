import { Code2, Rocket, Users, Award } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and design patterns",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing apps for speed, efficiency, and smooth user experience",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Designing intuitive interfaces that users love to interact with",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Delivering pixel-perfect, bug-free applications on time",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about creating exceptional mobile experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slideInLeft">
            <p className="text-lg leading-relaxed">
              I'm a dedicated <span className="text-primary font-semibold">Flutter Developer</span> with 
              over 5 years of experience building cross-platform mobile applications. My expertise lies 
              in transforming complex requirements into elegant, user-friendly solutions.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in <span className="text-primary font-semibold">state management</span>, 
              <span className="text-primary font-semibold"> clean architecture</span>, and creating 
              smooth, performant UIs. From startups to enterprise solutions, I've delivered 50+ 
              successful projects across various industries.
            </p>
            <p className="text-lg leading-relaxed">
              My passion for mobile development drives me to stay updated with the latest Flutter 
              trends, contribute to open-source projects, and share knowledge through technical blogs 
              and community engagement.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl animate-slideInRight">
            <h3 className="text-2xl font-bold mb-6">Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <h4 className="font-semibold mb-1">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Always exploring new technologies and approaches
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <h4 className="font-semibold mb-1">Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Committed to delivering top-quality work every time
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <h4 className="font-semibold mb-1">Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Working seamlessly with teams to achieve common goals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <h4 className="font-semibold mb-1">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Growing skills and knowledge every single day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:animate-pulse">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
