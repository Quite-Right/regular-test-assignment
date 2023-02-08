import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import reduxStore from '@redux/store';
import { IStore } from '@redux/reducers/root-reducer';


interface IReduxProviderProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store?: IStore;
    children: ReactNode;
}

export const ReduxProvider = ({
  store = reduxStore,
  children
}: IReduxProviderProps) => <Provider store={store}>
  {children}
</Provider>;