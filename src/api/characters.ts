import {AxiosInstance} from "axios";
import {getCharactersUrl} from "../constants/api";
import {ICharacter} from "../types/characters";

export const getCharacters = (instance: AxiosInstance, param: {page?: number, search?: string}): Promise<ICharacter> =>
    instance.get(getCharactersUrl(param));