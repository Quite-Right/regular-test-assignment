import { combineReducers } from 'redux';
import { charactersReducer } from './characters';
import { characterReducer } from './character';
import { languageReducer } from './language';
import { IStore } from '@local-types';

export const rootReducer = combineReducers<IStore>({
  characters: charactersReducer,
  character: characterReducer,
  language: languageReducer
});

