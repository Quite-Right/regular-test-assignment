import { ICharactersStore,ICharacterStore, ILanguageStore } from '@local-types';

export interface IStore {
    characters: ICharactersStore,
    character: ICharacterStore,
    language: ILanguageStore
}