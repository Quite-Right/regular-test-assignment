import { ReactNode } from 'react';
import { ReduxProvider } from './redux';
import { RouterProvider } from './router';
import { StrictModeProvider } from './strict-mode';

interface IRootProviderProps {
    children: ReactNode;
}

export const RootProvider = ({ children }: IRootProviderProps) => <StrictModeProvider>
  <RouterProvider>
    <ReduxProvider>
      {children}
    </ReduxProvider>
  </RouterProvider>
</StrictModeProvider>;