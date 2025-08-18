import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Gamepad2, Sparkles, Users } from 'lucide-react';
import summerHeroBg from '@/assets/summer-hero-bg.jpg';

export const HeroSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(52, 211, 153, 0.8) 50%, rgba(251, 113, 133, 0.9) 100%), url(${summerHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-secondary/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Title */}
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 gradient-text animate-scale-in">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white/95 mb-4 animate-slide-up">
            {t('hero.subtitle')}
          </p>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 text-lg shadow-glow hover:scale-105 transition-all duration-300 summer-card min-w-[200px]"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              {t('hero.cta.create')}
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 text-lg shadow-ocean hover:scale-105 transition-all duration-300 summer-card min-w-[200px]"
            >
              <Trophy className="mr-2 h-5 w-5" />
              {t('hero.cta.tournament')}
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 summer-card">
                <Sparkles className="h-8 w-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-white/80 text-sm">{t('categories.title')}</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 summer-card">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">36</div>
                <div className="text-white/80 text-sm">أسئلة</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 summer-card">
                <Users className="h-8 w-8 text-secondary-light mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-white/80 text-sm">وسائل مساعدة</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 summer-card">
                <Gamepad2 className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">∞</div>
                <div className="text-white/80 text-sm">متعة</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};