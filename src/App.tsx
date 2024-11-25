import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Deals from './components/Deals';
import OrderOnline from './components/OrderOnline';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Deals />
        <OrderOnline />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App;