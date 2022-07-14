export const DEFAULT_TIMEOUT = 1000;
export const BASE_URL = 'https://swapi.dev/api/';
export const getCharactersUrl = (page?: number) => `${BASE_URL}people/${page !== undefined ? `?page=${page}` : ''}`;
export const getCharacterUrl = (id: string) => `${getCharactersUrl()}${id}/`;