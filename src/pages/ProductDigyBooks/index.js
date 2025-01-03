import React, { useState, useEffect, useRef } from "react";
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
import { ReactComponent as DigyBooksLogo} from '../../assets/images/product-logo/digy-books-logo-final.svg';
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
import hrmsBenefitBg1 from "../../assets/images/products/hrms/benefits/1-automated-payroll-processing.jpg";
import hrmsBenefitBg2 from "../../assets/images/products/hrms/benefits/2-attendance-and-leave-automation.jpg";
import hrmsBenefitBg3 from "../../assets/images/products/hrms/benefits/3-self-service-portals.jpg";
import hrmsBenefitBg4 from "../../assets/images/products/hrms/benefits/4-performance-tracking.jpg";
import hrmsBenefitBg5 from "../../assets/images/products/hrms/benefits/5-unified-dashboard.jpg";
import hrmsBenefitBg6 from "../../assets/images/products/hrms/benefits/6-integrated-modules.jpg";
import hrmsBenefitBg7 from "../../assets/images/products/hrms/benefits/7-customizable-workflows.jpg";
import hrmsBenefitBg8 from "../../assets/images/products/hrms/benefits/8-flexible-user-plans.jpg";
import videoSecBg from '../../assets/images/home/video-section-bg.jpg'
import ClientsLogoSlider from "../../Components/ClientsLogoSlider";
import DigyBooksTestimonial from "../../Components/DigyBooksTestimonial";
import DigyBooksFaqAccordion from "../../Components/DigyBooksFaq";

