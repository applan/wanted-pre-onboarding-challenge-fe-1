import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";

/**
 * 페이지 이동을 처리하는 Routers 생성
 * @constructor Routers 생성
 */
export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}