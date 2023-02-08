import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@redux/reducers';
import rootSaga from '@redux/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(rootSaga);