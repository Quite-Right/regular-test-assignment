import { get } from 'lodash';
import { useContext } from 'react';
import { LanguagesContext } from '@contexts';
import dictionaries from '@dictionaries';
import { ILanguagesContextStore } from '@local-types';


export const useGetDicitonaryValue = () => {
  const { language } = useContext(LanguagesContext) as ILanguagesContextStore;
  const dictionary = dictionaries[language];
  return (path: string): string | null =>
    get(dictionary, path, null);
};
