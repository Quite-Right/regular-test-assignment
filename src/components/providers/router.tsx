import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface IRouterProviderProps {
    children: ReactNode;
}

export const RouterProvider = ({
  children
}: IRouterProviderProps) => <BrowserRouter>
  {children}
</BrowserRouter>;