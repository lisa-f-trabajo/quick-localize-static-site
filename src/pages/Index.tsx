
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Update document title and meta description based on current language
    document.title = i18n.language === 'es' 
      ? 'ModernApp - Tu Solución Digital' 
      : 'ModernApp - Your Digital Solution';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        i18n.language === 'es'
          ? 'Transforma tu negocio con nuestras soluciones digitales de vanguardia. Rápido, confiable y construido para el futuro.'
          : 'Transform your business with our cutting-edge digital solutions. Fast, reliable, and built for the future.'
      );
    }

    // Update HTML lang attribute
    document.documentElement.lang = i18n.language;

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', document.title);
    }
    
    if (ogDescription && metaDescription) {
      ogDescription.setAttribute('content', metaDescription.getAttribute('content') || '');
    }
  }, [i18n.language]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
