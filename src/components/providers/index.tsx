import { ReactNode } from 'react';
import { ReduxProvider } from './redux';
import { RouterProvider } from './router';
import { StrictModeProvider } from './strict-mode';
import { GlobalStyleProvider } from './global-style';

interface IRootProviderProps {
    children: ReactNode;
}

export const RootProvider = ({ children }: IRootProviderProps) => <StrictModeProvider>
  <GlobalStyleProvider />
  <RouterProvider>
    <ReduxProvider>
      {children}
    </ReduxProvider>
  </RouterProvider>
</StrictModeProvider>;