const ProductDigyBooks = () => {

    const [activeSection, setActiveSection] = useState(null);
    const sectionRefs = {
        item1: useRef(null),
        item2: useRef(null),
        item3: useRef(null),
        item4: useRef(null),
        item5: useRef(null),
        item6: useRef(null),
        item7: useRef(null),
        item8: useRef(null),
        item9: useRef(null),
        item10: useRef(null),
    };

    useEffect(() => {
        // Create the intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Update active section
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of section is visible
    
        // Observe each section if the reference exists
        Object.keys(sectionRefs).forEach((key) => {
            const currentRef = sectionRefs[key].current;
            if (currentRef) {
                observer.observe(currentRef);
            }
        });
    
        return () => {
            // Cleanup observer on unmount
            Object.keys(sectionRefs).forEach((key) => {
                const currentRef = sectionRefs[key].current;
                if (currentRef) {
                    observer.unobserve(currentRef); // Unobserve if valid
                }
            });
        };
    }, []);

    // Scroll to a specific section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop + (window.innerHeight + 150), // Adjust for offset
                behavior: "smooth",
            });
        }
    };

    const navigate = useNavigate();

    const [BtnActiveState, setBtnActiveState] = useState("false");

    const [modalFullscreen, setModalFullscreen] = useState(true);
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    // Init AOS Animation
    useEffect(() => {
        // AOS.init({
        // });
    
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
    
    // State to manage the toggle between monthly and yearly
    const [isYearly, setIsYearly] = useState(false); // false means monthly, true means yearly
    
    // Price for each plan in monthly and yearly format
    const pricing = {
        basic: { monthly: 0, yearly: 0 }, // Basic is free for both
        plus: { monthly: 10, yearly: 100 }, // For example, $10/month or $100/year
        premium: { monthly: 20, yearly: 200 }, // For example, $20/month or $200/year
    };
    
    // Toggle between monthly and yearly pricing
    const togglePricing = (event) => {
        setIsYearly(event.target.value === "yearly");
    };

    return ( <>
    <div className="product-details hrms">
        {/* Hero Banner */}
        <section className="hero-banner d-flex align-items-stretch pb-4 pb-lg-0">
            <div className="container-fluid h-100 px-lg-0">
                <div className="row align-items-center gx-lg-0 h-100">
                    <div className="col-lg-6 offset-lg-1" data-aos="fade-left">
                        <DigyBooksLogo width={140} height={56} className="crm-logo" />
                        <h1 className="fw-semibold display-5 banner-title mt-4">
                            “Effortless Accounting for 
                            <br /> <span className="ps-4">Smarter Business</span> 
                            <br /> <span className="ps-4">Management.”</span>
                        </h1>
                        <p className="my-3 banner-sub-title">
                            Digybooks streamlines invoicing, billing, sales, and GST compliance, simplifying 
                            accounting for growing businesses, Gain real-time insights and manage 
                            your finances effortlessly.
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
                            <h2 className="mt-4 fw-semibold">Streamline Your Accounting <br />These Powerful Tools</h2>

                            <nav id="navbar-example3" className="nav nav-pills flex-column mt-3 overflow-y-auto" >
                                <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item1' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item1')}>
                                    Invoicing & Billing
                                </button>
                                <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item2' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item2')}>
                                    GST Compliance
                                </button>
                                <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item3' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item3')}>
                                    Purchase and Sales Management
                                </button>
                                <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item4' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item4')}>
                                    Receivables & Payables
                                </button>
                                <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item5' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item5')}>
                                    Multi-currency Support
                                </button>
                                {/* <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item6' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item6')}>
                                    Compensation Management
                                </button>
                                <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item7' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item7')}>
                                    Ticket Status
                                </button>
                                <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item8' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item8')}>
                                    Travel and Expence
                                </button>
                                <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item9' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item9')}>
                                    Productivity Status
                                </button>
                                <button className={`nav-link mb-3 bg-transparent border text-start ${activeSection === 'item10' ? 'active shadow-sm text-primary' : 'text-dark'}`}
                                 onClick={() => scrollToSection('item10')}>
                                    Project and Task Management
                                </button> */}
                            </nav>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="position-relative">
                          {/* data-bs-spy="scroll" 
                          data-bs-target="#navbar-example3" 
                          data-bs-offset="72" 
                          data-bs-root-margin="0px 0px -40%" 
                          data-bs-smooth-scroll="true" tabIndex="0" */}
                            
                            <div ref={sectionRefs.item1} id="item1" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">Invoicing & Billing</h4>
                                <p className="fs-18 text-secondary">
                                    Create and send professional invoices and manage billing with ease to keep track of payments.
                                </p>
                                <div className="pro-hover bg-primary-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg1} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div>
                            <div ref={sectionRefs.item2} id="item2" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">GST Compliance</h4>
                                <p className="fs-18 text-secondary">
                                    Automate GST calculations and filing for effortless tax compliance.
                                </p>
                                <div className="pro-hover bg-success-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg2} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div>
                            <div ref={sectionRefs.item3} id="item3" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">Purchase and Sales Management</h4>
                                <p className="fs-18 text-secondary">
                                    Monitor and manage purchases and sales with precision for accurate financial records.
                                </p>
                                <div className="pro-hover bg-danger-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg3} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div>
                            <div ref={sectionRefs.item4} id="item4" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">Receivables & Payables</h4>
                                <p className="fs-18 text-secondary">
                                    Easily manage and track outstanding payments (receivables) and liabilities (payables) 
                                    for better cash flow control.
                                </p>
                                <div className="pro-hover bg-warning-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg4} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div>
                            <div ref={sectionRefs.item5} id="item5" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">Multi-currency Support</h4>
                                <p className="fs-18 text-secondary">
                                    Handle transactions in multiple currencies for businesses with international dealings.
                                </p>
                                <div className="pro-hover bg-info-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg5} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div>
                            {/* <div ref={sectionRefs.item6} id="item6" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">Compensation Management</h4>
                                <p className="fs-18 text-secondary">
                                    Empower employee growth with personalized training and skill development.
                                </p>
                                <div className="pro-hover bg-primary-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg6} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div>
                            <div ref={sectionRefs.item7} id="item7" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">Ticket Status</h4>
                                <p className="fs-18 text-secondary">
                                    Make data-driven decisions with real-time HR analytics and custom reports.
                                </p>
                                <div className="pro-hover bg-success-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg7} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div>
                            <div ref={sectionRefs.item8} id="item8" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">Travel and Expence</h4>
                                <p className="fs-18 text-secondary">
                                    Ensure adherence to labor laws and regulations with automated compliance tools.
                                </p>
                                <div className="pro-hover bg-danger-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg8} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div>
                            <div ref={sectionRefs.item9} id="item9" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">Productivity Status</h4>
                                <p className="fs-18 text-secondary">
                                    Access and manage HR tasks on the go with our mobile-friendly platform.
                                </p>
                                <div className="pro-hover bg-warning-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg9} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div>
                            <div ref={sectionRefs.item10} id="item10" className="pt-xxl-5 key-fea-item">
                                <h4 className="mt-4 mt-xxl-5 fw-medium fs-2">Project and Task Management</h4>
                                <p className="fs-18 text-secondary">
                                    Advaced integration capabilites enable seamless connectivty with existing systems to streamline oerpations and boost efficiency.
                                </p>
                                <div className="pro-hover bg-info-subtle rounded-4 position-relative overflow-hidden">
                                    <img src={hrmsFeaBg10} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                </div>
                            </div> */}

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
                    <h2 className="mt-3 mb-0 fw-semibold">Why Choose Our Digybooks?</h2>
                    <p className="fs-6 my-4">
                        Digybooks centralizes your finances, delivering accurate records and seamless integration. 
                        With real-time insights, simplified accounting, and streamlined processes, it helps you make 
                        smarter financial decisions and boost operational efficiency.
                    </p>
                </div>
                {/* // Head section // */}

                {/* Tab section */}
                <div className="d-lg-flex flex-column align-items-center pt-2">

                    <div id="pills-tab" role="tablist" 
                     className="nav nav-pills nav-pills-gray justify-content-center gap-3 gap-md-0 mb-3">
                        <button className="nav-link rounded-5 me-3 active" id="pills-1-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" 
                        aria-controls="pills-1" aria-selected="true" 
                        onClick={() => handleTabChange('pills-1')}>
                            Simplify Accounting
                        </button>
                        <button className="nav-link rounded-5 me-3" id="pills-2-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" 
                        aria-controls="pills-2" aria-selected="false" 
                        onClick={() => handleTabChange('pills-2')}>
                            Ensure GST Compliance
                        </button>
                        <button className="nav-link rounded-5 me-3" id="pills-3-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" 
                        aria-controls="pills-3" aria-selected="false" 
                        onClick={() => handleTabChange('pills-3')}>
                            Real-time Financial Control
                        </button>
                        <button className="nav-link rounded-5 me-3" id="pills-4-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" 
                        aria-controls="pills-4" aria-selected="false" 
                        onClick={() => handleTabChange('pills-4')}>
                            Scalability for Growing Businesses
                        </button>
                        {/* <button className="nav-link rounded-5 me-3" id="pills-5-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-5" type="button" role="tab" 
                        aria-controls="pills-5" aria-selected="false" 
                        onClick={() => handleTabChange('pills-5')}>
                            Centralize HR Processes
                        </button> */}
                    </div>

                    <div className='tab-content mt-4' id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-1" role="tabpanel" 
                         aria-labelledby="pills-1-tab" tabIndex="0" data-aos="fade-up">
                            <div className="row">
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-1' ? 'animate__fadeInRight' : ''}`}>
                                    <div className="pro-hover bg-success-subtle border rounded-4 h-100 position-relative overflow-hidden">
                                        <img src={hrmsBenefitBg1} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Simplify Accounting</div>
                                            <p className="card-text">
                                                Easily manage your finances with automated features that save time and reduce errors.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-1' ? 'animate__fadeInLeft' : ''}`}>
                                    <div className="pro-hover bg-danger-subtle border rounded-4 h-100 position-relative overflow-hidden" 
                                     data-aos="fade-left">
                                        <img src={hrmsBenefitBg2} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Ensure GST Compliance</div>
                                            <p className="card-text">
                                                Stay up to date with GST laws and streamline tax filing with automatic calculations.
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
                                        <img src={hrmsBenefitBg3} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Ensure GST Compliance</div>
                                            <p className="card-text">
                                                Stay up to date with GST laws and streamline tax filing with automatic calculations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-2' ? 'animate__fadeInLeft' : ''}`}>
                                    <div className="pro-hover bg-info-subtle border rounded-4 h-100 position-relative overflow-hidden" 
                                     data-aos="fade-left">
                                        <img src={hrmsBenefitBg4} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Real-time Financial Control</div>
                                            <p className="card-text">
                                                Access up-to-date financial data, helping you make better decisions with clear insights.
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
                                        <img src={hrmsBenefitBg5} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Real-time Financial Control</div>
                                            <p className="card-text">
                                                Access up-to-date financial data, helping you make better decisions with clear insights.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-3' ? 'animate__fadeInLeft' : ''}`}>
                                    <div className="pro-hover bg-success-subtle border rounded-4 h-100 position-relative overflow-hidden" 
                                     data-aos="fade-left">
                                        <img src={hrmsBenefitBg6} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Efficient Receivables and Payables Management</div>
                                            <p className="card-text">
                                                Track outstanding payments and manage liabilities seamlessly, ensuring smooth cash flow.
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
                                        <img src={hrmsBenefitBg7} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Scalability for Growing Businesses</div>
                                            <p className="card-text">
                                                Adaptable to your evolving needs, supporting both small and growing businesses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-4' ? 'animate__fadeInLeft' : ''}`}>
                                    <div className="pro-hover bg-warning-subtle border rounded-4 h-100 position-relative overflow-hidden" 
                                     data-aos="fade-left">
                                        <img src={hrmsBenefitBg8} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
                                        <div className="card card-body rounded-top-0 rounded-bottom-4 border-0 position-absolute bottom-0 start-0 end-0">
                                            <div className="card-title h4">Efficient Receivables and Payables Management</div>
                                            <p className="card-text">
                                                Track outstanding payments and manage liabilities seamlessly, ensuring smooth cash flow.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="tab-pane fade" id="pills-5" role="tabpanel" 
                         aria-labelledby="pills-5-tab" tabIndex="0" data-aos="fade-down">
                            <div className="row">
                                <div className={`col-md-6 animate__animated ${activeTab === 'pills-5' ? 'animate__fadeInRight' : ''}`}>
                                    <div className="pro-hover bg-info-subtle border rounded-4 h-100 position-relative overflow-hidden">
                                        <img src={hrmsFeaBg1} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
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
                                        <img src={hrmsFeaBg1} alt="digy-hrms-bg" className="hover-img img-fluid rounded-4 shadow-sm position-relative" />
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
                        </div> */}
                    </div>

                </div>
                {/* // Tab Section // */}
            </div>
        </section>
        {/* // Benefits Section END // */}

        {/* Demo Video Section */}
        {/* <section className="py-5 mt-3 px-xxl-5 video-section">
            <div className="container-lg px-xxl-5">
                
                <div className="mb-4 text-center mx-auto privacy-head" data-aos="fade-down">
                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                        <HiCube />
                        <span className="ps-2">Demo</span>
                    </span>
                    <h2 className="mt-3 mb-0 fw-semibold">See How It Works?</h2>
                    <p className="fs-6 my-4">
                        See how effortlessly you can manage your finances, track transactions, and ensure 
                        compliance all in one place.
                    </p>
                </div>

                <div className="ratio ratio-16x9" data-aos="fade-down">
                    <div className="text-center text-white video-card" role="button" onClick={handleShow}>
                        <img className="w-100 h-100 rounded-4" src={videoSecBg} alt="video section bg" />
                        <span className="play-icon position-absolute top-50 start-50 translate-middle"><FaPlayCircle size={64} /></span>
                    </div>
                </div>
            </div>
        </section> */}
        {/* // Demo Video Section END // */}

        {/* Testimonials Section */}
        <section className="py-5 my-3 px-xxl-5 testimonials">
            <div className="container-lg px-xxl-5">

                <div className="mb-4" data-aos="fade-up">
                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                        <HiCube />
                        <span className="ps-2">Testimonials</span>
                    </span>
                    <h2 className="mt-3 mb-0 fw-semibold">
                        <div>Customer's about <br/><span className="text-primary">Digybooks</span></div>
                    </h2>
                </div>

                <DigyBooksTestimonial />

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

        {/* Pricing plans section */}
        <section className="py-5 my-3 px-xxl-5 bg-white pricing-plans">
            <div className="container-lg px-xxl-5">
                {/* Head section */}
                <div className="mb-4 col-xl-8" data-aos="fade-up">
                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                        <HiCube />
                        <span className="ps-2">Pricing Plans</span>
                    </span>
                    <h2 className="mt-3 mb-0 fw-semibold">Affordable Plans for Every Business</h2>
                    <p className="fs-6 my-4">
                        Payble’s plans offer you everything you need to manage your finances effortlessly, 
                        with options tailored to your unique needs.
                    </p>
                </div>
                {/* // Head section // */}

                <div className="pricing-switch text-center mb-4">
                    <div className="fieldset rounded-pill bg-light border border-secondary-subtle">
                        <input type="radio" name="price-plan" value="monthly" id="monthly" 
                        checked={!isYearly} onChange={togglePricing} />
                        <label htmlFor="monthly">Monthly</label>
                        <input type="radio" name="price-plan" value="yearly" id="yearly" 
                        checked={isYearly} onChange={togglePricing} />
                        <label htmlFor="yearly">Yearly</label>
                        <span className="switch rounded-pill bg-dark position-absolute"></span>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-3 mb-3 price-table">
                    <div className="col mb-3">
                        <div className="card shadow-sm border-0 p-2 text-bg-light h-100 basic">
                            <div className="card-header bg-white border-bottom-0 rounded-bottom-2 p-3">
                                <div><span className="badge text-bg-primary px-3 py-2">BASIC - FREE</span></div>
                                <div className="price-switch mt-3 mt-lg-4 d-flex align-items-center justify-content-between">
                                    <div className="price-amount">
                                        <span className={`price animate__animated ${isYearly ? "animate__fadeIn" : "animate__pulse"}`}>${pricing.basic[isYearly ? "yearly" : "monthly"]}</span>
                                        <span className={`timeframe animate__animated ${isYearly ? "animate__fadeIn" : "animate__pulse"}`}>/{isYearly ? "year" : "month"}</span>
                                    </div>
                                    <div className={`fs-5 align-self-end timeframe-txt animate__animated ${isYearly ? "animate__fadeIn" : "animate__pulse"}`}>- {isYearly ? "paid yearly" : "paid monthly"}</div>
                                </div>
                                <p className="my-3 my-lg-4">Ideal for Beginners getting started with <br/> budgeting.</p>
                                <Button variant="dark" size="lg" className="rounded-3 w-100">Start Free Trial</Button>
                            </div>
                            <div className="card-body">
                                <ul className="ps-3 mb-0 list">
                                    <li>Expense Tracking</li>
                                    <li>Single Account Sync</li>
                                    <li>Basic Budgets</li>
                                    <li>1 Savings Goal</li>
                                    <li>Payment Reminders</li>
                                    <li>Email Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card shadow-sm border-0 p-2 text-bg-light h-100 plus">
                            <div className="card-header bg-white border-bottom-0 rounded-bottom-2 p-3">
                                <div><span className="badge text-bg-success px-3 py-2">PLUS - POPULAR</span></div>
                                <div className="price-switch mt-3 mt-lg-4 d-flex align-items-center justify-content-between">
                                    <div className="price-amount">
                                        <span className={`price animate__animated ${isYearly ? "animate__fadeIn" : "animate__pulse"}`}>${pricing.plus[isYearly ? "yearly" : "monthly"]}</span>
                                        <span className={`timeframe animate__animated ${isYearly ? "animate__fadeIn" : "animate__pulse"}`}>/{isYearly ? "year" : "month"}</span>
                                    </div>
                                    <div className={`fs-5 align-self-end timeframe-txt animate__animated ${isYearly ? "animate__fadeIn" : "animate__pulse"}`}>- {isYearly ? "paid yearly" : "paid monthly"}</div>
                                </div>
                                <p className="my-3 my-lg-4">For Users who want deeper insights <br/>into their finances.</p>
                                <Button variant="dark" size="lg" className="rounded-3 w-100">Get this Plan</Button>
                            </div>
                            <div className="card-body">
                                <ul className="ps-3 mb-0 list">
                                    <li>Unlimited Account Sync</li>
                                    <li>Advanced Budgets</li>
                                    <li>5 Savings Goals</li>
                                    <li>AI Insights</li>
                                    <li>Real-Time Alerts</li>
                                    <li>Monthly Reports</li>
                                    <li>Priority Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card shadow-sm border-0 p-2 text-bg-light h-100 premium">
                            <div className="card-header bg-white border-bottom-0 rounded-bottom-2 p-3">
                                <div><span className="badge text-bg-warning px-3 py-2">PREMIUM</span></div>
                                <div className="price-switch mt-3 mt-lg-4 d-flex align-items-center justify-content-between">
                                    <div className="price-amount">
                                        <span className={`price animate__animated ${isYearly ? "animate__fadeIn" : "animate__pulse"}`}>${pricing.premium[isYearly ? "yearly" : "monthly"]}</span>
                                        <span className={`timeframe animate__animated ${isYearly ? "animate__fadeIn" : "animate__pulse"}`}>/{isYearly ? "year" : "month"}</span>
                                    </div>
                                    <div className={`fs-5 align-self-end timeframe-txt animate__animated ${isYearly ? "animate__fadeIn" : "animate__pulse"}`}>- {isYearly ? "paid yearly" : "paid monthly"}</div>
                                </div>
                                <p className="my-3 my-lg-4">Ideal for Advanced users or business <br/> owners.</p>
                                <Button variant="dark" size="lg" className="rounded-3 w-100">Get this Plan</Button>
                            </div>
                            <div className="card-body">
                                <ul className="ps-3 mb-0 list">
                                    <li>All Plus Features</li>
                                    <li>Unlimited Savings Goals</li>
                                    <li>Financial Forecasting</li>
                                    <li>Custom Reports</li>
                                    <li>Expense Breakdown</li>
                                    <li>Real-Time Insights</li>
                                    <li>24/7 Support</li>
                                    <li>Data Export</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/* // Pricing plans section END // */}

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
                        <DigyBooksFaqAccordion />
                    </div>
                </div>
            </div>
        </section>
        {/* // FAQ Section END //*/}

    </div>

    {/* <Modal show={modalShow} fullscreen={modalFullscreen} onHide={() => setModalShow(false)}>
        <Modal.Body className="d-flex align-items-center">
            <button type="button" className="btn-close p-2 bg-white position-absolute end-0 top-0" aria-label="Close" onClick={handleClose}></button>
            <div className="ratio ratio-21x9">
                <div className="text-center">
                    <img className="w-100 h-100 rounded-4" src={videoSecBg} alt="video section bg" />
                </div>
            </div>
        </Modal.Body>
    </Modal> */}
    </> );
}
 
export default ProductDigyBooks;