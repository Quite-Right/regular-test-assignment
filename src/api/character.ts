import { AxiosInstance } from 'axios';
import { getCharacterUrl } from '@constants';
import { ICharacterFullInfo } from '@local-types';

export const getCharacter = (instance: AxiosInstance, id: string): Promise<ICharacterFullInfo> =>
  instance.get(getCharacterUrl(id));