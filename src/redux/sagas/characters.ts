import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '@api';
import {
  FETCH_CHARACTERS_REQUESTED,
  fetchCharactersFailed,
  fetchCharactersSucceed,
  fetchCharacters
} from '@redux/actions/characters';
import { ICharacter } from '@local-types';

function* requestCharacters(action: AnyAction) {
  try {
    yield put(fetchCharacters());
    const charactersResponse: AxiosResponse<ICharacter[]> = yield call(Api.getCharacters, action.payload);
    yield put(fetchCharactersSucceed(charactersResponse.data));
  } catch (e) {
    yield put(fetchCharactersFailed(e as Error));
  }
}

function* charactersSaga() {
  yield takeLatest(FETCH_CHARACTERS_REQUESTED, requestCharacters);
}

export default charactersSaga;