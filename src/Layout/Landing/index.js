import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { matchPath, Outlet, useLocation } from "react-router-dom";

const LandingLayout = () => {
    
    return (
        <React.Fragment>
            <Navbar />
            <main className={`main-panel`}>
                <Outlet />
            </main>
            <Footer />
            
        </React.Fragment >
    );
}

export default LandingLayout;
