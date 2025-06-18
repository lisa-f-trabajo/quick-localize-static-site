
import { useTranslation } from 'react-i18next';

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '10,000+', label: t('stats.customers') },
    { number: '50,000+', label: t('stats.projects') },
    { number: '99.9%', label: t('stats.uptime') },
    { number: '24/7', label: t('stats.support') },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-purple-200 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
