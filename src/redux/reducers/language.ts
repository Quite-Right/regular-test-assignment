import { AnyAction } from 'redux';
import { ILanguageStore } from '@local-types';
import { SET_LANGUAGE } from '@redux/actions';
import { ENG, RU } from '@constants';

const initialState: ILanguageStore = {
  language: window?.navigator?.languages.includes('ru') ? RU : ENG
};

export const languageReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
  case SET_LANGUAGE:
    return {
      ...state,
      language: action.payload.language
    };
  default:
    return state;
  }
};