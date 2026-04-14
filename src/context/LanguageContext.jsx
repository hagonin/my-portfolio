import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('fr');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLocale(saved);
    }
    setIsLoaded(true);
  }, []);

  const changeLocale = (newLocale) => {
    if (newLocale === 'fr' || newLocale === 'en') {
      setLocale(newLocale);
      localStorage.setItem('locale', newLocale);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLocale, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
