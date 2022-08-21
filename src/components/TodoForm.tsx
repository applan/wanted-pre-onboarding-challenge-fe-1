import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";

export const TodoForm = (props: { userState: string; }) => {

    const addBtnGroup = () => {
        return (
            <Button className="me-2 " variant="primary" type="submit">
                저장
            </Button>
        );
    }

    const updBtnGroup = () => {
        return (
            <>
                <Button className="me-2 " variant="warning" type="submit">
                    수정
                </Button>
                <Button className="me-2" variant="secondary" type="submit">
                    취소
                </Button>
                <Button variant="danger" type="submit">
                    삭제
                </Button>
            </>
        );
    }

    return (
        <div className="col-7 col-sm-9 h-100 border rounded-sm" >
            <Form.Group className="mb-2 mt-3">
                <Form.Label>제목</Form.Label>
                <Form.Control placeholder="Disabled input" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label>내용</Form.Label>
                <Form.Control className="resize-none" as="textarea" rows={19}/>
            </Form.Group>
            <div className="w-100 text-end">
                {props.userState == "ADD" ? addBtnGroup() : updBtnGroup()}
            </div>
        </div>
    );
}

export default TodoForm;