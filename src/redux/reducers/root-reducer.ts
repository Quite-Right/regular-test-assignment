import { combineReducers } from 'redux';
import { charactersReducer } from './characters';
import { characterReducer } from './character';
import { languageReducer } from './language';

export const rootReducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer,
  language: languageReducer
});

