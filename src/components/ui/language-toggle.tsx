import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white transition-smooth"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'ar' ? 'EN' : 'العربية'}
      </span>
    </Button>
  );
};