import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";

export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}