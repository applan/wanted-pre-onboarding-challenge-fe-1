import {Card, ListGroup} from "react-bootstrap";
import sideImage from "../images/sideImage-Onboarding.png";


export const TodoList = () => {

    /**
     * 추후 Todo_element 선택 시 값 값 자세히 보여주는 함수
     */
    const handleTodoClick = () => {
        console.log('으엉');
    }

    return (
        <div className="col-5 col-sm-3">
            <Card>
                <Card.Img variant="top" src={sideImage}/>
                <Card.Header className="border-top">My TODO_LIST</Card.Header>
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
    );
}

export default TodoList;