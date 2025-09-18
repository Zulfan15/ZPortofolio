'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Code, Zap, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectsSection() {
  const { t } = useLanguage();

  const projectIcons = [
    { icon: '🛡️', color: 'from-blue-500 to-blue-600' },
    { icon: '🧠', color: 'from-purple-500 to-purple-600' }
  ];

  const projectTechColors = {
    'Delphi': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'PHP': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'MySQL': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'Arduino': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    'ESP32': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    'IoT': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    'Python': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    'TensorFlow': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    'Machine Learning': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Featured projects showcasing my technical skills and innovation in software development and emerging technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Project Header */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                  viewport={{ once: true }}
                  className={`w-16 h-16 bg-gradient-to-br ${projectIcons[index].color} rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{projectIcons[index].icon}</span>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Project Period */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar size={18} />
                    <span className="text-sm font-medium">{project.period}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <Users size={18} />
                    <span className="text-sm">{index === 0 ? 'Team Project' : 'Individual Research'}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                    <Code size={18} className="text-green-500" />
                    <span>Technologies</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          projectTechColors[tech as keyof typeof projectTechColors] || 
                          'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 text-sm font-medium cursor-pointer"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </motion.div>
                  
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium cursor-pointer"
                    >
                      <ExternalLink size={16} />
                      <span>View Demo</span>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 px-8 py-4 border-t border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                    <Eye size={14} />
                    <span>{index === 0 ? 'Security Focus' : 'AI Research'}</span>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    {index === 0 ? 'IoT Security' : 'Deep Learning'}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Interested in Collaboration?
          </h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            I'm always excited to work on innovative projects that push the boundaries of technology. 
            Let's discuss how we can create something amazing together.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}