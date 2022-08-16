import axios from "axios";
import {PROJECT_API_URL} from "../consts/Consts";

/**
 * 프로젝트에서 사용할 AxiosClient 객체 생성
 */
export const AxiosClient =
    axios.create({
        baseURL: PROJECT_API_URL,
        headers: {
            "Content-Type": "application/json",
        },
    })