import {IStore} from '../reducers/root-reducer';

export const selectCharactersInfo = (store: IStore) => store.characters;
