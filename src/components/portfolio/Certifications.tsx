import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const Certifications = () => {
  const getCertificationIcon = (title: string) => {
    if (title.includes("Data Analytics")) return "📊";
    if (title.includes("ChatGPT") || title.includes("AI")) return "🤖";
    if (title.includes("IoT")) return "🌐";
    return "🏆";
  };

  const getCertificationColor = (issuer: string) => {
    if (issuer.includes("30Days Coding")) return "bg-blue-100 text-blue-800";
    if (issuer.includes("Udemy")) return "bg-purple-100 text-purple-800";
    if (issuer.includes("Skill Vertex")) return "bg-green-100 text-green-800";
    return "bg-portfolio-100 text-portfolio-800";
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-portfolio-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development in emerging
            technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl flex-shrink-0">
                      {getCertificationIcon(cert.title)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-lg text-gray-900 leading-tight group-hover:text-portfolio-600 transition-colors pr-2">
                          {cert.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className={getCertificationColor(cert.issuer)}
                        >
                          {cert.year}
                        </Badge>
                      </div>

                      <p className="text-portfolio-600 font-medium mb-3">
                        {cert.issuer}
                      </p>

                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <Calendar size={16} />
                        <span className="text-sm">{cert.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Certification Details */}
                  <div className="flex-1">
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      {cert.title.includes("Data Analytics") && (
                        <>
                          <p>
                            • Comprehensive data analysis with Python, SQL, and
                            Excel
                          </p>
                          <p>
                            • Statistical analysis and interpretation techniques
                          </p>
                          <p>• Interview preparation for data-related roles</p>
                        </>
                      )}
                      {cert.title.includes("ChatGPT") && (
                        <>
                          <p>• Advanced prompt engineering techniques</p>
                          <p>
                            • Content creation using AI and Generative models
                          </p>
                          <p>
                            • Practical applications in professional workflows
                          </p>
                        </>
                      )}
                      {cert.title.includes("IoT") && (
                        <>
                          <p>
                            • Internet of Things fundamentals and architecture
                          </p>
                          <p>• Sensor integration and data collection</p>
                          <p>• Real-world IoT project implementations</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <div className="pt-3 border-t border-gray-100 mt-auto">
                    <button
                      onClick={() => {
                        // In a real application, this would open the certificate
                        console.log(`Viewing certificate: ${cert.title}`);
                      }}
                      className="flex items-center gap-2 text-portfolio-600 hover:text-portfolio-700 transition-colors text-sm font-medium w-full justify-center py-2 px-4 border border-portfolio-300 rounded-lg hover:bg-portfolio-50"
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certification Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-portfolio-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Award size={32} className="mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">3</div>
                  <div className="text-sm opacity-90">
                    Professional Certifications
                  </div>
                </div>
                <div>
                  <div className="text-3xl mb-3">🎯</div>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-90">Completion Rate</div>
                </div>
                <div>
                  <div className="text-3xl mb-3">📈</div>
                  <div className="text-2xl font-bold mb-1">2024-25</div>
                  <div className="text-sm opacity-90">Latest Achievements</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Specialized Expertise
                </h3>
                <p className="text-sm opacity-90 max-w-2xl mx-auto">
                  Focused certifications in high-demand areas: Data Analytics,
                  AI/Generative Technologies, and IoT systems - building a
                  strong foundation for modern tech solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Learning Journey Timeline
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "2023: IoT Foundation",
              "2024: AI & Content Creation",
              "2024-25: Data Analytics Mastery",
            ].map((milestone, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 bg-white border-portfolio-300 text-portfolio-700"
              >
                {milestone}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
