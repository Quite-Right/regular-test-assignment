import { ReactNode } from 'react';
import { Store } from 'redux';
import { IStore } from '@local-types';
import { ReduxProvider } from './redux';
import { RouterProvider } from './router';
import { StrictModeProvider } from './strict-mode';
import { GlobalStyleProvider } from './global-style';

import { createAppStore } from '@redux/store';
import { LanguagesProvider } from './languages';


interface IRootProviderProps {
    children: ReactNode;
    store?: Store<IStore>;
}

export const RootProvider = ({
  children,
  store = createAppStore()
}: IRootProviderProps) => <StrictModeProvider>
  <LanguagesProvider>
    <GlobalStyleProvider />
    <RouterProvider>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </RouterProvider>
  </LanguagesProvider>
</StrictModeProvider>;