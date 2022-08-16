import React, {useState} from 'react';
import sideImage from '../../images/sideImage-Onboarding.png';
import {User} from '../../types/Types'
import {Card, Form, Button} from 'react-bootstrap';
import {loginValidation} from "../../validataion/Validation";

function Login() {

    const [loginForm, setLoginForm] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        loginValidation(loginForm);
        setLoading(false);
    }

    return (
        <section className="vh-100">
            <main className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100 pb-5">
                    <div className="col col-xl-8">
                        <Card className="shadow-2-strong rounded">
                            <Card.Img className="h-50 rounded mb-2" variant="top" src={sideImage}/>
                            <Card.Body className="row justify-content-center align-items-center">
                                <div className="col-8 col-xl-6">
                                    <Card.Title className="text-center mb-4 fw-bold">LOGIN</Card.Title>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Email</Form.Label>
                                            <input className="form-control" type="email" value={loginForm?.email || ''} name="email" onChange={handleChange}/>
                                        </Form.Group>

                                        <Form.Group className="mb-5">
                                            <Form.Label>Password</Form.Label>
                                            <input className="form-control" type="password" value={loginForm?.password || ''} name="password" onChange={handleChange}/>
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
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Login;