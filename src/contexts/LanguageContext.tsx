import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن جوابك',
    'nav.games': 'الألعاب',
    'nav.pricing': 'الباقات',
    'nav.contact': 'تواصل معنا',
    
    // Hero Section
    'hero.title': 'جوابك',
    'hero.subtitle': 'الجواب عليك، والسؤال علينا',
    'hero.description': '٦ فئات، ٣٦ سؤال، ومعاهم ٣ وسائل مساعدة',
    'hero.cta.create': 'إنشاء لعبة',
    'hero.cta.tournament': 'إنشاء بطولة',
    
    // Categories
    'categories.title': 'فئات الألعاب',
    'categories.students': 'طلاب',
    'categories.kids': 'أطفال',
    'categories.general': 'عامة',
    'categories.sports': 'رياضة',
    'categories.history': 'تاريخ',
    'categories.science': 'علوم',
    
    // About Section
    'about.title': 'نبذة عن جوابك',
    'about.subtitle': 'اختبر معلوماتك',
    'about.description': 'لعبة جماعية ممتعة، تحتوي على ٦ فئات مختلفة و ٣٦ سؤال يختبر معلوماتكم، وعشان نضيف الحماس للجمعة ضفنا ٣ وسائل مساعدة لكل فريق، اختاروهم بعناية',
    'about.features.challenge': 'تحدي',
    'about.features.intelligence': 'ذكاء',
    'about.features.fun': 'متعة',
    'about.features.entertainment': 'ترفيه',
    
    // Features
    'features.title': 'مميزات المنصة',
    'features.tournaments': 'بطولات جماعية',
    'features.tournaments.desc': 'أنشئ بطولات مع أصدقائك وزملائك',
    'features.categories': 'فئات متنوعة',
    'features.categories.desc': '٦ فئات مختلفة تناسب جميع الأعمار',
    'features.help': 'وسائل مساعدة',
    'features.help.desc': '٣ وسائل مساعدة لكل فريق',
    
    // Pricing
    'pricing.title': 'باقات الألعاب',
    'pricing.subtitle': 'لكل مستخدم لعبة واحدة مجانية يمكنك من خلالها تجربة الفئات الموجودة',
    'pricing.free': 'مجاني',
    'pricing.single': '٢.٥ دك',
    'pricing.double': '٤ دك',
    'pricing.unlimited': '٧ دك',
    'pricing.buy': 'شراء',
    'pricing.free.desc': 'لعبة واحدة مجانية للتجربة',
    'pricing.single.desc': 'باقة تتيح لك إنشاء لعبة واحدة',
    'pricing.double.desc': 'باقة تتيح لك إنشاء لعبتين',
    'pricing.unlimited.desc': 'باقة تتيح لك إنشاء ألعاب غير محدودة',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.year': '٢٠٢٤'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.games': 'Games',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Jawabak',
    'hero.subtitle': 'Your Answer is Up to You, Questions are On Us',
    'hero.description': '6 categories, 36 questions, with 3 helpful tools',
    'hero.cta.create': 'Create Game',
    'hero.cta.tournament': 'Create Tournament',
    
    // Categories
    'categories.title': 'Game Categories',
    'categories.students': 'Students',
    'categories.kids': 'Kids',
    'categories.general': 'General',
    'categories.sports': 'Sports',
    'categories.history': 'History',
    'categories.science': 'Science',
    
    // About Section
    'about.title': 'About Jawabak',
    'about.subtitle': 'Test Your Knowledge',
    'about.description': 'A fun group game featuring 6 different categories and 36 questions to test your knowledge. To add excitement to your gathering, we\'ve included 3 helpful tools for each team - choose them wisely!',
    'about.features.challenge': 'Challenge',
    'about.features.intelligence': 'Intelligence',
    'about.features.fun': 'Fun',
    'about.features.entertainment': 'Entertainment',
    
    // Features
    'features.title': 'Platform Features',
    'features.tournaments': 'Group Tournaments',
    'features.tournaments.desc': 'Create tournaments with friends and colleagues',
    'features.categories': 'Diverse Categories',
    'features.categories.desc': '6 different categories suitable for all ages',
    'features.help': 'Helpful Tools',
    'features.help.desc': '3 helpful tools for each team',
    
    // Pricing
    'pricing.title': 'Game Packages',
    'pricing.subtitle': 'Every user gets one free game to try out all available categories',
    'pricing.free': 'Free',
    'pricing.single': '2.5 KD',
    'pricing.double': '4 KD',
    'pricing.unlimited': '7 KD',
    'pricing.buy': 'Purchase',
    'pricing.free.desc': 'One free game to try the platform',
    'pricing.single.desc': 'Package allows you to create one game',
    'pricing.double.desc': 'Package allows you to create two games',
    'pricing.unlimited.desc': 'Package allows unlimited game creation',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.year': '2024'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  React.useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir }}>
      <div dir={dir} className={language === 'ar' ? 'font-arabic' : 'font-english'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};