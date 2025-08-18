import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from 'lucide-react';
import jawabakLogo from '@/assets/jawabak-logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.games'), href: '#games' },
    { name: t('nav.pricing'), href: '#pricing' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Youtube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_25%_75%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src={jawabakLogo} alt="Jawabak Logo" className="h-12 w-12" />
                <span className="text-3xl font-bold">
                  {t('hero.title')}
                </span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                منصة الألعاب الثقافية الأولى التي تجمع بين المتعة والتعلم، حيث يلتقي الأصدقاء والعائلة لاختبار معلوماتهم في جو من المنافسة الشريفة والمرح.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:underline">
                    الشروط والأحكام
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:underline">
                    سياسة الخصوصية
                  </a>
                </li>
              </ul>
            </div>

            {/* Game Categories */}
            <div>
              <h4 className="text-xl font-bold mb-6">فئات الألعاب</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:underline">طلاب</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:underline">أطفال</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:underline">عامة</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:underline">رياضة</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:underline">تاريخ</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:underline">علوم</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/80">info@jawabak.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/80">+965 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/80">الكويت، مدينة الكويت</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-center md:text-left">
              © {t('footer.year')} {t('hero.title')} - {t('footer.rights')}
            </p>
            
            <div className="flex items-center gap-2 text-white/80">
              <span>صُنع بـ</span>
              <Heart className="h-4 w-4 text-accent animate-pulse" />
              <span>في الكويت</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
};