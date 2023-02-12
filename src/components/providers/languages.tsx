import { ReactNode, useState } from 'react';
import { TLanguage } from '@local-types';
import { ENG, RU } from '@constants';
import { LanguagesContext } from '@contexts';

interface ILanguagesProviderProps {
    children: ReactNode;
}

export const LanguagesProvider = ({
  children
}: ILanguagesProviderProps) => {
  const [language, setLanguage] = useState<TLanguage>(window?.navigator?.languages.find(
    lang => lang.includes('ru')
  ) ? RU : ENG);
  return <LanguagesContext.Provider value={{
    language,
    setLanguage
  }}>
    {children}
  </LanguagesContext.Provider>;
};