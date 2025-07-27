export type toggleLanguageType = 
{
  toggleLanguage: () => void;
  isEnglish: boolean;
}

export type NavbarProps = {
  lang?: 'en' | 'bn';
  setLang : (lang: 'en' | 'bn') => void;
};
