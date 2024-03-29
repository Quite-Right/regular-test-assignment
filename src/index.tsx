import ReactDOM from 'react-dom/client';
import { RootProvider } from '@providers';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RootProvider>
    <App />
  </RootProvider>
);