import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-portfolio-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {portfolioData.about.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-portfolio-600">90%</div>
                <div className="text-sm text-gray-600">
                  Fog Detection Accuracy
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-portfolio-600">40%</div>
                <div className="text-sm text-gray-600">
                  Traffic Delay Reduction
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Education
            </h3>

            <div className="space-y-4">
              {portfolioData.about.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-portfolio-100 rounded-lg">
                          <GraduationCap
                            className="text-portfolio-600"
                            size={24}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-portfolio-600 font-medium mb-1">
                            {edu.institution}
                          </p>
                          <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>{edu.period}</span>
                            <span className="font-medium text-green-600">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Achievement Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-r from-portfolio-500 to-blue-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award size={24} />
                    <h4 className="font-semibold text-lg">
                      Academic Excellence
                    </h4>
                  </div>
                  <p className="text-sm opacity-90">
                    Maintaining high academic standards while actively working
                    on real-world IoT and AI projects
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
