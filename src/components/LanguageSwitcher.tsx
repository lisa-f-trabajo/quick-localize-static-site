
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    
    // Update HTML lang attribute for SEO
    document.documentElement.lang = newLang;
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
    >
      <Globe size={16} />
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;
