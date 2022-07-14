import {TStore} from "../reducers/root-reducer";

export const selectCharactersInfo = (store: TStore) => store.characters;
