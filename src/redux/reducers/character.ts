import { AnyAction } from 'redux';
import { ICharacterFullInfo, TCharacterStore } from '@local-types';
import { FETCH_CHARACTER, FETCH_CHARACTER_FAILED, FETCH_CHARACTER_SUCCEED, SET_SELECTED_CHARACTER_ID } from '@redux/actions';

const initialState: TCharacterStore = {
  data: null,
  fetching: false,
  error: null,
};

export const characterReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
  case SET_SELECTED_CHARACTER_ID:
    return {
      ...state,
      data: {
        id: action.payload.characterId
      }
    };
  case FETCH_CHARACTER:
    return {
      ...state,
      fetching: true,
    };
  case FETCH_CHARACTER_SUCCEED:
    return {
      ...state,
      fetching: false,
      data: {
        id: state.data?.id || null,
        data: action.payload.data as ICharacterFullInfo
      },
      error: null
    };
  case FETCH_CHARACTER_FAILED:
    return {
      ...state,
      fetching: false,
      error: action.payload.error,
    };
  default:
    return state;
  }
};