'use client';

import { Code, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">WebStudio</span>
            </div>
            <p className="mb-6 max-w-md text-gray-400">{t('hero.subtitle')}</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{t('contact.info.address')}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('nav.services')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t('services.web.title')}</li>
              <li>{t('services.mobile.title')}</li>
              <li>{t('services.design.title')}</li>
              <li>{t('services.support.title')}</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Technologies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WebStudio. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
