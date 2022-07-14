import axios from "axios";
import {BASE_URL, DEFAULT_TIMEOUT} from "../constants/api";
import {getCharacters} from "./characters";
import {getCharacter} from "./character";

const Api: Record<string, (...args: any) => any> = {
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