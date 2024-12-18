
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../Layout/Landing";
import Home from "../pages/home";
import ProductMdm from "../pages/ProductMdm";
import ProductCrm from "../pages/ProductCrm";
import ProductHrms from "../pages/ProductHrms";
import ProductDigyBooks from "../pages/ProductDigyBooks";
import ContactUs from "../pages/ContactUs";
import ScrollToTop from "../Components/ScrollToTop";

const Router = () => {
    return (
        <BrowserRouter future={ { v7_startTransition: true, v7_relativeSplatPath: true,} }>
            <ScrollToTop/>
            <Routes>
                <Route element={<LandingLayout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product-mdm" element={<ProductMdm />}></Route>
                    <Route path="/product-crm" element={<ProductCrm />}></Route>
                    <Route path="/product-hrms" element={<ProductHrms />}></Route>
                    <Route path="/product-digybooks" element={<ProductDigyBooks />}></Route>
                    <Route path="/contact-us" element={<ContactUs />}></Route>
                </Route>    
            </Routes>
        </BrowserRouter>
    )
}

export default Router;