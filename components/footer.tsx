'use client';

import { Code, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">WebStudio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('hero.subtitle')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{t('contact.info.address')}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t('services.web.title')}</li>
              <li>{t('services.mobile.title')}</li>
              <li>{t('services.design.title')}</li>
              <li>{t('services.support.title')}</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 WebStudio. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}