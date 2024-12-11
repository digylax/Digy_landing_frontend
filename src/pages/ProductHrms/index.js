import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Modal } from "react-bootstrap";
import { IoMdArrowRoundDown, IoMdArrowRoundForward } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { HiCube } from "react-icons/hi2";
import { PiPaperPlaneRight } from "react-icons/pi";
import { BiPhone } from "react-icons/bi";
import hrmsBannerBg from "../../assets/images/products/hrms-banner-bg.png";
import hrmsProBg from "../../assets/images/products/hrms-p-bg.png";
import videoSecBg from '../../assets/images/home/video-section-bg.jpg'
import ClientsLogoSlider from "../../Components/ClientsLogoSlider";
import HrmsTestimonial from "../../Components/HrmsTestimonial";
import HrmsFaqAccordion from "../../Components/HrmsFaq";

const ProductHrms = () => {
    const [BtnActiveState, setBtnActiveState] = useState("false");

    const [modalFullscreen, setModalFullscreen] = useState(true);
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    // Init AOS Animation
    useEffect(() => {
        AOS.init({
          disable: "phone", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
          disable: "mobile",
          duration: 1000,
          easing: "ease-in-out-cubic",
        });
    }, []);

    return ( <>
    <div className="product-details hrms">
        {/* Hero Banner */}
        <section className="hero-banner d-flex align-items-stretch pb-4 pb-lg-0">
            <div className="container-fluid h-100 px-lg-0">
                <div className="row align-items-center gx-lg-0 h-100">
                    <div className="col-lg-6 offset-lg-1" data-aos="fade-left">
                        <h1 className="fw-semibold display-5 banner-title">“Transform the Way You Manage Your Workforce!”</h1>
                        <p className="my-3 banner-sub-title">
                            A holistic solution for Onboarding, time management, payroll, 
                            performance management, and task management, and more.
                        </p>
                        <p className="my-3 pt-3 d-flex flex-column flex-sm-row align-items-center align-items-sm-start">
                            <Button variant="primary-digy" size="lg" className='fs-6 icon-link icon-link-hover'>
                                Get started for free
                                <IoMdArrowRoundForward className="bi fs-6 ms-1" />
                            </Button>
                            <Button variant="outline-primary" size="lg" className='ms-sm-3 mt-3 mt-sm-0 fs-6 icon-link icon-link-hover hover-icon-0deg'>
                                Book a free demo
                                <IoMdArrowRoundForward className="bi rotate--45deg fs-6 ms-1" />
                            </Button>
                        </p>
                    </div>
                    <div className="col-lg-5 col-xl-4 ms-lg-auto d-none d-lg-block">
                        <div className="pro-bg" data-aos="fade-right">
                            <img src={hrmsBannerBg} alt="digyHrms" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* // Hero Banner END // */}

        {/* Clients brand logo Slider */}
        <section className="py-5 bg-white client-logos" data-aos="fade-up">
            <div className="client-section center">
                <ClientsLogoSlider />
            </div>
        </section>
        {/* // Clients brand logo Slider END // */}

        {/* Demo Video Section */}
        <section className="py-5 mt-3 px-xxl-5 bg-body-tertiary video-section">
            <div className="container-lg px-xxl-5">
                {/* Head section */}
                <div className="mb-4 text-center mx-auto privacy-head" data-aos="fade-down">
                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                        <HiCube />
                        <span className="ps-2">Demo</span>
                    </span>
                    <h2 className="mt-3 mb-0 fs-1 fw-semibold">See How It Works?</h2>
                    <p className="my-4">
                        Discover the full potential of our HRMS with a customized demo. See how our solution 
                        simplifies HR processes and boosts efficiency in real-time.
                    </p>
                </div>
                {/* // Head section // */}

                <div className="ratio ratio-16x9" data-aos="fade-down">
                    <div className="text-center text-white video-card" role="button" onClick={handleShow}>
                        <img className="w-100 h-100 rounded-4" src={videoSecBg} alt="video section bg" />
                        <span className="play-icon position-absolute top-50 start-50 translate-middle"><FaPlayCircle size={64} /></span>
                    </div>
                </div>
            </div>
        </section>
        {/* // Demo Video Section END // */}

        {/* Testimonials Section */}
        <section className="py-5 my-3 px-xxl-5 testimonials">
            <div className="container-lg px-xxl-5">

                <div className="mb-4" data-aos="fade-up">
                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                        <HiCube />
                        <span className="ps-2">Testimonials</span>
                    </span>
                    <h2 className="mt-3 mb-0 fs-1 fw-semibold">
                        <div>Trusted by <br/><span className="text-primary">HR Leaders</span> Everywhere </div>
                    </h2>
                </div>

                <HrmsTestimonial />

                {/* Load More btn */}
                {/* <div className="text-center">
                    <Button variant="outline-secondary"
                        className={`icon-link icon-link-hover hover-icon-180deg p-2 ps-3 d-inline-flex align-items-center shadow-sm ${BtnActiveState ? '' : 'active'}`}
                        onClick={() => setBtnActiveState(!BtnActiveState)}>
                        <span className="fw-semibold">Load More Testimonials</span>
                        <IoMdArrowRoundDown size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary-subtle rounded-circle" />
                    </Button>
                </div> */}
                {/* // Load More btn // */}

            </div>
        </section>
        {/* // Testimonials Section END // */}

        {/* FAQ Section */}
        <section className="py-5 my-3 px-xxl-5 bg-white faq">
            <div className="container-lg px-xxl-5">
                <div className="row">

                    <div className="col-md-6 d-flex flex-column justify-content-between">
                        <div data-aos="fade-up">
                            <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                <HiCube />
                                <span className="ps-2">FAQs</span>
                            </span>
                            <h2 className="mt-3 mb-0 fw-semibold">Frequently Asked <br />Questions!</h2>
                        </div>
                        <div className="card px-3 py-4" data-aos="fade-down">
                            <h5 className="card-title fw-semibold">
                                <div className="text-dark">Can't Find Your Answer Here? </div>
                                <div className="text-secondary">We Can Help Out!</div>
                            </h5>
                            <div className="card-text mt-4">
                                <Button variant="primary" href="mailto:suppot@digylax.com" className='border-white icon-link icon-link-hover hover-icon--45deg p-1 ps-3 d-inline-flex align-items-center'>
                                    Send Us an Email
                                    <PiPaperPlaneRight size={16} className="bi rotate-45deg- ms-1 p-1 w-auto h-auto bg-info bg-opacity-50 rounded-circle" />
                                </Button>
                                <Button variant="outline-secondary" className='ms-3 icon-link icon-link-hover hover-icon--45deg p-1 ps-3 d-inline-flex align-items-center'>
                                    Schedule a Call
                                    <BiPhone size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary-subtle rounded-circle" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <HrmsFaqAccordion />
                    </div>
                </div>
            </div>
        </section>
        {/* // FAQ Section END //*/}

    </div>

    <Modal show={modalShow} fullscreen={modalFullscreen} onHide={() => setModalShow(false)}>
        <Modal.Body className="d-flex align-items-center">
            <button type="button" className="btn-close p-2 bg-white position-absolute end-0 top-0" aria-label="Close" onClick={handleClose}></button>
            <div className="ratio ratio-21x9">
                <div className="text-center">
                    <img className="w-100 h-100 rounded-4" src={videoSecBg} alt="video section bg" />
                </div>
            </div>
        </Modal.Body>
    </Modal>
    </> );
}
 
export default ProductHrms;