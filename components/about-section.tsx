'use client';

import { Award, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import { motion } from 'motion/react';

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Award,
      number: '5+',
      label: t('about.experience'),
    },
    {
      icon: Briefcase,
      number: '100+',
      label: t('about.projects'),
    },
    {
      icon: Users,
      number: '50+',
      label: t('about.clients'),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100, filter: 'blur(20px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-white py-20"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">{t('about.subtitle')}</p>
            <p className="mb-8 leading-relaxed text-gray-600">{t('about.text')}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working"
                className="h-96 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 max-w-xs rounded-xl bg-white p-6 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Top Quality</div>
                  <div className="text-sm text-gray-600">Certified Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
