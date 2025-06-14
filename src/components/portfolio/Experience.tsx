import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, DollarSign } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-portfolio-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hands-on experience in software development and web technologies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-portfolio-200" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${
                    exp.status === "upcoming"
                      ? "bg-blue-500"
                      : "bg-portfolio-500"
                  }`}
                />

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <Card
                    className={`hover:shadow-lg transition-shadow ${
                      exp.status === "upcoming"
                        ? "border-blue-200 bg-blue-50"
                        : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${
                              exp.status === "upcoming"
                                ? "bg-blue-100"
                                : "bg-portfolio-100"
                            }`}
                          >
                            <Briefcase
                              className={
                                exp.status === "upcoming"
                                  ? "text-blue-600"
                                  : "text-portfolio-600"
                              }
                              size={20}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900">
                              {exp.title}
                            </h3>
                            <p
                              className={`font-medium ${
                                exp.status === "upcoming"
                                  ? "text-blue-600"
                                  : "text-portfolio-600"
                              }`}
                            >
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge
                            variant={
                              exp.type === "Paid" ? "default" : "secondary"
                            }
                            className={
                              exp.type === "Paid"
                                ? "bg-green-100 text-green-800"
                                : ""
                            }
                          >
                            {exp.type}
                          </Badge>
                          {exp.status === "upcoming" && (
                            <Badge
                              variant="outline"
                              className="bg-blue-100 text-blue-800 border-blue-300"
                            >
                              Upcoming
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-gray-600">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      {exp.salary && (
                        <div className="flex items-center gap-2 mb-4 text-green-600">
                          <DollarSign size={16} />
                          <span className="text-sm font-medium">
                            {exp.salary}
                          </span>
                        </div>
                      )}

                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      {exp.status === "completed" && index === 1 && (
                        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-sm text-green-800 font-medium">
                            🎯 Key Achievement: Improved UI/UX by 30%
                          </p>
                        </div>
                      )}

                      {exp.status === "upcoming" && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800 font-medium">
                            🚀 Excited to contribute to live projects and
                            optimize performance!
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Experience Number */}
                <div
                  className={`hidden md:block w-2/12 text-center ${
                    index % 2 === 0 ? "order-last" : "order-first"
                  }`}
                >
                  <div
                    className={`text-2xl font-bold ${
                      exp.status === "upcoming"
                        ? "text-blue-300"
                        : "text-portfolio-300"
                    }`}
                  >
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-portfolio-500 to-blue-500 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Professional Growth Journey
              </h3>
              <p className="text-sm opacity-90 max-w-3xl mx-auto">
                From unpaid internships to paid positions, demonstrating
                continuous growth and increasing value in software development
                and web technologies. Ready to take on new challenges in 2025!
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-lg font-bold">2</div>
                  <div className="text-xs opacity-80">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">30%</div>
                  <div className="text-xs opacity-80">UI/UX Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">100%</div>
                  <div className="text-xs opacity-80">Dedication</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
