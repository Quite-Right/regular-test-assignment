import { ENG, RU } from '@constants';
import { useGetDicitonaryValue } from '@hooks';
import { setLanguage } from '@redux/actions';
import { getLanguage } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Brand, HeaderContainer, LangButton, LangIcon, LangText } from './app-header.styles';


export const AppHeader = () => {
  const getDictionaryValue = useGetDicitonaryValue();
  const language = useSelector(getLanguage);
  const languageToBeChangedTo = language === RU ? ENG : RU;
  const dispatch = useDispatch();
  return <HeaderContainer className="header">
    <Brand level={2}>
      {getDictionaryValue('header.title')}
    </Brand>
    <LangButton onClick={() => {
      dispatch(setLanguage(languageToBeChangedTo));
    }}>
      <LangIcon />
      <LangText>
        {languageToBeChangedTo}
      </LangText>
    </LangButton>
  </HeaderContainer>;
};