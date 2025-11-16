import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translations } from '../translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // localStorage에서 초기 언어 로드
  const [language, setLanguageState] = useState<string>(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'ko';
  });

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t: Translations = translations[language] || translations.ko;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

