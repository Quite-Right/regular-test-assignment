import { ICharacter, ICharacterFullInfo } from '@local-types';

export interface IDefaultStore<T> {
    data: T | null;
    fetching: boolean;
    error: Error | null;
}

export interface ICharactersStoreData {
    count: number;
    previous: null | string;
    next: null | string;
    results: ICharacter[]
}

export type TCharactersStore = IDefaultStore<ICharactersStoreData>;

export interface ICharacterStoreData {
    data?: ICharacterFullInfo,
    id: string | null;
}

export type TCharacterStore = IDefaultStore<ICharacterStoreData>;

export interface IStore {
    character: TCharacterStore,
    characters: TCharactersStore,
}
