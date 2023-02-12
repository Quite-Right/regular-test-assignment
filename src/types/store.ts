import { ICharacter, ICharacterFullInfo, ILanguageStore } from '@local-types';

export interface IDefaultStore<T> {
    data: T | null;
    fetching: boolean;
    error: Error | null;
}

export interface ICharacterStoreData {
    data: ICharacterFullInfo,
    id: string;
}

export interface ICharactersStoreData {
    count: number;
    previous: null | string;
    next: null | string;
    results: ICharacter[]
}

export type TCharactersStore = IDefaultStore<ICharactersStoreData>;
export type TCharacterStore = IDefaultStore<ICharacterStoreData>;

export interface IStore {
    characters: TCharactersStore,
    character: TCharacterStore,
    language: ILanguageStore
}

