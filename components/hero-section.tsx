'use client';

import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          {/* Hero Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3 text-lg font-medium border-gray-300 hover:border-blue-600 hover:text-blue-600"
            >
              <Play className="mr-2 w-5 h-5" />
              {t('hero.cta2')}
            </Button>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <span className="text-blue-600 font-bold text-lg">R</span>
              </div>
              <span className="text-sm text-gray-500">React</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <span className="text-gray-600 font-bold text-lg">N</span>
              </div>
              <span className="text-sm text-gray-500">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <span className="text-blue-600 font-bold text-lg">TS</span>
              </div>
              <span className="text-sm text-gray-500">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                <span className="text-cyan-600 font-bold text-lg">T</span>
              </div>
              <span className="text-sm text-gray-500">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}