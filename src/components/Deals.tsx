import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Deals = () => {
  const { t } = useTranslation();

  const deals = [
    {
      title: t('deals.deal1.title'),
      description: t('deals.deal1.description'),
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      title: t('deals.deal2.title'),
      description: t('deals.deal2.description'),
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81"
    },
    {
      title: t('deals.deal3.title'),
      description: t('deals.deal3.description'),
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    }
  ];

  return (
    <section id="deals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('deals.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('deals.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Tag className="w-8 h-8 text-orange-500 bg-white rounded-full p-1" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {deal.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {deal.description}
                </p>
                <a
                  href="https://take.app/familypie"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold"
                >
                  {t('deals.orderNow')}
                  <ArrowRight className="mx-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;