import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Check, 
  Star, 
  Crown, 
  Gift,
  Zap,
  Infinity
} from 'lucide-react';

export const PricingSection = () => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      id: 'free',
      name: t('pricing.free'),
      price: 'مجاني',
      icon: Gift,
      description: t('pricing.free.desc'),
      features: [
        'لعبة واحدة مجانية',
        'جميع الفئات الـ6',
        '36 سؤال متنوع',
        'وسائل المساعدة الأساسية'
      ],
      gradient: 'bg-gradient-to-br from-muted to-card',
      textColor: 'text-foreground',
      buttonVariant: 'outline',
      popular: false
    },
    {
      id: 'single',
      name: 'باقة فردية',
      price: t('pricing.single'),
      icon: Star,
      description: t('pricing.single.desc'),
      features: [
        'إنشاء لعبة واحدة',
        'جميع الفئات متاحة',
        'تخصيص الأسئلة',
        'إحصائيات مفصلة',
        'دعم فني'
      ],
      gradient: 'bg-gradient-to-br from-primary to-primary-glow',
      textColor: 'text-white',
      buttonVariant: 'secondary',
      popular: false
    },
    {
      id: 'double',
      name: 'باقة مزدوجة',
      price: t('pricing.double'),
      icon: Crown,
      description: t('pricing.double.desc'),
      features: [
        'إنشاء لعبتين',
        'بطولات جماعية',
        'تقارير تفصيلية',
        'دعم أولوية',
        'تخصيص متقدم',
        'حفظ التقدم'
      ],
      gradient: 'bg-gradient-to-br from-secondary to-secondary-light',
      textColor: 'text-white',
      buttonVariant: 'accent',
      popular: true
    },
    {
      id: 'unlimited',
      name: 'باقة لا محدودة',
      price: t('pricing.unlimited'),
      icon: Infinity,
      description: t('pricing.unlimited.desc'),
      features: [
        'ألعاب غير محدودة',
        'بطولات خاصة',
        'إدارة الفرق',
        'تحليلات متقدمة',
        'دعم VIP',
        'مميزات حصرية',
        'API للمطورين'
      ],
      gradient: 'bg-gradient-to-br from-accent to-accent-light',
      textColor: 'text-white',
      buttonVariant: 'success',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-background via-card-summer to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={plan.id}
                className={`relative group animate-slide-up ${plan.popular ? 'lg:scale-105 lg:z-10' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-accent to-accent-light text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Zap className="h-4 w-4" />
                      الأكثر شعبية
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`${plan.gradient} rounded-3xl p-8 ${plan.textColor} relative overflow-hidden h-full transition-all duration-500 group-hover:scale-105 shadow-card group-hover:shadow-glow`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                  
                  {/* Header */}
                  <div className="relative z-10 text-center mb-8">
                    <div className={`bg-white/10 rounded-2xl p-4 w-fit mx-auto mb-4 ${plan.id === 'free' ? 'bg-primary/10' : ''}`}>
                      <IconComponent className={`h-12 w-12 ${plan.id === 'free' ? 'text-primary' : 'text-white'}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">
                      {plan.name}
                    </h3>
                    
                    <div className="text-4xl font-bold mb-2">
                      {plan.price}
                    </div>
                    
                    <p className={`${plan.id === 'free' ? 'text-muted-foreground' : 'text-white/80'} text-sm`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="relative z-10 space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className={`bg-white/20 rounded-full p-1 ${plan.id === 'free' ? 'bg-success/20' : ''}`}>
                          <Check className={`h-4 w-4 ${plan.id === 'free' ? 'text-success' : 'text-white'}`} />
                        </div>
                        <span className={`text-sm ${plan.id === 'free' ? 'text-muted-foreground' : 'text-white/90'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="relative z-10">
                    <Button 
                      className={`w-full font-bold py-3 transition-all duration-300 hover:scale-105 ${
                        plan.id === 'free' 
                          ? 'bg-primary hover:bg-primary/90 text-white' 
                          : 'bg-white/20 hover:bg-white/30 text-white border-white/30'
                      }`}
                      variant={plan.id === 'free' ? 'default' : 'outline'}
                    >
                      {plan.id === 'free' ? 'ابدأ مجاناً' : t('pricing.buy')}
                    </Button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground mb-6">
            هل تحتاج باقة مخصصة لمؤسستك أو مدرستك؟
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
          >
            تواصل معنا للحصول على عرض خاص
          </Button>
        </div>
      </div>
    </section>
  );
};