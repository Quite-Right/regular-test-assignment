import { TLanguage } from '@local-types';

export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setLanguage = (language: TLanguage) => ({ type: SET_LANGUAGE, payload: { language } });