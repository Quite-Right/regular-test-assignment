import { IStore } from '@redux/reducers/root-reducer';

export const selectCharacterInfo = (store: IStore) => store.character.data;