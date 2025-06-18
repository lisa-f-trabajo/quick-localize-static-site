
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        features: "Features",
        about: "About",
        contact: "Contact"
      },
      hero: {
        title: "Transform Your Business",
        subtitle: "with Modern Digital Solutions",
        description: "Unlock your potential with our cutting-edge technology platform designed to accelerate growth and streamline operations.",
        cta: "Get Started Today",
        watchDemo: "Watch Demo"
      },
      features: {
        title: "Why Choose Us",
        subtitle: "Powerful features that drive results",
        feature1: {
          title: "Lightning Fast",
          description: "Experience blazing-fast performance with our optimized infrastructure."
        },
        feature2: {
          title: "Secure & Reliable",
          description: "Enterprise-grade security with 99.9% uptime guarantee."
        },
        feature3: {
          title: "Easy Integration",
          description: "Seamlessly integrate with your existing tools and workflows."
        }
      },
      stats: {
        customers: "Happy Customers",
        projects: "Projects Completed",
        uptime: "Uptime Guarantee",
        support: "24/7 Support"
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Join thousands of businesses already transforming with our platform.",
        button: "Start Free Trial"
      },
      footer: {
        copyright: "© 2024 ModernApp. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        features: "Características",
        about: "Acerca de",
        contact: "Contacto"
      },
      hero: {
        title: "Transforma Tu Negocio",
        subtitle: "con Soluciones Digitales Modernas",
        description: "Desbloquea tu potencial con nuestra plataforma tecnológica de vanguardia diseñada para acelerar el crecimiento y optimizar operaciones.",
        cta: "Comenzar Hoy",
        watchDemo: "Ver Demo"
      },
      features: {
        title: "Por Qué Elegirnos",
        subtitle: "Características poderosas que generan resultados",
        feature1: {
          title: "Súper Rápido",
          description: "Experimenta un rendimiento increíblemente rápido con nuestra infraestructura optimizada."
        },
        feature2: {
          title: "Seguro y Confiable",
          description: "Seguridad de nivel empresarial con garantía de 99.9% de tiempo activo."
        },
        feature3: {
          title: "Fácil Integración",
          description: "Integra perfectamente con tus herramientas y flujos de trabajo existentes."
        }
      },
      stats: {
        customers: "Clientes Felices",
        projects: "Proyectos Completados",
        uptime: "Garantía de Tiempo Activo",
        support: "Soporte 24/7"
      },
      cta: {
        title: "¿Listo para Comenzar?",
        description: "Únete a miles de empresas que ya se están transformando con nuestra plataforma.",
        button: "Comenzar Prueba Gratuita"
      },
      footer: {
        copyright: "© 2024 ModernApp. Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
