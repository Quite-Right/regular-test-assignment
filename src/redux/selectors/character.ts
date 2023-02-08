import {IStore} from '../reducers/root-reducer';

export const selectCharacterInfo = (store: IStore) => store.character.data;