import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200"
    >
      <Languages className="w-5 h-5 mr-2" />
      {i18n.language === 'ar' ? 'English' : 'عربي'}
    </button>
  );
};

export default LanguageToggle;