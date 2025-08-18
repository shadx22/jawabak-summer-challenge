import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Users, 
  Grid3X3, 
  HelpCircle,
  Sparkles,
  Trophy,
  Clock,
  Target,
  Zap
} from 'lucide-react';

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const mainFeatures = [
    {
      icon: Users,
      title: t('features.tournaments'),
      description: t('features.tournaments.desc'),
      gradient: 'bg-gradient-to-br from-primary to-primary-glow',
      pattern: 'users'
    },
    {
      icon: Grid3X3,
      title: t('features.categories'),
      description: t('features.categories.desc'),
      gradient: 'bg-gradient-to-br from-secondary to-secondary-light',
      pattern: 'grid'
    },
    {
      icon: HelpCircle,
      title: t('features.help'),
      description: t('features.help.desc'),
      gradient: 'bg-gradient-to-br from-accent to-accent-light',
      pattern: 'help'
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: 'تجربة تفاعلية',
      description: 'واجهة حديثة وسهلة الاستخدام',
      color: 'text-primary'
    },
    {
      icon: Trophy,
      title: 'منافسة شريفة',
      description: 'نظام عادل وشفاف للمسابقات',
      color: 'text-secondary'
    },
    {
      icon: Clock,
      title: 'توقيت مثالي',
      description: 'تحكم كامل في وقت الأسئلة',
      color: 'text-accent'
    },
    {
      icon: Target,
      title: 'أهداف واضحة',
      description: 'تطوير المعرفة والمهارات',
      color: 'text-success'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-card-summer via-background to-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اكتشف مميزات منصة جوابك التي تجعل تجربة الألعاب الثقافية أكثر متعة وتفاعلاً
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-full">
                  {/* Main Card */}
                  <div className={`${feature.gradient} rounded-3xl p-8 text-white relative overflow-hidden h-full transition-all duration-500 group-hover:scale-105 shadow-card group-hover:shadow-glow`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      {feature.pattern === 'users' && (
                        <div className="bg-[radial-gradient(circle_at_25%_75%,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:20px_20px] h-full w-full"></div>
                      )}
                      {feature.pattern === 'grid' && (
                        <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] h-full w-full"></div>
                      )}
                      {feature.pattern === 'help' && (
                        <div className="bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:15px_15px] h-full w-full"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="bg-white/10 rounded-2xl p-4 w-fit mb-6 group-hover:bg-white/20 transition-colors duration-300">
                        <IconComponent className="h-12 w-12 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      
                      <p className="text-white/90 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-card">
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            لماذا جوابك؟
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={benefit.title}
                  className="text-center group animate-scale-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-card-summer to-background rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <div className="bg-white rounded-xl p-4 w-fit mx-auto mb-4 group-hover:bg-gray-50 transition-colors">
                      <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h4>
                    
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};