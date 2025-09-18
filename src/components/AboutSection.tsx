'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, User, Code, Database, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Code, label: 'Programming Languages', value: '7+' },
    { icon: Database, label: 'Database Projects', value: '10+' },
    { icon: Brain, label: 'AI/ML Projects', value: '2+' },
    { icon: User, label: 'Years Experience', value: '2+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.description}
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>{t.about.location}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Mail size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${t.about.email}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    {t.about.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Phone size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <a 
                    href={`tel:${t.about.phone}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {t.about.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Globe size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <a 
                    href="https://z-portofolio-rho.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    https://z-portofolio-rho.vercel.app/
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Highlights */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Professional Highlights
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Teaching Assistant for Database Programming & Object-Oriented Programming</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Software Development Internship at PT Dwi Purwa Teknologi</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>IoT and Deep Learning Project Developer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Huawei Certified ICT Associate - Security</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Java', 'Python', 'JavaScript', 'Flutter', 'MySQL', 'Node.js', 'Deep Learning', 'IoT'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}