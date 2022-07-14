import {all} from 'redux-saga/effects';
import characterSaga from "./character";
import charactersSaga from "./characters";

export function* rootSaga () {
    yield all([
        characterSaga(),
        charactersSaga()
    ]);
}