import React, { useState, useEffect } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import digyLogo from '../../assets/images/digylax-logo.png';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {

    const navigate = useNavigate();

    // Init AOS Animation
    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        <>
            <footer className="bg-body-tertiary footer main-footer mt-auto">
                <div className="container">
                    <footer className="pt-5">
                        <div className="row">

                            <div className="col-lg-5 mb-3">
                                <form data-aos="fade-right">
                                    <div className="footer-logo mb-3">
                                        <a role="button" onClick={() => navigate("/")}>
                                            <img src={digyLogo} alt="digylax-logo" width="130" height="24" className="align-self-center" />
                                        </a>
                                    </div>
                                    <p>Join our newsletter to stay up to date on features and releases.</p>
                                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="text" className="form-control rounded-pill" placeholder="Email your email" />
                                        <button className="btn btn-dark rounded-pill fs-14" type="button">Subscribe</button>
                                    </div>
                                    <p className="small mt-3">
                                        By subscribing you agree to with our 
                                        <a href="#" className="text-dark text-decoration-underline px-1">Privacy Policy</a> 
                                        and provide consent to receive updates from our company.
                                    </p>
                                </form>
                            </div>

                            <div className="col-6 col-md-4 col-lg-2 offset-lg-1 gx-lg-0 gx-xl-3 mb-3" data-aos="fade-right" data-aos-delay={400}>
                                <h6 className="fw-semibold">Company</h6>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <address className="mb-1 address">
                                            <span className="fw-medium">Address</span><br />
                                            Digylax pvt ltd,<br />
                                            No. 1708, Avinashi Road,<br />
                                            Civil Aerodrome Post,<br />
                                            Coimbatore - 641014<br />
                                        </address>
                                    </li>
                                    
                                    {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Enterprices</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Customers</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li> */}
                                    <li className="nav-item mb-2"><a role="button" onClick={()=> navigate("/")} className="nav-link p-0 text-body-secondary">Careers</a></li>
                                    <li className="nav-item mb-2"><a role="button" onClick={()=> navigate("/contact-us")} className="nav-link p-0 text-body-secondary">Contact Us</a></li>
                                    
                                    
                                </ul>
                            </div>

                            <div className="col-6 col-md-4 col-lg-2 mb-3" data-aos="fade-right" data-aos-delay={600}>
                                <h6 className="fw-semibold">Contact Sales</h6>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <span className="d-block fw-medium mb-2">Phone</span>
                                        <a href="tel:+919585536525" className="nav-link p-0 text-body-secondary">+91 9585536525</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <span className="d-block fw-medium mb-2">Email</span>
                                        <a href="mailto:info@digylax.com" className="nav-link p-0 text-body-secondary">info@digylax.com</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <span className="d-block fw-medium mb-2">Support</span>
                                        <a href="mailto:support@digylax.com" className="nav-link p-0 text-body-secondary">support@digylax.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4 col-lg-2 mb-3" data-aos="fade-right" data-aos-delay={750}>
                                <h6 className="fw-semibold">Follow Us</h6>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary icon-link icon-link-hover">
                                            <BsFacebook size={18} color="#0076FF" className="bi fs-18" /> <span className="ms-2">Facebook</span>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary icon-link icon-link-hover">
                                            <BsInstagram size={18} color="#DF135E" className="bi fs-18" /> <span className="ms-2">Instagram</span>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary icon-link icon-link-hover">
                                            <BsTwitterX size={18} color="#000000" className="bi fs-18" /> <span className="ms-2">X</span>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary icon-link icon-link-hover">
                                            <BsLinkedin size={18} color="#005DD8" className="bi fs-18" /> <span className="ms-2">LinkedIn</span>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary icon-link icon-link-hover">
                                            <BsYoutube size={18} color="#F90000" className="bi fs-18" /> <span className="ms-2">Youtube</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top">
                            <p>© 2024 Digylax, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3"><a className="link-body-emphasis text-decoration-underline" role="button" onClick={()=> navigate("/")}>Privacy Policy</a></li>
                                <li className="ms-3"><a className="link-body-emphasis text-decoration-underline" role="button" onClick={()=> navigate("/")}>Terms of Service</a></li>
                                <li className="ms-3"><a className="link-body-emphasis text-decoration-underline" role="button" onClick={()=> navigate("/")}>Cookies Settings</a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </footer>
        </>
    );
}

export default Footer;