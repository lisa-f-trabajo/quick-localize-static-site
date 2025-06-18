
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          ModernApp
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white/90 hover:text-white transition-colors">
            {t('nav.home')}
          </a>
          <a href="#features" className="text-white/90 hover:text-white transition-colors">
            {t('nav.features')}
          </a>
          <a href="#about" className="text-white/90 hover:text-white transition-colors">
            {t('nav.about')}
          </a>
          <a href="#contact" className="text-white/90 hover:text-white transition-colors">
            {t('nav.contact')}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button className="bg-white text-purple-600 hover:bg-gray-100">
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
