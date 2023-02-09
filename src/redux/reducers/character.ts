import { AnyAction } from 'redux';
import { ICharacterStore } from '@local-types';
import { FETCH_CHARACTER, FETCH_CHARACTER_FAILED, FETCH_CHARACTER_SUCCEED } from '@redux/actions';

const initialState: ICharacterStore = {
  data: {},
  selectedCharacterId: null
};

export const characterReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
  case FETCH_CHARACTER:
    return {
      ...state,
      data: { ...state.data, [action.payload.characterId]: {
        ...(state.data[action.payload.characterId] || {}),
        fetching: true,
      } }
    };
  case FETCH_CHARACTER_SUCCEED:
    return {
      ...state,
      data: { ...state.data, [action.payload.characterId]: {
        fetching: false,
        data: action.payload.data,
        error: null
      } }
    };
  case FETCH_CHARACTER_FAILED:
    return {
      ...state,
      data: { ...state.data, [action.payload.characterId]: {
        ...(state.data[action.payload.characterId] || {}),
        fetching: false,
        error: action.payload.error,
      } }
    };
  default:
    return state;
  }
};