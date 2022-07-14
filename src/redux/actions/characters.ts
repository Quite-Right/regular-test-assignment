import {ICharacter} from "../../types/characters";

// CHARACTERS
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_SUCCEED = 'FETCH_CHARACTERS_SUCCEED';
export const FETCH_CHARACTERS_FAILED = 'FETCH_CHARACTERS_FAILED';
export const FETCH_CHARACTERS_REQUESTED = 'FETCH_CHARACTERS_REQUESTED';


export const fetchCharacters = () => ({type: FETCH_CHARACTERS});
export const fetchCharactersSucceed = (data: ICharacter[]) => ({type: FETCH_CHARACTERS_SUCCEED, payload: {data}});
export const fetchCharactersFailed = (error: Error) => ({type: FETCH_CHARACTERS_FAILED, payload: {error}});
export const fetchCharactersRequest = (page: number) => ({type: FETCH_CHARACTERS_REQUESTED, payload: {page}});