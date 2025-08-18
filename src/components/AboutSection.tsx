import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, 
  Brain, 
  Heart, 
  Zap,
  Users,
  Award,
  Clock,
  Gamepad2
} from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t('about.features.challenge'),
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Brain,
      title: t('about.features.intelligence'), 
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Heart,
      title: t('about.features.fun'),
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Zap,
      title: t('about.features.entertainment'),
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '10K+',
      label: 'لاعب نشط',
      color: 'text-primary'
    },
    {
      icon: Gamepad2,
      number: '50K+',
      label: 'لعبة تم إنشاؤها',
      color: 'text-secondary'
    },
    {
      icon: Award,
      number: '5K+',
      label: 'بطولة منظمة',
      color: 'text-accent'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'متاح دائماً',
      color: 'text-success'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-8">
              {t('about.subtitle')}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-card-summer to-background summer-card animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-2 rounded-lg ${feature.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <span className="font-semibold text-foreground">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Statistics */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
                إحصائيات المنصة
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={stat.label}
                      className="text-center group animate-scale-in"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                        <IconComponent className="h-8 w-8 mx-auto mb-3 text-white" />
                        <div className="text-3xl font-bold text-white mb-2">
                          {stat.number}
                        </div>
                        <div className="text-white/80 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};