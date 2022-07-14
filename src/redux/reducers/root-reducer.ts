import {combineReducers} from "redux";
import {charactersReducer} from "./characters";
import {characterReducer} from "./character";
import {ICharactersStore} from "../../types/characters";
import {ICharacterStore} from "../../types/character";

export const rootReducer = combineReducers({
    characters: charactersReducer,
    character: characterReducer
})

export type TStore = {
    characters: ICharactersStore,
    character: ICharacterStore
}