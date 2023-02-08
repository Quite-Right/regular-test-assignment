import {AxiosInstance} from 'axios';
import {getCharacterUrl} from '../constants/api';
import {ICharacterFullInfo} from '../types/character';

export const getCharacter = (instance: AxiosInstance, id: string): Promise<ICharacterFullInfo> =>
  instance.get(getCharacterUrl(id));