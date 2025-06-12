import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/language';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebStudio - Создаем современные веб-решения',
  description:
    'Профессиональная разработка сайтов и веб-приложений на React, Next.js и современных технологиях',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(102609129, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/102609129"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        <Analytics />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
