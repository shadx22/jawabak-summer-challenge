import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import jawabakLogo from '@/assets/jawabak-logo.png';
export const Header = () => {
  const {
    t,
    dir
  } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    key: 'nav.home',
    href: '#home'
  }, {
    key: 'nav.about',
    href: '#about'
  }, {
    key: 'nav.games',
    href: '#games'
  }, {
    key: 'nav.pricing',
    href: '#pricing'
  }, {
    key: 'nav.contact',
    href: '#contact'
  }];
  return <header className="fixed top-0 w-full z-50 bg-gradient-hero backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            
            <span className="text-2xl lg:text-3xl font-bold text-white">
              {t('hero.title')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => <a key={item.key} href={item.href} className="text-white/90 hover:text-white transition-smooth font-medium">
                {t(item.key)}
              </a>)}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <Button variant="secondary" className="font-medium shadow-ocean">
              {t('hero.cta.create')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageToggle />
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:bg-white/10">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map(item => <a key={item.key} href={item.href} className="text-white/90 hover:text-white transition-smooth font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  {t(item.key)}
                </a>)}
              <div className="pt-4 border-t border-white/20">
                <Button variant="secondary" className="w-full font-medium">
                  {t('hero.cta.create')}
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};