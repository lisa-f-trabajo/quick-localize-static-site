
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            {t('cta.description')}
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl">
            {t('cta.button')}
            <ArrowRight className="ml-2" size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
