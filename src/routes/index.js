
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../Layout/Landing";
import Home from "../pages/home";
import ProductMdm from "../pages/ProductMdm";
import ProductCrm from "../pages/ProductCrm";
import ProductHrms from "../pages/ProductHrms";
import ProductDigyBooks from "../pages/ProductDigyBooks";
import ContactUs from "../pages/ContactUs";
import Careers from "../pages/Careers";
import JobDescription from "../pages/Careers/JobDescription";
import JobApplication from "../pages/Careers/JobApplication";
import ScrollToTop from "../Components/ScrollToTop";
import AboutUs from "../pages/AboutUs";

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
                    <Route path="/about-us" element={<AboutUs />}></Route>
                    <Route path="/careers" element={<Careers />}></Route>
                    <Route path="/careers/job-description" element={<JobDescription />}></Route>
                    <Route path="/careers/job-application" element={<JobApplication />}></Route>
                </Route>    
            </Routes>
        </BrowserRouter>
    )
}

export default Router;