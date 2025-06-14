import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Wrench, Database } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: portfolioData.skills.programming,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: portfolioData.skills.frameworks,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: portfolioData.skills.tools,
      color: "from-purple-500 to-purple-600",
    },
  ];

  // Skill proficiency levels (for demo purposes)
  const skillLevels = {
    HTML5: 95,
    CSS3: 90,
    JavaScript: 85,
    Java: 80,
    Python: 85,
    SQL: 75,
    "React.js": 90,
    "Node.js": 75,
    "RESTful APIs": 80,
    "Arduino IDE": 85,
    GitHub: 90,
    AWS: 70,
    MySQL: 75,
    IoT: 85,
    "Machine Learning": 75,
    "Google Colab": 80,
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-portfolio-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions across web
            development, IoT, and AI
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} w-fit mx-auto mb-4`}
                  >
                    <category.icon className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-1 px-3 bg-gray-100 hover:bg-portfolio-100 transition-colors cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Proficiency Levels
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skillLevels).map(([skill, level], index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{skill}</span>
                  <span className="text-sm text-gray-600">{level}%</span>
                </div>
                <Progress value={level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-portfolio-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Full-Stack Development Expertise
              </h3>
              <p className="text-sm opacity-90 max-w-3xl mx-auto">
                Combining frontend and backend technologies with IoT and AI to
                create innovative, real-world solutions that make a meaningful
                impact on society.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
