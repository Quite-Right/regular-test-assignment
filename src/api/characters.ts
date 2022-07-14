import {AxiosInstance} from "axios";
import {getCharactersUrl} from "../constants/api";
import {ICharacter} from "../types/characters";

export const getCharacters = (instance: AxiosInstance, page?: number): Promise<ICharacter> =>
    instance.get(getCharactersUrl(page));