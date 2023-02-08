import { combineReducers } from 'redux';
import { ICharactersStore, ICharacterStore } from '@local-types';
import { charactersReducer } from './characters';
import { characterReducer } from './character';

export const rootReducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer
});

export type IStore = {
    characters: ICharactersStore,
    character: ICharacterStore
}