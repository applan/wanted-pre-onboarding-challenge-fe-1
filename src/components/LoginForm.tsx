import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {User} from "../types/Types";
import {loginValidation} from "../validataion/Validation";
import {AuthService} from "../service/AuthService";
import {toast} from 'react-toastify'

export const LoginForm = () => {

    const [loginForm, setLoginForm] = useState<User>({});
    const [loading, setLoading] = useState<boolean>(false);

    /**
     * 이메일, 비밀번호 Input 값 변경 시 동작 LoginFormData State에 각 데이터를 넣어줌
     * @param {React.ChangeEvent<HTMLInputElement>} e - input 박스 변경 이벤트 객체
     */
    const handleLoginFormInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }

    /**
     * 로그인 버튼 클릭시 동작 함수 login 관련 validation 처리, 로그인 처리 진행
     * @param {React.FormEvent<HTMLFormElement>} e - Form 이벤트 객체
     */
    const handleLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);
        let isPass = loginValidation(loginForm);
        if(isPass) {
            AuthService.login(loginForm)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    toast.error(err?.response?.data?.details);
                })
                .finally(() => {
                    setLoading(false);
                })
        }else{
            setLoading(false);
        }
    }

    return (
        <Form onSubmit={handleLoginFormSubmit}>
            <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <input className="form-control" type="email" value={loginForm?.email || ''} name="email" onChange={handleLoginFormInputChange}/>
            </Form.Group>

            <Form.Group className="mb-5">
                <Form.Label>Password</Form.Label>
                <input className="form-control" type="password" value={loginForm?.password || ''} name="password" onChange={handleLoginFormInputChange}/>
            </Form.Group>

            <div className="text-end mb-4">
                <Button className="me-2" variant="secondary" type="submit" disabled={loading}>
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    SignIn
                </Button>
                <Button variant="primary" type="submit" disabled={loading}>
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    Login
                </Button>
            </div>
        </Form>
    );
}