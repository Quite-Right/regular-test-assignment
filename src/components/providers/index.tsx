import { ReactNode } from 'react';
import { ReduxProvider } from './redux';
import { RouterProvider } from './router';

interface IRootProviderProps {
    children: ReactNode;
}

export const RootProvider = ({ children }: IRootProviderProps) => <RouterProvider>
  <ReduxProvider>
    {children}
  </ReduxProvider>
</RouterProvider>;