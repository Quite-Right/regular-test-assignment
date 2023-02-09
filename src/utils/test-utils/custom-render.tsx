import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { RootProvider } from '@providers';
import { createAppStore } from '@redux/store';

type customRenderOptions = Partial<(Omit<RenderOptions, 'wrapper'> & {
  preloadedState: Record<string, any>
})>;

export const customRender = (
  ui: ReactElement<any>,
  {
    preloadedState = {},
    ...renderOptions
  }: customRenderOptions
  = {}
) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <RootProvider store={createAppStore(preloadedState)}>
        {children}
      </RootProvider>
    ),
    ...renderOptions
  });
};

// const mockeFnResult = new Proxy({}, {
//   get: (target, name) => {
    
//   }
// })

// export const mockedFn = jest.mock(() =>)