'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.education.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey in Information Technology and Computer Science
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"></div>

            {/* Education Item */}
            <div className="relative flex items-start space-x-6 pb-12">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <GraduationCap size={28} className="text-white" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {t.education.university}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {t.education.degree}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0 flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Calendar size={18} />
                      <span className="font-medium">{t.education.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <MapPin size={18} />
                      <span>{t.education.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* GPA */}
                  <div className="flex items-center space-x-3">
                    <Award size={20} className="text-yellow-500" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {t.education.gpa}
                    </span>
                  </div>

                  {/* Key Subjects */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Subjects & Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Database Programming',
                        'Object-Oriented Programming',
                        'Computer Networks',
                        'Data Structures & Algorithms',
                        'Software Engineering',
                        'Machine Learning',
                        'Web Development',
                        'Mobile Application Development'
                      ].map((subject, index) => (
                        <motion.div
                          key={subject}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="text-gray-600 dark:text-gray-300">{subject}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Academic Activities */}
                  <div className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Academic Activities & Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Laboratory Assistant for Database Programming (Sep 2024 - Jan 2025)</span>
                      </li>
                      <li className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Laboratory Assistant for Object-Oriented Programming (Mar 2025 - June 2025)</span>
                      </li>
                      <li className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Laboratory Assistant for Computer Networks (Mar 2025 - June 2025)</span>
                      </li>
                      <li className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Mentoring students in programming best practices and project development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Education Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Current GPA', value: '3.46', icon: Award },
            { label: 'Years of Study', value: '2+', icon: Calendar },
            { label: 'Laboratory Courses', value: '3', icon: GraduationCap }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full mb-4">
                <stat.icon size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}