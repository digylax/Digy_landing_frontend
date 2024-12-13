import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { Button, Modal } from "react-bootstrap";
import { IoMdArrowRoundDown, IoMdArrowRoundForward } from "react-icons/io";
import { FiLayout } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";
import { HiCube } from "react-icons/hi2";
import { PiPaperPlaneRight } from "react-icons/pi";
import { BiPhone } from "react-icons/bi";
import hrmsBannerBg from "../../assets/images/products/hrms-banner-bg.png";
import hrmsProBg from "../../assets/images/products/hrms-p-bg.png";
import hrmsFeaBg1 from "../../assets/images/products/hrms/1-employee-information-management.jpg";
import hrmsFeaBg2 from "../../assets/images/products/hrms/2-pay-roll.jpg";
import hrmsFeaBg3 from "../../assets/images/products/hrms/3-attendence-management.jpg";
import hrmsFeaBg4 from "../../assets/images/products/hrms/4-recruitment.jpg";
import hrmsFeaBg5 from "../../assets/images/products/hrms/5-leave-management.jpg";
import hrmsFeaBg6 from "../../assets/images/products/hrms/6-compensation.jpg";
import hrmsFeaBg7 from "../../assets/images/products/hrms/7-ticket-status.jpg";
import hrmsFeaBg8 from "../../assets/images/products/hrms/8-travel-expenses.jpg";
import hrmsFeaBg9 from "../../assets/images/products/hrms/9-productivity-status.jpg";
import hrmsFeaBg10 from "../../assets/images/products/hrms/10-project-task-management.jpg";
import videoSecBg from '../../assets/images/home/video-section-bg.jpg'
import ClientsLogoSlider from "../../Components/ClientsLogoSlider";
import HrmsTestimonial from "../../Components/HrmsTestimonial";
import HrmsFaqAccordion from "../../Components/HrmsFaq";

