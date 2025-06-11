'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Создаем современные веб-решения',
    'hero.subtitle': 'Профессиональная разработка сайтов и веб-приложений на React, Next.js и современных технологиях',
    'hero.cta': 'Обсудить проект',
    'hero.cta2': 'Посмотреть работы',
    
    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Полный цикл разработки от идеи до запуска',
    'services.web.title': 'Веб-разработка',
    'services.web.desc': 'Современные сайты и веб-приложения на React, Next.js, TypeScript',
    'services.mobile.title': 'Мобильные приложения',
    'services.mobile.desc': 'Кроссплатформенные мобильные приложения на React Native',
    'services.design.title': 'UI/UX Дизайн',
    'services.design.desc': 'Современный дизайн интерфейсов с фокусом на пользователе',
    'services.support.title': 'Поддержка',
    'services.support.desc': 'Техническая поддержка и развитие ваших проектов',
    
    // Portfolio
    'portfolio.title': 'Портфолио',
    'portfolio.subtitle': 'Примеры наших работ',
    'portfolio.project1.title': 'E-commerce платформа',
    'portfolio.project1.desc': 'Полнофункциональный интернет-магазин с админ-панелью',
    'portfolio.project2.title': 'SaaS приложение',
    'portfolio.project2.desc': 'Веб-приложение для управления проектами',
    'portfolio.project3.title': 'Корпоративный сайт',
    'portfolio.project3.desc': 'Современный корпоративный сайт с CMS',
    
    // About
    'about.title': 'О нашей студии',
    'about.subtitle': 'Мы команда профессиональных разработчиков',
    'about.text': 'Специализируемся на создании современных веб-решений используя передовые технологии. Наш опыт позволяет реализовывать проекты любой сложности - от простых сайтов-визиток до сложных веб-приложений.',
    'about.experience': 'Лет опыта',
    'about.projects': 'Проектов',
    'about.clients': 'Клиентов',
    
    // Contact
    'contact.title': 'Связаться с нами',
    'contact.subtitle': 'Готовы обсудить ваш проект',
    'contact.name': 'Имя',
    'contact.email': 'Email',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить',
    'contact.info.title': 'Контактная информация',
    'contact.info.address': 'Москва, Россия',
    'contact.info.phone': '+7 (999) 123-45-67',
    'contact.info.email': 'hello@webstudio.ru',
    
    // Footer
    'footer.rights': 'Все права защищены',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'We Create Modern Web Solutions',
    'hero.subtitle': 'Professional website and web application development using React, Next.js and modern technologies',
    'hero.cta': 'Discuss Project',
    'hero.cta2': 'View Work',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Full development cycle from idea to launch',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Modern websites and web applications using React, Next.js, TypeScript',
    'services.mobile.title': 'Mobile Apps',
    'services.mobile.desc': 'Cross-platform mobile applications using React Native',
    'services.design.title': 'UI/UX Design',
    'services.design.desc': 'Modern interface design with user-focused approach',
    'services.support.title': 'Support',
    'services.support.desc': 'Technical support and development of your projects',
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Examples of our work',
    'portfolio.project1.title': 'E-commerce Platform',
    'portfolio.project1.desc': 'Full-featured online store with admin panel',
    'portfolio.project2.title': 'SaaS Application',
    'portfolio.project2.desc': 'Web application for project management',
    'portfolio.project3.title': 'Corporate Website',
    'portfolio.project3.desc': 'Modern corporate website with CMS',
    
    // About
    'about.title': 'About Our Studio',
    'about.subtitle': 'We are a team of professional developers',
    'about.text': 'We specialize in creating modern web solutions using cutting-edge technologies. Our experience allows us to implement projects of any complexity - from simple business cards to complex web applications.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects',
    'about.clients': 'Clients',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to discuss your project',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Moscow, Russia',
    'contact.info.phone': '+7 (999) 123-45-67',
    'contact.info.email': 'hello@webstudio.ru',
    
    // Footer
    'footer.rights': 'All rights reserved',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}