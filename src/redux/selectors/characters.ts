import { IStore } from '@redux/reducers/root-reducer';

export const selectCharactersInfo = (store: IStore) => store.characters;
