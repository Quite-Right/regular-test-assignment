import { RU, ENG } from '@constants';

export type TLanguage = typeof RU | typeof ENG;

export interface ILanguageStore {
    language: TLanguage;
}