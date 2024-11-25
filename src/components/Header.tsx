import React, { useState } from 'react';
import { Menu, Phone, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.menu'), href: '#menu' },
    { name: t('nav.specialDeals'), href: '#deals' },
    { name: t('nav.orderOnline'), href: '#order' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center">
            <img src="https://i.imgur.com/GumPsYq.png" alt="Family Pie Logo" className="h-16 w-auto" />
          </a>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <LanguageToggle />
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/966558088546"
              className="flex items-center text-green-600 hover:text-green-700"
            >
              <Phone className="w-5 h-5 mx-2" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://take.app/familypie"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200 flex items-center"
            >
              <ShoppingBag className="w-5 h-5 mx-2" />
              {t('nav.orderOnline')}
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <LanguageToggle />
              <a
                href="https://wa.me/966558088546"
                className="flex items-center text-green-600 hover:text-green-700"
              >
                <Phone className="w-5 h-5 mx-2" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://take.app/familypie"
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center"
              >
                <ShoppingBag className="w-5 h-5 mx-2" />
                {t('nav.orderOnline')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;