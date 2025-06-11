'use client';

import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language';
import Image from 'next/image';
import { motion } from 'motion/react';

export function PortfolioSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('portfolio.project1.title'),
      description: t('portfolio.project1.desc'),
      image: 'image/mobile.webp',
      tags: ['React', 'Next.js', 'Stripe', 'MongoDB'],
    },
    {
      title: t('portfolio.project2.title'),
      description: t('portfolio.project2.desc'),
      image: 'image/saas.webp',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
      title: t('portfolio.project3.title'),
      description: t('portfolio.project3.desc'),
      image: 'image/corporate.webp',
      tags: ['Next.js', 'TypeScript', 'Sanity CMS'],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100, filter: 'blur(20px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-gray-50 py-20"
      id="portfolio"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('portfolio.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{t('portfolio.subtitle')}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  width={50}
                  height={50}
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mb-4 leading-relaxed text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
