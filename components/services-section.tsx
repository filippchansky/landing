'use client';

import { Code, Smartphone, Palette, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/language';
import { motion } from 'motion/react';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Palette,
      title: t('services.design.title'),
      description: t('services.design.desc'),
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Headphones,
      title: t('services.support.title'),
      description: t('services.support.desc'),
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
      <motion.section
        initial={{ opacity: 0, y: 100, filter: 'blur(20px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        className="bg-white py-20"
        id='services'
      >
        {/* Контент секции */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{t('services.subtitle')}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div
                    className={`h-12 w-12 rounded-lg ${service.color} mb-4 flex items-center justify-center`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="leading-relaxed text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      </motion.section>  
  );
}
