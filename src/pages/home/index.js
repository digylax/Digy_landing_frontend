import React, { useState } from "react";
import '../../assets/css/home.css';
import { Button, Modal } from "react-bootstrap";
import { IoMdArrowRoundDown, IoMdArrowRoundForward, IoMdBook } from "react-icons/io";
import { FaAngleRight, FaPlayCircle } from "react-icons/fa";
import { HiCube, HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineInsertChart } from "react-icons/md";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { FiLayout } from "react-icons/fi";
import { TbVectorTriangleOff } from "react-icons/tb";
import { CgAbstract } from "react-icons/cg";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import mdmLogo from '../../assets/images/product-logo/mdm-logo.svg';
import digyBooksLogo from '../../assets/images/product-logo/digy-books-logo.svg';
import serWebApp1 from "../../assets/images/services/service-web-app-1.png";
import serWebApp2 from "../../assets/images/services/service-web-app-2.png";
import serUi1 from "../../assets/images/services/service-ui-1.png";
import serUi2 from "../../assets/images/services/service-ui-2.png";
import serSa1 from "../../assets/images/services/service-sa-1.png";
import serSa2 from "../../assets/images/services/service-sa-2.png";
import serMa1 from "../../assets/images/services/service-ma-1.png";
import serMa2 from "../../assets/images/services/service-ma-2.png";
import crmProBg from "../../assets/images/crm-p-bg.png";
import mdmProBg from "../../assets/images/mdm-p-bg.png";
import videoSecBg from '../../assets/images/home/video-section-bg.jpg'
import Testimonial from "../../Components/Testimonial";
import BlogList from "../../Components/BlogList";
import FaqAccordion from "../../Components/FaqAccordion";
import ClientsLogoSlider from "../../Components/ClientsLogoSlider";

