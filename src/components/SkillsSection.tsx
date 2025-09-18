'use client';

import { motion } from 'framer-motion';
import { Code, Database, Wrench, Award, Languages, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SkillsSection() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: t.skills.categories.programming,
      items: t.skills.items.programming,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      icon: <Database size={24} />,
      title: t.skills.categories.database,
      items: t.skills.items.database,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      icon: <Wrench size={24} />,
      title: t.skills.categories.tools,
      items: t.skills.items.tools,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800'
    },
    {
      icon: <Award size={24} />,
      title: t.skills.categories.certifications,
      items: t.skills.items.certifications,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800'
    },
    {
      icon: <Languages size={24} />,
      title: t.skills.categories.languages,
      items: t.skills.items.languages,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise and proficiencies across various domains of software development and technology
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
              viewport={{ once: true }}
              className={`${category.bgColor} ${category.borderColor} border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + 0.1 * categoryIndex }}
                  viewport={{ once: true }}
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.items.map((skill: string, skillIndex: number) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.05 * skillIndex }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group/skill hover:bg-white dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-300"
                  >
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={12}
                          className={`${
                            starIndex < getSkillLevel(skill) 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300 dark:text-gray-600'
                          } transition-all duration-300`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Proficiency Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Technologies Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tech: 'Delphi', level: 90, color: 'bg-blue-600' },
              { tech: 'PHP', level: 85, color: 'bg-purple-600' },
              { tech: 'Java', level: 80, color: 'bg-orange-600' },
              { tech: 'MySQL', level: 85, color: 'bg-green-600' },
              { tech: 'PostgreSQL', level: 80, color: 'bg-blue-500' },
              { tech: 'HTML/CSS', level: 90, color: 'bg-red-600' }
            ].map((item, index) => (
              <motion.div
                key={item.tech}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.tech}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.2, delay: 0.2 + 0.1 * index, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`${item.color} h-2 rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
        >
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Continuously Learning &amp; Growing
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              With a passion for technology and education, I continuously expand my skill set through hands-on projects, 
              teaching experiences, and staying current with industry trends and best practices.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {['Problem Solving', 'Team Leadership', 'Mentoring', 'Research', 'Innovation'].map((soft, index) => (
                <motion.span
                  key={soft}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white bg-opacity-20 text-black rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {soft}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper function to determine skill level (simplified)
function getSkillLevel(skill: string): number {
  const levels: { [key: string]: number } = {
    'Delphi': 5,
    'PHP': 4,
    'Java': 4,
    'MySQL': 4,
    'PostgreSQL': 4,
    'HTML/CSS': 5,
    'JavaScript': 3,
    'Python': 3,
    'C++': 3,
    'Oracle': 3,
    'Network Security': 4,
    'CCNA': 4,
    'Git': 4,
    'Visual Studio': 4,
    'PHPStorm': 4,
    'VMware': 3,
    'Linux': 3,
    'Cisco Certified': 4,
    'English': 4,
    'Indonesian': 5
  };
  
  return levels[skill] || 3;
}