'use client';

import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language';
import BlurText from './ui/BlurText';
import { motion } from 'motion/react';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-40 h-80 w-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Hero Title */}
          <BlurText
            text={t('hero.title')}
            delay={150}
            animateBy="words"
            direction="top"
            className="mb-6 justify-center text-center text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
          />

          {/* Hero Subtitle */}
          <BlurText
            text={t('hero.subtitle')}
            delay={150}
            animateBy="words"
            direction="top"
            className="mx-auto mb-8 max-w-3xl justify-center text-lg leading-relaxed text-gray-600 sm:text-xl"
          />

          {/* CTA Buttons */}

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div
              initial={{ y: 200, opacity: 0, filter: 'blur(20px)' }}
              animate={{
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { ease: 'easeInOut', duration: 0.75 },
              }}
              whileHover={{
                rotate: -5,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0, filter: 'blur(20px)' }}
              animate={{
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { ease: 'easeInOut', duration: 1 },
              }}
              whileHover={{
                rotate: 5,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="border-gray-300 px-8 py-3 text-lg font-medium hover:border-blue-600 hover:text-blue-600"
              >
                <Play className="mr-2 h-5 w-5" />
                {t('hero.cta2')}
              </Button>
            </motion.div>
          </div>
          {/* Tech Stack Icons */}
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <motion.div
              initial={{ y: 200, opacity: 0, filter: 'blur(20px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ ease: 'easeInOut', duration: 1.2 }}
            >
              <a
                href="https://react.dev/"
                target="_blank"
                className="flex cursor-pointer flex-col items-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-lg font-bold text-blue-600">R</span>
                </div>
                <span className="text-sm text-gray-500">React</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0, filter: 'blur(20px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ ease: 'easeInOut', duration: 1.4 }}
            >
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="flex cursor-pointer flex-col items-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <span className="text-lg font-bold text-gray-600">N</span>
                </div>
                <span className="text-sm text-gray-500">Next.js</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0, filter: 'blur(20px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ ease: 'easeInOut', duration: 1.6 }}
            >
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="flex cursor-pointer flex-col items-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-lg font-bold text-blue-600">TS</span>
                </div>
                <span className="text-sm text-gray-500">TypeScript</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0, filter: 'blur(20px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ ease: 'easeInOut', duration: 1.8 }}
            >
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="flex cursor-pointer flex-col items-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100">
                  <span className="text-lg font-bold text-cyan-600">T</span>
                </div>
                <span className="text-sm text-gray-500">Tailwind</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
