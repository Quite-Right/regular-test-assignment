import { ReactNode } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import reduxStore from '@redux/store';
import { IStore } from '@redux/reducers/root-reducer';


interface IReduxProviderProps {
    store?: Store<IStore>;
    children: ReactNode;
}

export const ReduxProvider = ({
  store = reduxStore,
  children
}: IReduxProviderProps) => <Provider store={store}>
  {children}
</Provider>;