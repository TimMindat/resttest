import React from 'react';
import { Instagram, Facebook, Telegram, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Social = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/familypie12",
      icon: Instagram,
      color: "bg-pink-500"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@familypieksa",
      icon: MessageCircle,
      customIcon: (
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6"
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: "bg-black"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61563899143978",
      icon: Facebook,
      color: "bg-blue-600"
    },
    {
      name: "Telegram",
      url: "https://t.me/Familypie12bot",
      icon: Telegram,
      color: "bg-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('social.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('social.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className={`${social.color} p-4 rounded-full text-white mb-4`}>
                  {social.customIcon ? social.customIcon : <social.icon className="w-6 h-6" />}
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-200">
                  {social.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;