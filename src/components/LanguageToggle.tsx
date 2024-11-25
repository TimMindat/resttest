import React from 'react';
import { useTranslation } from 'react-i18next';

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
      {i18n.language === 'ar' ? (
        <span className="text-xl font-semibold mx-1">En</span>
      ) : (
        <span className="text-xl font-semibold mx-1">ع</span>
      )}
    </button>
  );
};

export default LanguageToggle;