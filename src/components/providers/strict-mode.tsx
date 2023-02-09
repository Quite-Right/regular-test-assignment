import { StrictMode, ReactNode } from 'react';

interface IStrictModeProviderProps {
    children: ReactNode;
}

export const StrictModeProvider = ({
  children
}: IStrictModeProviderProps) => <StrictMode>
  {children}
</StrictMode>;