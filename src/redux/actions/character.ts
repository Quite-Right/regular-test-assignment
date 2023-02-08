import { ICharacterFullInfo } from '@local-types';

export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_CHARACTER_SUCCEED = 'FETCH_CHARACTER_SUCCEED';
export const FETCH_CHARACTER_FAILED = 'FETCH_CHARACTER_FAILED';
export const FETCH_CHARACTER_REQUESTED = 'FETCH_CHARACTER_REQUESTED';
export const SET_SELECTED_CHARACTER_ID = 'SET_SELECTED_CHARACTER_ID';

export const fetchCharacter = (characterId: string) => ({ type: FETCH_CHARACTER, payload: { characterId } });
export const fetchCharacterSucceed = (characterId: string, data: ICharacterFullInfo) => ({ type: FETCH_CHARACTER_SUCCEED, payload: { characterId, data } });
export const fetchCharacterFailed = (characterId: string, error: Error) => ({ type: FETCH_CHARACTER_FAILED, payload: { characterId, error } });
export const fetchCharacterRequest = (characterId: string) => ({ type: FETCH_CHARACTER_REQUESTED, payload: { characterId } });
export const setSelectedCharacterId = (characterId: string) => ({ type: SET_SELECTED_CHARACTER_ID, payload: { characterId } });