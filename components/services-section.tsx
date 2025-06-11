'use client';

import { Code, Smartphone, Palette, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/language';

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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}