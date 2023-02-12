import { AnyAction } from 'redux';
import { TCharactersStore } from '@local-types';
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_FAILED,
  FETCH_CHARACTERS_SUCCEED
} from '@redux/actions';

const initialState: TCharactersStore = {
  data: null,
  fetching: false,
  error: null
};

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
};