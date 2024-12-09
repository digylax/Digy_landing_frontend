
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../Layout/Landing";
import Home from "../pages/home";

const Router = () => {
    return (
        <BrowserRouter future={ { v7_startTransition: true, v7_relativeSplatPath: true,} }>
            <Routes>
                <Route element={<LandingLayout />}>
                    <Route path="/" element={<Home />}></Route>
                </Route>    
            </Routes>
        </BrowserRouter>
    )
}

export default Router;