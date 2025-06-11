'use client';

import { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useLanguage } from '@/lib/language';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">WebStudio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              {t('nav.portfolio')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              {t('nav.contact')}
            </button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-200 bg-white px-2 pb-3 pt-2">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full px-3 py-2 text-left text-gray-600 transition-colors hover:text-blue-600"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full px-3 py-2 text-left text-gray-600 transition-colors hover:text-blue-600"
              >
                {t('nav.portfolio')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full px-3 py-2 text-left text-gray-600 transition-colors hover:text-blue-600"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full px-3 py-2 text-left text-gray-600 transition-colors hover:text-blue-600"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
