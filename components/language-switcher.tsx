'use client';

import { useLanguage } from '@/lib/language';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant={language === 'ru' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ru')}
        className="h-8 px-3 text-sm"
      >
        РУ
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3 text-sm"
      >
        EN
      </Button>
    </div>
  );
}
