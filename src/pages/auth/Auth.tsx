import sideImage from '../../images/sideImage-Onboarding.png';
import {Card} from 'react-bootstrap';
import {AuthForm} from "../../components/AuthForm";

function Login() {

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
                                    <AuthForm/>
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