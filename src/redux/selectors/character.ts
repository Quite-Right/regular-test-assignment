import {TStore} from "../reducers/root-reducer";

export const selectCharacterInfo = (store: TStore) => store.character.data;