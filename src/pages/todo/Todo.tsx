import {useEffect, useState} from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import myProfile from "../../images/myProfile.jpg";
import {useNavigate} from "react-router-dom";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import {TodoData} from "../../types/Types";


export const Todo = () => {

    let navigate = useNavigate();
    const [userState, setUserState] = useState<string>("");
    const [todoList, setTodoList] = useState<TodoData[]>([]);
    useEffect(() => {
        setUserState('ADD');
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
                    <TodoList/>
                    <TodoForm userState={userState}/>
                </div>
            </main>
        </section>
    );

}

export default Todo;