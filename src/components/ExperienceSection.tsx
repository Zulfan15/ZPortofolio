'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExperienceSection() {
  const { t } = useLanguage();

  const experienceIcons = [
    { icon: '🗄️', color: 'from-blue-500 to-blue-600' },
    { icon: '☕', color: 'from-green-500 to-green-600' },
    { icon: '🌐', color: 'from-purple-500 to-purple-600' },
    { icon: '💼', color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and teaching experiences in software development and technology
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></div>

            {/* Experience Items */}
            {t.experience.jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-6 pb-12 last:pb-0"
              >
                {/* Timeline Dot with Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${experienceIcons[index].color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                >
                  <span className="text-2xl">{experienceIcons[index].icon}</span>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                        <Building size={18} />
                        <span className="font-semibold">{job.company}</span>
                      </div>
                    </div>
                    <div className="mt-2 lg:mt-0 flex flex-col lg:items-end space-y-1">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{job.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <Briefcase size={18} className="text-blue-600 dark:text-blue-400" />
                      <span>Key Responsibilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {job.description.map((desc, descIndex) => (
                        <motion.li
                          key={descIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * descIndex }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{desc}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills/Technologies used */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {index === 0 && ['Delphi 7', 'Database Design', 'SQL', 'Teaching'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                      {index === 1 && ['Java', 'OOP', 'Software Architecture', 'Mentoring'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                      {index === 2 && ['Networking', 'TCP/IP', 'Cisco', 'Security'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                      {index === 3 && ['Software Development', 'R&D', 'Testing', 'Agile'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Teaching Experience', value: '3 Courses', color: 'text-blue-600' },
            { label: 'Students Mentored', value: '100+', color: 'text-green-600' },
            { label: 'Industry Projects', value: '5+', color: 'text-purple-600' },
            { label: 'Years Active', value: '2+', color: 'text-orange-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}