
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../Layout/Landing";
import Home from "../pages/home";
import ProductHrms from "../pages/ProductHrms";
import ContactUs from "../pages/ContactUs";

const Router = () => {
    return (
        <BrowserRouter future={ { v7_startTransition: true, v7_relativeSplatPath: true,} }>
            <Routes>
                <Route element={<LandingLayout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product-hrms" element={<ProductHrms />}></Route>
                    <Route path="/contact-us" element={<ContactUs />}></Route>
                </Route>    
            </Routes>
        </BrowserRouter>
    )
}

export default Router;