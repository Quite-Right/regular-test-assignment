import { call, put, select, takeEvery } from 'redux-saga/effects';
import Api from '@api';
import {
  FETCH_CHARACTER_REQUESTED,
  fetchCharacterFailed,
  fetchCharacterSucceed,
  fetchCharacter
} from '@redux/actions/character';
import { ICharacterFullInfo } from '@local-types';
import { AxiosResponse } from 'axios';
import { selectedCharacterId } from '@redux/selectors';

function* requestCharacter() {
  try {
    const characterId = (yield select(selectedCharacterId)) as string;
    yield put(fetchCharacter(characterId));
    const characterResponse: AxiosResponse<ICharacterFullInfo> = yield call(Api.getCharacter, characterId);
    yield put(fetchCharacterSucceed(characterId, characterResponse.data));
  } catch (e) {
    yield put(fetchCharacterFailed(e as Error));
  }
}

function* characterSaga() {
  yield takeEvery(FETCH_CHARACTER_REQUESTED, requestCharacter);
}

export default characterSaga;