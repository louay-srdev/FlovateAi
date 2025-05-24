"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import enTranslations from '@/translations/en.json';
import arTranslations from '@/translations/ar.json';

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const router = useRouter();
  const { locale } = router;
  const [currentLocale, setCurrentLocale] = useState(locale || 'en');

  useEffect(() => {
    setCurrentLocale(locale || 'en');
  }, [locale]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLocale];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // Return the key if translation is not found
      }
    }
    
    return value;
  };

  const changeLanguage = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <TranslationContext.Provider value={{ t, currentLocale, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
} 