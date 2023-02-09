import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@redux/reducers';
import rootSaga from '@redux/sagas';
import { IStore } from '@local-types';

export const createAppStore = (preloadedState?: Partial<IStore>) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
