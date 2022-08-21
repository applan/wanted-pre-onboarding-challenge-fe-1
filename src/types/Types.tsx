/**
 * login, signIn에 사용하는 타입
 */
export type User = {
    email?: string | undefined;
    password?: string | undefined;
}

/**
 * Todo_를 위한 타입
 */
export type TodoData = {
    title: string | undefined;
    contents: string | undefined;
}