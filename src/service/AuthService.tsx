import {AxiosClient} from "../utils/AxiosClientUtils";
import {User} from "../types/Types";

/**
 * 로그인 비즈니스 로직
 * @param {User} user - 입력한 email, password 정보
 */
const login = (user: User) => {
    return AxiosClient.post("/users/login", user);
}

/**
 * 회원 가입 비즈니스 로직
 * @param {User} user - 입력한 email, password 정보
 */
const signUp = (user: User) => {
    return AxiosClient.post("/users/create", user);
}

export const AuthService = {
    login, signUp
}
