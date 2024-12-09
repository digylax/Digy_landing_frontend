import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import digyLogo from '../../assets/images/digylax-logo.png';
import whatsappIcon from '../../assets/images/header/whatsapp-icon.svg';
import settingIcon from '../../assets/images/header/setting-icon.svg';
import qmarkIcon from '../../assets/images/header/question-mark-icon.svg';
import bellIcon from '../../assets/images/header/bell-icon.svg';
import profilePicture from '../../assets/images/user-img.png';
import companyLogo from '../../assets/images/header/McAfee.png';
import { FiLayers } from "react-icons/fi";

const Header = () => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        navigate(`/`);
    }

    return (
        
        <header
            className="navbar navbar-expand-lg fixed-top px-2 py-2 top-header">
            <nav className="container-lg shadow-sm flex-wrap flex-lg-nowrap bg-white border rounded-4 px-xl-3 px-xxl-4 py-2">
                {/* Left side Mobile Hamburger icon */}
                <button className="navbar-toggler border-0" type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuNavbar"
                    aria-controls="offcanvasMenuNavbar">
                    <FiLayers />
                </button>
                {/* Brand Logo */}
                <a className="navbar-brand py-0 d-flex mx-auto ms-lg-0">
                    <img src={digyLogo} alt="digylax-logo" width="130" height="24" className="align-self-center" />
                </a>

                {/* Left side menus Start */}
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasMenuNavbar" aria-labelledby="offcanvasMenuNavbarLabel">
                    <div className="offcanvas-header">
                        {/* <h5 className="offcanvas-title" id="offcanvasMenuNavbarLabel">Mobile Menu Title</h5> */}
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-lg-row mx-auto btn-group main-links-list">
                            <li className={`nav-item dropdown text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark with-arrow angle-icon dropdown-toggle`}
                                id="dropdownOne" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </button>
                                <ul className="dropdown-menu overflow-auto" aria-labelledby="dropdownOne">
                                    <li><a className="dropdown-item cursor-pointer">Option 1</a></li>
                                    <li><a className="dropdown-item cursor-pointer">Option 2</a></li>
                                </ul>
                            </li>
                            <li className={`nav-item text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark`}>
                                    Enterprise
                                </button>
                            </li>
                            <li className={`nav-item text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark`}>
                                    Customers
                                </button>
                            </li>
                            <li className={`nav-item dropdown text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark with-arrow angle-icon dropdown-toggle`} 
                                id="dropdownTwo" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </button>
                                <ul className="dropdown-menu overflow-auto" aria-labelledby="dropdownTwo">
                                    <li><a className="dropdown-item cursor-pointer">Option 1</a></li>
                                    <li><a className="dropdown-item cursor-pointer">Option 2</a></li>
                                </ul>
                            </li>
                            <li className={`nav-item dropdown text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark with-arrow angle-icon dropdown-toggle`} 
                                id="dropdownThree" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </button>
                                <ul className="dropdown-menu overflow-auto" aria-labelledby="dropdownThree">
                                    <li><a className="dropdown-item cursor-pointer">Option 1</a></li>
                                    <li><a className="dropdown-item cursor-pointer">Option 2</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button type="button" className={`btn btn-primary rounded-pill con-btn`}>
                            Contact Us
                        </button>
                    </div>
                </div>
                {/* // Left side menus END // */}
            </nav>
        </header>
        
    )

}
export default Header;