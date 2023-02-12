import { ENG, RU } from '@constants';
import { useGetDicitonaryValue } from '@hooks';
import { ILanguagesContextStore } from '@local-types';
import { LanguagesContext } from '@contexts';
import { useContext } from 'react';
import { Brand, HeaderContainer, LangButton, LangIcon, LangText } from './app-header.styles';


export const AppHeader = () => {
  const getDictionaryValue = useGetDicitonaryValue();
  const { language, setLanguage } = useContext(LanguagesContext) as ILanguagesContextStore;
  const languageToBeChangedTo = language === RU ? ENG : RU;
  return <HeaderContainer>
    <Brand level={2}>
      {getDictionaryValue('header.title')}
    </Brand>
    <LangButton onClick={() => setLanguage(languageToBeChangedTo)}>
      <LangIcon />
      <LangText>
        {languageToBeChangedTo}
      </LangText>
    </LangButton>
  </HeaderContainer>;
};