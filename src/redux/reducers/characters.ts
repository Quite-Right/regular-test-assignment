import { AnyAction } from 'redux';
import {ICharactersStore} from "../../types/characters";
import {FETCH_CHARACTERS, FETCH_CHARACTERS_FAILED, FETCH_CHARACTERS_SUCCEED} from "../actions/characters";
const initialState: ICharactersStore = {
    data: null,
    fetching: false,
    error: null
}

export const charactersReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return {
                ...state,
                fetching: true,
            };
        case FETCH_CHARACTERS_SUCCEED:
            return {
                ...state,
                data: action.payload.data,
                fetching: false,
                error: null,
            };
        case FETCH_CHARACTERS_FAILED:
            return {
                ...state,
                fetching: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
}