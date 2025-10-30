import { Code, Database, Palette, Settings, GitBranch, Smartphone } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      category: "Languages & Frameworks",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 85 },
      ],
    },
    {
      icon: Database,
      category: "Backend & APIs",
      skills: [
        { name: "Firebase", level: 90 },
        { name: "REST API", level: 92 },
        { name: "GraphQL", level: 80 },
        { name: "Supabase", level: 85 },
      ],
    },
    {
      icon: Settings,
      category: "State Management",
      skills: [
        { name: "Bloc", level: 93 },
        { name: "Riverpod", level: 88 },
        { name: "Provider", level: 90 },
        { name: "GetX", level: 85 },
      ],
    },
    {
      icon: Palette,
      category: "Design & UI/UX",
      skills: [
        { name: "Material Design", level: 95 },
        { name: "Figma", level: 88 },
        { name: "Custom Animations", level: 90 },
        { name: "Responsive Design", level: 93 },
      ],
    },
    {
      icon: GitBranch,
      category: "Tools & Workflow",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "CI/CD", level: 85 },
        { name: "Fastlane", level: 80 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      icon: Smartphone,
      category: "Mobile Development",
      skills: [
        { name: "iOS Development", level: 90 },
        { name: "Android Development", level: 92 },
        { name: "App Store Deployment", level: 88 },
        { name: "Native Integration", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technical expertise and tools I use to build amazing applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full gradient-primary transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Pills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Other Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              "Clean Architecture",
              "MVVM",
              "TDD",
              "Unit Testing",
              "Integration Testing",
              "Agile/Scrum",
              "Jira",
              "Postman",
              "Docker",
              "AWS",
              "Play Store",
              "App Store",
              "In-App Purchases",
              "Push Notifications",
              "Deep Linking",
              "Analytics",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
