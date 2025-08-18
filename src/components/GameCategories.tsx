import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  GraduationCap, 
  Baby, 
  Globe, 
  Trophy, 
  Clock, 
  Atom,
  Plus,
  Users
} from 'lucide-react';

const categoryIcons = {
  students: GraduationCap,
  kids: Baby,
  general: Globe,
  sports: Trophy,
  history: Clock,
  science: Atom
};

const categoryColors = {
  students: 'bg-primary',
  kids: 'bg-accent', 
  general: 'bg-secondary',
  sports: 'bg-success',
  history: 'bg-gradient-sunset',
  science: 'bg-gradient-ocean'
};

export const GameCategories = () => {
  const { t } = useLanguage();

  const categories = [
    { key: 'students', icon: 'students' },
    { key: 'kids', icon: 'kids' },
    { key: 'general', icon: 'general' },
    { key: 'sports', icon: 'sports' },
    { key: 'history', icon: 'history' },
    { key: 'science', icon: 'science' }
  ];

  return (
    <section id="games" className="py-20 lg:py-32 bg-gradient-to-br from-background via-card-summer to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('categories.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من بين 6 فئات متنوعة تناسب جميع الأعمار والاهتمامات
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {categories.map((category, index) => {
            const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons];
            const bgColor = categoryColors[category.icon as keyof typeof categoryColors];
            
            return (
              <div
                key={category.key}
                className="group animate-slide-up summer-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${bgColor} rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow min-h-[160px] lg:min-h-[200px] flex flex-col items-center justify-center text-center`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                  
                  {/* Icon */}
                  <IconComponent className="h-12 w-12 lg:h-16 lg:w-16 mb-4 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">
                    {t(`categories.${category.key}`)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/80 text-sm lg:text-base">
                    {category.key === 'students' && 'أسئلة أكاديمية ومتخصصة'}
                    {category.key === 'kids' && 'أسئلة ممتعة ومناسبة للصغار'}
                    {category.key === 'general' && 'معلومات عامة وثقافة'}
                    {category.key === 'sports' && 'عالم الرياضة والألعاب'}
                    {category.key === 'history' && 'التاريخ والحضارات'}
                    {category.key === 'science' && 'العلوم والتكنولوجيا'}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-2xl lg:rounded-3xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg shadow-summer hover:scale-105 transition-all duration-300 summer-card min-w-[200px]"
          >
            <Plus className="mr-2 h-5 w-5" />
            {t('hero.cta.create')}
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 summer-card min-w-[200px]"
          >
            <Users className="mr-2 h-5 w-5" />
            {t('hero.cta.tournament')}
          </Button>
        </div>
      </div>
    </section>
  );
};