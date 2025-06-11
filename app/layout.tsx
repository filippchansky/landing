import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/language';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebStudio - Создаем современные веб-решения',
  description:
    'Профессиональная разработка сайтов и веб-приложений на React, Next.js и современных технологиях',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Analytics />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
