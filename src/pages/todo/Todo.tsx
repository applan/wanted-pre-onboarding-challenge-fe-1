import {useEffect} from "react";
import {Card, Nav, Navbar, Container, ListGroup, Form, Button } from "react-bootstrap";
import sideImage from "../../images/sideImage-Onboarding.png";
import myProfile from "../../images/myProfile.jpg";
import {useNavigate} from "react-router-dom";

export const Todo = () => {

    let navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token == "" || token == "null" || token == null) navigate("/auth");
    });

    /**
     * 로그아웃 핸들러
     */
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/auth");
    }

    /**
     * 추후 Todo_element 선택 시 값 값 자세히 보여주는 함수
     */
    const handleTodoClick = () => {
        console.log('으엉');
    }

    return (
        <section className="vh-100">
            <main className="container py-5 h-100">
                <Navbar bg="light" expand="lg" className="mb-4">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={myProfile}
                                width="35"
                                height="35"
                                className="d-inline-block align-top rounded-circle"
                            />
                            Applan Todo_ 리스트 앱
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link onClick={handleLogout}>로그아웃</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="row h-80 w-100">
                    <div className="col-3 h-100">
                        <Card>
                            <Card.Img variant="top" src={sideImage}/>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>제목</Form.Label>
                                        <Form.Control type="text" placeholder="제목을 입력해주세요" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>내용</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <div className="w-100 text-end">
                                        <Button variant="primary" type="submit">
                                            추가
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                            <Card.Header className="border-top">저장된 TODO_</Card.Header>
                            <ListGroup id="myTodoListBox" className="list-group-flush">
                                <ListGroup.Item action onClick={handleTodoClick}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">등장!</div>
                                        dkdkdkdkaskdsakdl;sakd;lsadsad
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={handleTodoClick}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">등장!</div>
                                        dkdkdkdkaskdsakdl;sakd;lsadsad
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                    <div className="col-9 h-70 border rounded-sm" >
                        <Form.Group className="mb-3">
                            <Form.Label>Disabled input</Form.Label>
                            <Form.Control placeholder="Disabled input" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>내용</Form.Label>
                            <Form.Control className="resize-none" as="textarea" rows={19} disabled/>
                        </Form.Group>
                        <div className="w-100 text-end">
                            <Button className="me-2 " variant="warning" type="submit">
                                수정
                            </Button>
                            <Button className="me-2 " variant="primary" type="submit">
                                저장
                            </Button>
                            <Button className="me-2" variant="secondary" type="submit">
                                취소
                            </Button>
                            <Button variant="danger" type="submit">
                                삭제
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );

}

export default Todo;