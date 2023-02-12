import { ILanguagesContextStore } from '@local-types';
import { createContext } from 'react';

export const LanguagesContext = createContext<null | ILanguagesContextStore>(null);
