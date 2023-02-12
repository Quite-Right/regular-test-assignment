import { Dispatch, SetStateAction } from 'react';
import { RU, ENG } from '@constants';

export type TLanguage = typeof RU | typeof ENG;
export interface ILanguagesContextStore {
        language: TLanguage,
        setLanguage: Dispatch<SetStateAction<TLanguage>>
}