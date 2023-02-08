import axios from 'axios';
import {BASE_URL, DEFAULT_TIMEOUT} from '../constants/api';
import {getCharacters} from './characters';
import {getCharacter} from './character';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Api: Record<string, (...args: any) => Promise<unknown>> = {
  getCharacters,
  getCharacter
};

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT
});

for (const key in Api) {
  Api[key] = Api[key].bind(null, instance);
}

export default Api;