const Home = () => {

    const [BtnActiveState, setBtnActiveState] = useState("false");

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="home-page">

                {/* Hero Banner */}
                <section className="hero-banner d-flex align-items-stretch pb-4 pb-lg-0">
                    <div className="container-lg h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-lg-7">
                                <h1 className="fw-semibold display-5 banner-title">“Transform Your Business with Smarter SaaS Solutions.”</h1>
                                <p className="my-3 banner-sub-title">
                                    A unique and powerful software suite to transform the way you work.
                                    Designed for businesses of all sizes, built by a company that values your privacy.
                                </p>
                                <p className="my-3 pt-3">
                                    <Button variant="primary-digy" size="lg" className='fs-6 icon-link icon-link-hover'>
                                        Contact Us
                                        <IoMdArrowRoundForward className="bi fs-6 ms-1" />
                                    </Button>
                                    <Button variant="outline-primary" size="lg" className='ms-3 fs-6 icon-link icon-link-hover hover-icon-50deg'>
                                        Book a free demo
                                        <IoMdArrowRoundForward className="bi fs-6 ms-1" />
                                    </Button>
                                </p>
                            </div>
                            <div className="col-lg-5">
                                <div className="card rounded-4">
                                    <div className="card-body">
                                        <div className="list-group list-group-flush">
                                            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                                                <div className="d-flex w-100 align-items-center justify-content-between p-list-item">
                                                    <div className="mt-2">
                                                        <h5 className="d-flex align-items-center mb-1">
                                                            <HiOutlineUserGroup size={24} color="#FF6FCA" />
                                                            <span className="ps-2 fw-semibold">HRMS</span>
                                                        </h5>
                                                        <p className="mb-2 ps-4 ms-2 p-list-cont">
                                                            Streamlines and automates core HR functions such as recruitment,
                                                            payroll, attendance, and performance management.
                                                        </p>
                                                    </div>
                                                    <FaAngleRight size={18} />
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action" aria-current="false">
                                                <div className="d-flex w-100 align-items-center justify-content-between p-list-item">
                                                    <div className="mt-2">
                                                        <h5 className="d-flex align-items-center mb-1">
                                                            <MdOutlineInsertChart size={24} color="#63DC87" />
                                                            <span className="ps-2 fw-semibold">CRM</span>
                                                        </h5>
                                                        <p className="mb-2 ps-4 ms-2 p-list-cont">
                                                            "Unleash the Power of Seamless Customer Engagement!"
                                                        </p>
                                                    </div>
                                                    <FaAngleRight size={18} />
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action" aria-current="false">
                                                <div className="d-flex w-100 align-items-center justify-content-between p-list-item">
                                                    <div className="mt-2">
                                                        <h5 className="d-flex align-items-center mb-1">
                                                            {/* <IoMdBook size={24} color="#86A0FF" /> */}
                                                            {/* <LiaSwatchbookSolid size={24} color="#86A0FF" /> */}
                                                            <img src={digyBooksLogo} alt="digyBooksLogo" width={24} height={24} />
                                                            <span className="ps-2 fw-semibold">Books</span>
                                                        </h5>
                                                        <p className="mb-2 ps-4 ms-2 p-list-cont">
                                                            "Effortless Accounting for Smarter Business Management."
                                                        </p>
                                                    </div>
                                                    <FaAngleRight size={18} />
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action" aria-current="false">
                                                <div className="d-flex w-100 align-items-center justify-content-between p-list-item">
                                                    <div className="mt-2">
                                                        <h5 className="d-flex align-items-center mb-1">
                                                            {/* <LiaSwatchbookSolid size={24} color="#AD7DFF" /> */}
                                                            <img src={mdmLogo} alt="digyMdmLogo" width={24} height={24} />
                                                            <span className="ps-2 fw-semibold">MDM</span>
                                                        </h5>
                                                        <p className="mb-2 ps-4 ms-2 p-list-cont">
                                                            Centralize your data for smarter decisions and seamless operations."
                                                        </p>
                                                    </div>
                                                    <FaAngleRight size={18} />
                                                </div>
                                            </a>
                                            <div className='list-group-item list-group-item-action' aria-current="false">
                                                <Button variant="outline-primary" size="lg" className='mt-2 w-100 justify-content-center fs-6 icon-link icon-link-hover hover-icon-90deg'>
                                                    Explore More Products
                                                    <IoMdArrowRoundForward className="bi fs-6 ms-1" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // Hero Banner END // */}

                {/* Clients brand logo Slider */}
                <section className="py-5 bg-body-tertiary client-logos">
                    <div className="client-section center">
                        <h5 className="text-center fw-semibold pb-4 mb-4">Used by the world's most companies</h5>
                        
                        <ClientsLogoSlider />
                    </div>
                </section>
                {/* // Clients brand logo Slider END // */}

                {/* Services section */}
                <section className="py-5 my-3 px-xxl-5 services">
                    <div className="container-lg px-xxl-5">

                        {/* services Head section */}
                        <div className="row">
                            <div className="col-lg-6 col-xl-5">
                                <div>
                                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                        <HiCube />
                                        <span className="ps-2">Services</span>
                                    </span>
                                    <h2 className="mt-3 mb-0 fw-semibold">"Innovative Services to Fuel Your Business Growth"</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-2 align-self-end mt-3">
                                We offer comprehensive web design and development services, including
                                custom solutions, e-commerce platforms, responsive designs, and
                                maintenance, as well as digital marketing, SEO, and IT consulting services.
                            </div>
                        </div>
                        {/* // services Head section // */}

                        {/* Service Card */}
                        <div className="row mt-5">
                            <div className="col-md-6 col-xl-7">
                                <div className="card rounded-4 h-100 overflow-hidden">

                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="text-primary d-flex align-items-center mb-4">
                                                <FiLayout />
                                                <span className="ps-2 fw-medium">Web Application</span>
                                            </h5>
                                            <small className="fw-medium text-muted">3-6 WEEKS DELIVERY</small>
                                        </div>
                                        <p>Create a seamless website with smooth functionality and engaging interactivity.</p>
                                        <Button variant="outline-secondary" className='icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                            View Plans
                                            <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary-subtle rounded-circle" />
                                        </Button>
                                    </div>

                                    <div className="position-relative start-0 bottom-0 d-none d-sm-block">
                                        <img src={serWebApp1} alt="web-app-1" className="ser-card-img wa-left border" />
                                    </div>
                                    <div className="position-absolute end-0 bottom-0 d-none d-sm-block">
                                        <img src={serWebApp2} alt="web-app-2" className="ser-card-img wa-right" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 col-xl-5 mt-4 mt-md-0">

                                <div className="card rounded-4 overflow-hidden">
                                    <div className="card-body position-relative pb-0">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="text-primary d-flex align-items-center mb-4">
                                                <TbVectorTriangleOff />
                                                <span className="ps-2 fw-midum">UI / UX Design</span>
                                            </h5>
                                            <small className="fw-medium text-muted">1 WEEK DELIVERY</small>
                                        </div>
                                        <p>Bringing your vision to life with intuitive designs that enhance usability and deliver seamless user experiences.</p>
                                        <Button variant="outline-secondary" className='icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                            View Plans
                                            <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary-subtle rounded-circle" />
                                        </Button>

                                        <div className="position-relative mt-4">
                                            <div className="position-absolute end-0 bottom-0 d-none d-sm-block">
                                                <img src={serUi1} alt="UI-UX-1" className="ser-card-img ui-right border" />
                                            </div>
                                            <div className="position-relative start-0 bottom-0 d-none d-sm-block">
                                                <img src={serUi2} alt="UI-UX-2" className="ser-card-img ui-left" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card rounded-4 mt-3 overflow-hidden">

                                    <div className="card-body position-relative pb-0">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="text-primary d-flex align-items-center mb-4">
                                                <CgAbstract />
                                                <span className="ps-2 fw-medium">Software Application</span>
                                            </h5>
                                            <small className="fw-medium text-muted">2-4 WEEKS DELIVERY</small>
                                        </div>
                                        <p>Providing custom software solutions designed to solve specific business challenges and enhance operational efficiency.</p>
                                        <Button variant="outline-secondary" className='icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                            View Plans
                                            <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary-subtle rounded-circle" />
                                        </Button>

                                        <div className="position-relative mt-4">
                                            <div className="position-absolute end-0 bottom-0 d-none d-sm-block">
                                                <img src={serSa1} alt="software-app1" className="ser-card-img sa-right" />
                                            </div>
                                            <div className="position-relative start-0 bottom-0 d-none d-sm-block">
                                                <img src={serSa2} alt="software-app2" className="ser-card-img sa-left" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="card rounded-4 overflow-hidden">

                                    <div className="row g-0 align-items-center pt-4 px-4">
                                        <div className="col-md-6 col-xl-7">
                                            <div className="card-body p-0">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="text-primary d-flex align-items-center mb-4">
                                                        <FiLayout />
                                                        <span className="ps-2 fw-medium">Mobile Application</span>
                                                    </h5>
                                                    <small className="fw-medium text-muted">3-6 WEEKS DELIVERY</small>
                                                </div>
                                                <p>Building powerful, innovative, and flexible mobile apps that fit your unique needs.</p>
                                                <Button variant="outline-secondary" className='icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                                    View Plans
                                                    <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary-subtle rounded-circle" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-2 offset-xl-1 position-relative">
                                            <div className="position-absolute start-50 bottom-0 d-none d-sm-block">
                                                <img src={serMa2} alt="mob-app-2" />
                                            </div>
                                            <div className="position-relative start-0 top-0 d-none d-sm-block">
                                                <img src={serMa1} alt="mob-app-1" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* // Service Card END // */}

                    </div>
                </section>
                {/* Services section END */}

                {/* Stats section */}
                <section className="py-5 my-3 px-xxl-5 bg-primary text-white stats">
                    <div className="container-lg px-xxl-5">
                        <div className="row align-items-center justify-content-md-around">

                            <div className="col-md-6 pe-xl-5">
                                <span className="badge text-bg-primary border border-white rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                    <HiCube />
                                    <span className="ps-2">Stats</span>
                                </span>
                                <h2 className="mt-3 mt-xl-4 fs-1 fw-semibold">Made in India. <br /> Made for the World.</h2>
                                <p className="mt-3 my-xl-4">
                                    At Digylax, we combine the rich heritage of Indian innovation with
                                    global excellence to craft software solutions that transcend borders.
                                    Our products are designed to meet the needs of businesses
                                    worldwide, ensuring scalability, security, and success in every market.
                                </p>
                                <Button variant="primary" className='border-white icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                    Contact Us
                                    <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto bg-info bg-opacity-50 rounded-circle" />
                                </Button>
                            </div>

                            <div className="col-8 col-sm-7 mx-auto col-md-6 ps-xl-5 mt-5 mt-md-0">
                                <div className="row row-cols-2 gy-5 gx-md-3 gy-md-4">
                                    <div className="col border-start border-white d-flex flex-column justify-content-between ps-4">
                                        <div className="display-2 mb-3 fw-semibold">70+</div>
                                        <div className="fs-5">Employees Worldwide</div>
                                    </div>
                                    <div className="col border-start border-white d-flex flex-column justify-content-between ps-4">
                                        <div className="display-2 mb-3 fw-semibold">1+</div>
                                        <div className="fs-5">Years in Business</div>
                                    </div>
                                    <div className="col border-start border-white d-flex flex-column justify-content-between ps-4">
                                        <div className="display-2 mb-3 fw-semibold">8+</div>
                                        <div className="fs-5">Products</div>
                                    </div>
                                    <div className="col border-start border-white d-flex flex-column justify-content-between ps-4">
                                        <div className="display-2 mb-3 fw-semibold">100+</div>
                                        <div className="fs-5">Global Users</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* // Stats section END // */}

                {/* Products Section */}
                <section className="py-5 my-3 px-xxl-5 products">
                    <div className="container-lg px-xxl-5">

                        {/* Products Header */}
                        <div className="row pb-4">
                            <div className="col-lg-6 col-xl-5">
                                <div>
                                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                        <HiCube />
                                        <span className="ps-2">Products</span>
                                    </span>
                                    <h2 className="mt-3 mb-0 fw-semibold">“Innovative Software Solutions for Your Business Needs"</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1 align-self-end mt-3">
                                We offer a suite of software solutions including MDM, CRM, HRMS, and
                                others designed to streamline operations and enhance business efficiency.
                                Our products help businesses manage data, improve customer
                                relationships, and simplify financial processes. Scalable, secure, and
                                tailored to your needs, they drive growth and productivity.
                            </div>
                        </div>
                        {/* // Products Header END // */}

                        {/* Product 1 CRM */}
                        <div className="row py-5">
                            <div className="col-lg-6">
                                <img src={crmProBg} alt="crm-bg" className="bg-success-subtle rounded-4 img-fluid" />
                            </div>
                            <div className="col-lg-6 pe-xxl-5 d-flex flex-column align-items-start justify-content-between">
                                <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                    <FiLayout />
                                    <span className="ps-2">CRM</span>
                                </span>
                                <h2 className="mt-4 fw-midium me-xxl-5">Customer Relationship Management</h2>
                                <p className="my-3 fs-5 text-secondary">
                                    Enhance customer interactions and boost sales with our unified CRM platform.
                                </p>

                                <div className="row row-cols-2 g-3 mb-4">
                                    <div className="col">
                                        <div className="d-flex align-items-center p-2 border rounded-3">
                                            <IoCheckmarkCircle className="text-primary" />
                                            <span className="ps-3">Real-time analytics</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center p-2 border rounded-3">
                                            <IoCheckmarkCircle className="text-primary" />
                                            <span className="ps-3">Import CSV Data</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center p-2 border rounded-3">
                                            <IoCheckmarkCircle className="text-primary" />
                                            <span className="ps-3">Product information management</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center p-2 border rounded-3">
                                            <IoCheckmarkCircle className="text-primary" />
                                            <span className="ps-3">Contract Management</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <Button variant="dark" className='border-white icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                        Read More About This
                                        <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary bg-opacity-75 rounded-circle" />
                                    </Button>
                                </div>

                            </div>
                        </div>
                        {/* // Product 1 CRM END // */}

                        {/* Product 2 MDM */}
                        <div className="row py-5">

                            <div className="col-lg-6 pe-xxl-5 d-flex flex-column align-items-start justify-content-between">
                                <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                    <FiLayout />
                                    <span className="ps-2">MDM</span>
                                </span>
                                <h2 className="mt-4 fw-medium me-xxl-5">Master Data <br />Management</h2>
                                <p className="my-3 fs-5 text-secondary">
                                    Centralize and manage your business data for better decision-making and operational efficiency.
                                </p>

                                <div className="row row-cols-2 g-3 mb-4">
                                    <div className="col">
                                        <div className="d-flex align-items-center p-2 border rounded-3">
                                            <IoCheckmarkCircle className="text-primary" />
                                            <span className="ps-3">Invoicing Software</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center p-2 border rounded-3">
                                            <IoCheckmarkCircle className="text-primary" />
                                            <span className="ps-3">Time Tracking</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center p-2 border rounded-3">
                                            <IoCheckmarkCircle className="text-primary" />
                                            <span className="ps-3">Task Management Tool</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center p-2 border rounded-3">
                                            <IoCheckmarkCircle className="text-primary" />
                                            <span className="ps-3">Database Management Tool</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <Button variant="dark" className='border-white icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                        Read More About This
                                        <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary bg-opacity-75 rounded-circle" />
                                    </Button>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <img src={mdmProBg} alt="crm-bg" className="bg-danger-subtle rounded-4 img-fluid" />
                            </div>

                        </div>
                        {/* // Product 2 MDM END // */}

                        {/* Load More btn */}
                        {/* <div className="text-center">
                            <Button variant="outline-secondary"
                                className={`icon-link icon-link-hover hover-icon-180deg p-2 ps-3 d-inline-flex align-items-center shadow-sm ${BtnActiveState ? '' : 'active'}`}
                                onClick={() => setBtnActiveState(!BtnActiveState)}>
                                <span className="fw-semibold">Load More Products</span>
                                <IoMdArrowRoundDown size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary-subtle rounded-circle" />
                            </Button>
                        </div> */}
                        {/* // Load More btn // */}

                    </div>
                </section>
                {/* // Products Section END // */}

                {/* Testimonials Section */}
                <section className="py-5 my-3 px-xxl-5 testimonials">
                    <div className="container-lg px-xxl-5">

                        <div className="mb-4">
                            <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                <HiCube />
                                <span className="ps-2">Testimonials</span>
                            </span>
                            <h2 className="mt-3 mb-0 fs-1 fw-semibold">
                                <div>Don't Just Take Our Word For It. </div>
                                <span className="text-secondary">Our Satisfied Customers Rave About Their Experiences!</span>
                            </h2>
                        </div>

                        <Testimonial />

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

                {/* Privacy & Video Section */}
                <section className="py-5 mt-3 px-xxl-5 bg-body-tertiary video-section">
                    <div className="container-lg px-xxl-5">
                        {/* Privacy Head section */}
                        <div className="mb-4 text-center mx-auto privacy-head">
                            <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                <HiCube />
                                <span className="ps-2">Privacy</span>
                            </span>
                            <h2 className="mt-3 mb-0 fs-1 fw-semibold">Your privacy is our responsibility</h2>
                            <p className="my-4">
                                We believe that trust is paramount in a relationship. We do not own or sell your data, and we
                                most certainly do not bank on advertising-based business models. The only way we make
                                money is from the software license fees you pay us.
                            </p>
                            <div className="mb-5">
                                <Button variant="dark" className='border-white icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                    Get Started
                                    <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary bg-opacity-75 rounded-circle" />
                                </Button>
                            </div>
                        </div>
                        {/* // Privacy Head section // */}

                        {/* <div className="ratio ratio-16x9">
                    <div className="text-center text-white video-card" role="button" onClick={handleShow}>
                        <img className="w-100 h-100 rounded-4" src={videoSecBg} alt="video section bg" />
                        <span className="play-icon position-absolute top-50 start-50 translate-middle"><FaPlayCircle size={64} /></span>
                    </div>
                </div> */}
                    </div>
                </section>
                {/* // Privacy & Video Section END // */}

                {/* Blog List */}
                <section className="py-5 mb-3 px-xxl-5 bg-white blog-list">
                    <div className="container-lg px-xxl-5">

                        {/* Blog List Header */}
                        <div className="row align-items-center pb-4">
                            <div className="col-lg-6">
                                <div>
                                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                        <HiCube />
                                        <span className="ps-2">Blog</span>
                                    </span>
                                    <h2 className="mt-3 mb-0 fw-semibold">Short heading goes here</h2>
                                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1 mt-3 text-lg-end">
                                <Button variant="outline-secondary" className='icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                    View All
                                    <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary-subtle rounded-circle" />
                                </Button>
                            </div>
                        </div>
                        {/* // Blog List Header END // */}

                        <BlogList />

                    </div>
                </section>
                {/* // Blog List END // */}

                {/* FAQ Section */}
                <section className="py-5 my-3 px-xxl-5 bg-white faq">
                    <div className="container-lg px-xxl-5">
                        <div className="row">

                            <div className="col-md-6 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                        <HiCube />
                                        <span className="ps-2">FAQs</span>
                                    </span>
                                    <h2 className="mt-3 mb-0 fw-semibold">Frequently Asked <br />Questions!</h2>
                                </div>
                                <div className="card px-3 py-4">
                                    <h5 className="card-title fw-semibold">
                                        <div className="text-dark">Can't Find Your Answer Here? </div>
                                        <div className="text-secondary">We Can Help Out!</div>
                                    </h5>
                                    <div className="card-text mt-4">
                                        <Button variant="primary" href="mailto:suppot@digylax.com" className='border-white icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                            Send Us an Email
                                            <CiLocationArrow1 size={16} className="bi ms-1 p-1 w-auto h-auto bg-info bg-opacity-50 rounded-circle" />
                                        </Button>
                                        <Button variant="outline-secondary" className='ms-3 icon-link icon-link-hover hover-icon-90deg p-1 ps-3 d-inline-flex align-items-center'>
                                            Schedule a Call
                                            <BiPhone size={16} className="bi ms-1 p-1 w-auto h-auto bg-secondary-subtle rounded-circle" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <FaqAccordion />
                            </div>
                        </div>
                    </div>
                </section>
                {/* // FAQ Section END //*/}

            </div>

            {/* <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Body className="d-flex align-items-center">
                    <button type="button" className="btn-close p-2 bg-white position-absolute end-0 top-0" aria-label="Close" onClick={handleClose}></button>
                    <div className="ratio ratio-21x9">
                        <div className="text-center">
                            <img className="w-100 h-100 rounded-4" src={videoSecBg} alt="video section bg" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}
        </>
    )
}

export default Home;