import { IStore } from '@local-types';

export const selectCharacterInfo = (store: IStore) => store.character.data;