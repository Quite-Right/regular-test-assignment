import { ReactNode } from 'react';
import { ReduxProvider } from './redux';

interface IRootProviderProps {
    children: ReactNode;
}

export const RootProvider = ({children}: IRootProviderProps) => <ReduxProvider>
  {children}
</ReduxProvider>;