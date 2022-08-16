import axios from "axios";
import {PROJECT_API_URL} from "../consts/Consts";

export const AxiosClient =
    axios.create({
        baseURL: PROJECT_API_URL,
        headers: {
            "Content-Type": "application/json",
        },
    })