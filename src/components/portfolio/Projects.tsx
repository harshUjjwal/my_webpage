import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Zap,
  Globe,
  Clock,
  CheckCircle,
} from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const Projects = () => {
  const projectIcons = {
    IoT: Zap,
    "Web Development": Globe,
  };

  const getProjectIcon = (category: string) => {
    const IconComponent =
      projectIcons[category as keyof typeof projectIcons] || Zap;
    return IconComponent;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return {
          icon: CheckCircle,
          text: "Live",
          className: "bg-green-100 text-green-800",
        };
      case "completed":
        return {
          icon: CheckCircle,
          text: "Completed",
          className: "bg-blue-100 text-blue-800",
        };
      case "in-progress":
        return {
          icon: Clock,
          text: "In Progress",
          className: "bg-yellow-100 text-yellow-800",
        };
      default:
        return {
          icon: Clock,
          text: "Coming Soon",
          className: "bg-gray-100 text-gray-800",
        };
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-portfolio-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Innovative solutions combining IoT, AI, and web technologies to
            solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => {
            const IconComponent = getProjectIcon(project.category);
            const statusInfo = getStatusBadge(project.status);
            const StatusIcon = statusInfo.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-portfolio-100 rounded-lg group-hover:bg-portfolio-200 transition-colors">
                        <IconComponent
                          className="text-portfolio-600"
                          size={24}
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <Badge
                          variant="secondary"
                          className={`${
                            project.category === "IoT"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {project.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={statusInfo.className}
                        >
                          <StatusIcon size={12} className="mr-1" />
                          {statusInfo.text}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-portfolio-600 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">
                        {project.period}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs bg-gray-50 hover:bg-portfolio-50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        {project.links.live ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-green-600 border-green-300 hover:bg-green-50"
                            onClick={() => {
                              if (project.links.live !== "#") {
                                window.open(project.links.live, "_blank");
                              } else {
                                console.log(`Live demo for: ${project.title}`);
                              }
                            }}
                          >
                            <ExternalLink size={14} className="mr-1" />
                            Live Demo
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-gray-400 border-gray-300 cursor-not-allowed"
                            disabled
                          >
                            <ExternalLink size={14} className="mr-1" />
                            Coming Soon
                          </Button>
                        )}

                        {project.links.github ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-portfolio-600 border-portfolio-300 hover:bg-portfolio-50"
                            onClick={() => {
                              if (project.links.github !== "#") {
                                window.open(project.links.github, "_blank");
                              } else {
                                console.log(
                                  `GitHub repo for: ${project.title}`,
                                );
                              }
                            }}
                          >
                            <Github size={14} className="mr-1" />
                            GitHub
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-gray-400 border-gray-300 cursor-not-allowed"
                            disabled
                          >
                            <Github size={14} className="mr-1" />
                            Private
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Project Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <Zap size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">IoT & AI Projects</h3>
              <p className="text-sm opacity-90">
                Smart traffic systems, fog detection, and sensor-based
                automation
              </p>
              <div className="mt-4 text-2xl font-bold">4</div>
              <div className="text-xs opacity-80">IoT Solutions</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6 text-center">
              <Globe size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-sm opacity-90">
                Responsive websites and full-stack applications
              </p>
              <div className="mt-4 text-2xl font-bold">1</div>
              <div className="text-xs opacity-80">Live Website</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Clock size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">In Development</h3>
              <p className="text-sm opacity-90">
                Ongoing and upcoming innovative projects
              </p>
              <div className="mt-4 text-2xl font-bold">1</div>
              <div className="text-xs opacity-80">Active Project</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-portfolio-600 hover:bg-portfolio-700 text-white px-8 py-3 rounded-full"
          >
            Let's Discuss Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
