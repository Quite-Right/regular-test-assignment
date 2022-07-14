export interface ICharacter {
    birth_year: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    created: string;
    edited: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
}

export interface ICharactersStore {
    data: {
        count: number;
        previous: null | string;
        next: null | string;
        results: ICharacter[];
    } | null;
    fetching: boolean;
    error: Error | null;
}