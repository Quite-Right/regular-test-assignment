import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '@api';
import {
  FETCH_CHARACTER_REQUESTED,
  fetchCharacterFailed,
  fetchCharacterSucceed,
  fetchCharacter
} from '@redux/actions/character';
import { AnyAction } from 'redux';
import { ICharacterFullInfo } from '@local-types';
import { AxiosResponse } from 'axios';

function* requestCharacter(action: AnyAction) {
  const characterId = action.payload.characterId;
  try {
    yield put(fetchCharacter(characterId));
    const characterResponse: AxiosResponse<ICharacterFullInfo> = yield call(Api.getCharacter, characterId);
    yield put(fetchCharacterSucceed(characterId, characterResponse.data));
  } catch (e) {
    yield put(fetchCharacterFailed(characterId, e as Error));
  }
}

function* characterSaga() {
  yield takeEvery(FETCH_CHARACTER_REQUESTED, requestCharacter);
}

export default characterSaga;