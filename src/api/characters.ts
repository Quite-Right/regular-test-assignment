import { AxiosInstance } from 'axios';
import { getCharactersUrl } from '@constants';
import { ICharacter } from '@local-types';

export const getCharacters = (instance: AxiosInstance, param: {page?: number, search?: string}): Promise<ICharacter> =>
  instance.get(getCharactersUrl(param));