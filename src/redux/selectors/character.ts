import { IStore } from '@local-types';

export const characterStoreState = (store: IStore) => store.character;
export const selectedCharacterId = (store: IStore) => store.character.data?.id;