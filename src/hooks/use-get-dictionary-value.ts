import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { getLanguage } from '@redux/selectors';
import dictionaries from '@dictionaries';

export const useGetDicitonaryValue = () => {
  const lang = useSelector(getLanguage);
  const dictionary = dictionaries[lang];
  return (path: string): string | null =>
    get(dictionary, path, null);
};