const ProductHrms = () => {
    const navigate = useNavigate();

    const [BtnActiveState, setBtnActiveState] = useState("false");

    const [modalFullscreen, setModalFullscreen] = useState(true);
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    // Init AOS Animation
    // useEffect(() => {
    //     AOS.init({
    //     });
    // }, []);

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          once: false,    // Ensure animations are triggered every time
        });
    
        // Re-initialize AOS animations when a tab is changed
        const tabEl = document.getElementById('pills-tab');
        tabEl.addEventListener('shown.bs.tab', () => {
          AOS.refresh();  // Refresh AOS to trigger the animation on tab change
        });
    
        return () => {
          tabEl.removeEventListener('shown.bs.tab', () => {
            AOS.refresh();
          });
        };
    }, []);

    const [activeTab, setActiveTab] = useState('pills-1');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

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

        {/* Key Features Section */}
        <section className="py-5 mt-3 px-xxl-5 bg-body-tertiary key-features">
            <div className="container-lg px-xxl-5">
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block">

                        <div className="sticky-top me-xxl-5" style={{top: "72px"}}>
                            <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                <FiLayout />
                                <span className="ps-2">Key Features</span>
                            </span>
                            <h2 className="mt-4 fw-semibold">Streamline Your HR Operations with <br />These Powerful Tools</h2>

                            <nav id="navbar-example3" className="nav nav-pills flex-column mt-3 overflow-y-auto" >
                                <a className="nav-link mb-3 active shadow-sm text-primary bg-transparent border" herf="#items-1">Employee Information Management</a>
                                <a className="nav-link mb-3 text-dark bg-transparent border" herf="#items-2">Payroll and Tax Compliance</a>
                                <a className="nav-link mb-3 text-dark bg-transparent border" herf="#items-3">Attendance Management</a>
                                <a className="nav-link mb-3 text-dark bg-transparent border" herf="#items-4">Recruitment and Onboarding</a>
                                <a className="nav-link mb-3 text-dark bg-transparent border" herf="#items-5">Leave Management</a>
                                <a className="nav-link mb-3 text-dark bg-transparent border" herf="#items-6">Compensation Management</a>
                                <a className="nav-link mb-3 text-dark bg-transparent border" herf="#items-7">Ticket Status</a>
                                <a className="nav-link mb-3 text-dark bg-transparent border" herf="#items-8">Travel and Expence</a>
                                <a className="nav-link mb-3 text-dark bg-transparent border" herf="#items-9">Productivity Status</a>
                                <a className="nav-link mb-3 text-dark bg-transparent border" herf="#items-10">Project and Task Management</a>
                            </nav>
                        </div>

                    </div>
                    <div className="col-lg-6">

                        <div className="position-relative"
                          data-bs-spy="scroll" 
                          data-bs-target="#navbar-example3" 
                          data-bs-offset="72" 
                          data-bs-root-margin="0px 0px -40%" 
                          data-bs-smooth-scroll="true" tabIndex="0">
                            
                            <h4 id="item-1" className="mt-4 fw-medium fs-2">Employee Information Management</h4>
                            <p className="fs-18 text-secondary">
                                Securely organize and access employee information within a single, centralized platform.
                            </p>
                            <div className="pro-hover bg-primary-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg1} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                            <h4 id="item-2" className="mt-4 fw-medium fs-2">Payroll and Tax Compliance</h4>
                            <p className="fs-18 text-secondary">
                                Streamline payroll processing and ensure effortless tax compliance.
                            </p>
                            <div className="pro-hover bg-success-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg2} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                            <h4 id="item-3" className="mt-4 fw-medium fs-2">Attendance Management</h4>
                            <p className="fs-18 text-secondary">
                                Securely organize and access employee information within a single, centralized platform.
                            </p>
                            <div className="pro-hover bg-danger-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg3} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                            <h4 id="item-4" className="mt-4 fw-medium fs-2">Recruitment and Onboarding</h4>
                            <p className="fs-18 text-secondary">
                                Simplify hiring and onboarding with automated recruitment workflows.
                            </p>
                            <div className="pro-hover bg-warning-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg4} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                            <h4 id="item-5" className="mt-4 fw-medium fs-2">Leave Management</h4>
                            <p className="fs-18 text-secondary">
                                Boost productivity with goal tracking and real-time performance feedback.
                            </p>
                            <div className="pro-hover bg-info-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg5} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                            <h4 id="item-6" className="mt-4 fw-medium fs-2">Compensation Management</h4>
                            <p className="fs-18 text-secondary">
                                Empower employee growth with personalized training and skill development.
                            </p>
                            <div className="pro-hover bg-primary-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg6} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                            <h4 id="item-7" className="mt-4 fw-medium fs-2">Ticket Status</h4>
                            <p className="fs-18 text-secondary">
                                Make data-driven decisions with real-time HR analytics and custom reports.
                            </p>
                            <div className="pro-hover bg-success-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg7} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                            <h4 id="item-8" className="mt-4 fw-medium fs-2">Travel and Expence</h4>
                            <p className="fs-18 text-secondary">
                                Ensure adherence to labor laws and regulations with automated compliance tools.
                            </p>
                            <div className="pro-hover bg-danger-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg8} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                            <h4 id="item-9" className="mt-4 fw-medium fs-2">Productivity Status</h4>
                            <p className="fs-18 text-secondary">
                                Access and manage HR tasks on the go with our mobile-friendly platform.
                            </p>
                            <div className="pro-hover bg-warning-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg9} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                            <h4 id="item-10" className="mt-4 fw-medium fs-2">Project and Task Management</h4>
                            <p className="fs-18 text-secondary">
                                Advaced integration capabilites enable seamless connectivty with existing systems to streamline oerpations and boost efficiency.
                            </p>
                            <div className="pro-hover bg-info-subtle rounded-4 h-100 position-relative overflow-hidden">
                                <img src={hrmsFeaBg10} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
        {/* // Key Features Section END // */}

        {/* Benefits Section */}
        <section className="py-5 mt-3 px-xxl-5 benifits-section">
            <div className="container-lg px-xxl-5">
                {/* Head section */}
                <div className="mb-4 text-center mx-auto privacy-head" data-aos="fade-down">
                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                        <HiCube />
                        <span className="ps-2">Benifits</span>
                    </span>
                    <h2 className="mt-3 mb-0 fs-1 fw-semibold">Why Choose Our HRMS?</h2>
                    <p className="my-4">
                        Simplify HR operations with automation, boost productivity, and enhance 
                        employee engagement—all on a scalable, user-friendly platform.
                    </p>
                </div>
                {/* // Head section // */}

                {/* Tab section */}
                <div className="d-lg-flex flex-column align-items-center pt-2">

                    <div id="pills-tab" role="tablist" 
                     className="nav nav-pills nav-pills-gray justify-content-center mb-3">
                        <button className="nav-link rounded-5 me-3 active" id="pills-1-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" 
                        aria-controls="pills-1" aria-selected="true" 
                        onClick={() => handleTabChange('pills-1')}>
                            Automation
                        </button>
                        <button className="nav-link rounded-5 me-3" id="pills-2-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" 
                        aria-controls="pills-2" aria-selected="false" 
                        onClick={() => handleTabChange('pills-2')}>
                            Ensure compliance 
                        </button>
                        <button className="nav-link rounded-5 me-3" id="pills-3-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" 
                        aria-controls="pills-3" aria-selected="false" 
                        onClick={() => handleTabChange('pills-3')}>
                            Productivity
                        </button>
                        <button className="nav-link rounded-5 me-3" id="pills-4-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" 
                        aria-controls="pills-4" aria-selected="false" 
                        onClick={() => handleTabChange('pills-4')}>
                            Employee Engagement
                        </button>
                        <button className="nav-link rounded-5 me-3" id="pills-5-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-5" type="button" role="tab" 
                        aria-controls="pills-5" aria-selected="false" 
                        onClick={() => handleTabChange('pills-5')}>
                            Centralize HR Processes
                        </button>
                    </div>

                    <div className='tab-content mt-4' id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-1" role="tabpanel" 
                         aria-labelledby="pills-1-tab" tabIndex="0" data-aos="fade-up">
                            <div className="row">
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-1' ? 'animate__fadeInRight' : ''}`}>
                                    <div className="pro-hover bg-success-subtle border rounded-4 h-100 position-relative overflow-hidden">
                                        <img src={hrmsFeaBg2} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Automated Payroll Processing</div>
                                            <p className="card-text">
                                                Eliminate manual calculations with precise and timely payroll 
                                                generation, including tax deductions and compliance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-1' ? 'animate__fadeInLeft' : ''}`}>
                                    <div className="pro-hover bg-danger-subtle border rounded-4 h-100 position-relative overflow-hidden" 
                                     data-aos="fade-left">
                                        <img src={hrmsFeaBg3} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Attendance and Leave Automation</div>
                                            <p className="card-text">
                                                Seamlessly track employee attendance, leaves, and shifts with 
                                                real-time updates and automated approvals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-2" role="tabpanel" 
                         aria-labelledby="pills-2-tab" tabIndex="0" data-aos="fade-down">
                            <div className="row">
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-2' ? 'animate__fadeInRight' : ''}`}>
                                    <div className="pro-hover bg-warning-subtle border rounded-4 h-100 position-relative overflow-hidden">
                                        <img src={hrmsFeaBg2} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Ensure Compliance</div>
                                            <p className="card-text">
                                                Effortlessly manage compliance with real-time updates on labor laws, 
                                                tax regulations, and industry standards.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-2' ? 'animate__fadeInLeft' : ''}`}>
                                    <div className="pro-hover bg-info-subtle border rounded-4 h-100 position-relative overflow-hidden" 
                                     data-aos="fade-left">
                                        <img src={hrmsFeaBg3} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Ensure Compliance</div>
                                            <p className="card-text">
                                                Effortlessly manage compliance with real-time updates on labor laws, 
                                                tax regulations, and industry standards.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-3" role="tabpanel" 
                         aria-labelledby="pills-3-tab" tabIndex="0" data-aos="fade-down">
                            <div className="row">
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-3' ? 'animate__fadeInRight' : ''}`}>
                                    <div className="pro-hover bg-primary-subtle border rounded-4 h-100 position-relative overflow-hidden">
                                        <img src={hrmsFeaBg5} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Productivity</div>
                                            <p className="card-text">
                                                Boost productivity with continuous feedback and effective performance tracking.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-3' ? 'animate__fadeInLeft' : ''}`}>
                                    <div className="pro-hover bg-success-subtle border rounded-4 h-100 position-relative overflow-hidden" 
                                     data-aos="fade-left">
                                        <img src={hrmsFeaBg6} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Productivity</div>
                                            <p className="card-text">
                                                Boost productivity with continuous feedback and effective performance tracking.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-4" role="tabpanel" 
                         aria-labelledby="pills-4-tab" tabIndex="0" data-aos="fade-down">
                            <div className="row">
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-4' ? 'animate__fadeInRight' : ''}`}>
                                    <div className="pro-hover bg-danger-subtle border rounded-4 h-100 position-relative overflow-hidden">
                                        <img src={hrmsFeaBg7} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Employee Engagement</div>
                                            <p className="card-text">
                                                Foster a positive work environment with features that promote 
                                                employee feedback and development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-4' ? 'animate__fadeInLeft' : ''}`}>
                                    <div className="pro-hover bg-warning-subtle border rounded-4 h-100 position-relative overflow-hidden" 
                                     data-aos="fade-left">
                                        <img src={hrmsFeaBg8} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Employee Engagement</div>
                                            <p className="card-text">
                                                Foster a positive work environment with features that promote 
                                                employee feedback and development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-5" role="tabpanel" 
                         aria-labelledby="pills-5-tab" tabIndex="0" data-aos="fade-down">
                            <div className="row">
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-5' ? 'animate__fadeInRight' : ''}`}>
                                    <div className="pro-hover bg-info-subtle border rounded-4 h-100 position-relative overflow-hidden">
                                        <img src={hrmsFeaBg9} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Centralize HR Processes</div>
                                            <p className="card-text">
                                                Unify all HR functions in one platform, simplifying management 
                                                and improving data accessibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-5' ? 'animate__fadeInLeft' : ''}`}>
                                    <div className="pro-hover bg-primary-subtle border rounded-4 h-100 position-relative overflow-hidden" 
                                     data-aos="fade-left">
                                        <img src={hrmsFeaBg10} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Centralize HR Processes</div>
                                            <p className="card-text">
                                                Unify all HR functions in one platform, simplifying management 
                                                and improving data accessibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* // Tab Section // */}
            </div>
        </section>
        {/* // Benefits Section END // */}

        {/* Demo Video Section */}
        <section className="py-5 mt-3 px-xxl-5 video-section">
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