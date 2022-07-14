export const DEFAULT_TIMEOUT = 1000;
export const BASE_URL = 'https://swapi.dev/api/';
export const getCharactersUrl = (param: {page?: number, search?: string} = {}) =>
    `${BASE_URL}people/${param.search || param.page !== undefined ? '?' : ''}${param.search ?
        `search=${param.search}` : ''}${param.search && param.page !== undefined ? '&' : ''}${param.page !== undefined ? `page=${param.page}` : ''}`;
export const getCharacterUrl = (id: string) => `${getCharactersUrl()}${id}/`;