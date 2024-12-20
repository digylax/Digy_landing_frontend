import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import AOS from "aos";
import { Button } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import { PiPaperPlaneRight } from "react-icons/pi";
import { HiCube } from "react-icons/hi2";
import { HiCalendar } from "react-icons/hi";
import bannerIcon1 from "../../assets/images/career/career-b-icon-1.png";
import bannerIcon2 from "../../assets/images/career/career-b-icon-2.png";
import fea1 from "../../assets/images/career/career-fea-1.png";
import fea2 from "../../assets/images/career/career-fea-2.png";
import visionImg from "../../assets/images/career/career-vision-bg.png";
import { ReactComponent as VisionIcon1} from '../../assets/images/career/vision-icon-1.svg';
import { ReactComponent as VisionIcon2} from '../../assets/images/career/vision-icon-2.svg';
import { ReactComponent as VisionIcon3} from '../../assets/images/career/vision-icon-3.svg';
import { ReactComponent as VisionIcon4} from '../../assets/images/career/vision-icon-4.svg';

const Careers = () => {
    const navigate = useNavigate();

    // Init AOS Animation
    // useEffect(() => {
    //     AOS.init({
    //     });
    // }, []);

    // Scroll in to view
    const scrollToViewRef = useRef(null);
    const seeOpenPositions = () => {
        scrollToViewRef.current?.scrollIntoView({
            behavior: "smooth", block: "start", inline: "start" 
        });
    };

    return ( 
        <>
        <div className="career-page">

            {/* Banner */}
            <section className="hero-banner d-flex flex-column align-items-stretch justify-content-center pb-4 pb-lg-0 h-lg-auto">

                <div className="container-lg pb-4 h-100 banner">
                    <div className="row align-items-end position-relative">
                        {/* Bg icons */}
                        <div className="position-absolute w-100 h-100 d-none d-xl-block banner-icons">
                            <img src={bannerIcon1} alt="digy-career-icon" className="position-absolute b-icon-1" width={96} height={96} />
                            <img src={bannerIcon2} alt="digy-career-icon" className="position-absolute b-icon-2" width={96} height={96} />
                        </div>
                        {/* // Bg icons // */}
                        <div className="col col-xl-7 mx-auto text-center" data-aos="fade-up">
                            <h1 className="fw-semibold display-5 pb-3 banner-title">Careers</h1>
                            <p className="mt-3 mb-4 h5 text-secondary lead lh-base">
                                Sign up for a free trial today and experience the difference. Our 
                                intuitive interface, powerful features, and dedicated.
                            </p>
                            <p className="my-3 pt-3">
                                <Button variant="primary" size="lg" className='ms-sm-3 mt-3 mt-sm-0 fs-6 icon-link icon-link-hover hover-icon-0deg' 
                                onClick={()=> seeOpenPositions()}>
                                    See Open Positions
                                    <IoMdArrowRoundForward className="bi rotate--45deg fs-6 ms-1" />
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Below banner images Section */}
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-sm-2 g-3">
                        <div className="col text-sm-end">
                            <img src={fea1} alt="digy-career-1" className="img-fluid w-100 object-fit-cover" data-aos="fade-left" />
                        </div>
                        <div className="col">
                            <img src={fea2} alt="digy-career-2" className="img-fluid w-100 object-fit-cover" data-aos="fade-right" />
                        </div>
                    </div>
                </div>
                {/* // Below banner images Section END // */}

            </section>
            {/* // Banner END // */}

            {/* Vision section */}
            <section className="py-5 mt-3 px-xxl-5 bg-primary vision">
                <div className="container bg-white rounded-5 p-4 p-xl-5">
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className="row row-cols-1 row-cols-md-2 g-3">
                                <div className="col col-xl-auto">
                                    <img src={visionImg} alt="digy-career-vision" className="img-fluid object-fit-cover" data-aos="fade-left" />
                                </div>
                                <div className="col flex-md-grow-1 ps-xxl-5 d-flex flex-column align-items-start justify-content-between" data-aos="fade-right">
                                    <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                        <HiCube />
                                        <span className="ps-2">Company Vision</span>
                                    </span>
                                    <h2 className="mt-4 fw-midium me-xxl-5">We believe in simplifying complexities.</h2>
                                    <p className="my-3 fs-18 text-secondary">
                                        Where innovation meets efficiency, and collaboration knows no bounds. We are a 
                                        team of dedicated professionals passionate about transforming the way 
                                        businesses operate through our cutting-edge SaaS solutions.
                                    </p>

                                    <div className="row row-cols-2 g-3 mb-4">
                                        <div className="col">
                                            <div className="d-flex align-items-center p-2">
                                                <span className="p-2 rounded-3 bg-primary"><VisionIcon1 className="text-white" /></span>
                                                <span className="ps-3 fs-5">100% Remote</span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex align-items-center p-2">
                                                <span className="p-2 rounded-3 bg-primary"><VisionIcon2 className="text-white" /></span>
                                                <span className="ps-3 fs-5">Continue education</span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex align-items-center p-2">
                                                <span className="p-2 rounded-3 bg-primary"><VisionIcon3 className="text-white" /></span>
                                                <span className="ps-3 fs-5">Flex Timing</span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex align-items-center p-2">
                                                <span className="p-2 rounded-3 bg-primary"><VisionIcon4 className="text-white" /></span>
                                                <span className="ps-3 fs-5">Meet up meals</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div ref={scrollToViewRef}></div>
            </section>
            {/* // Vision section END // */}

            {/* Join Us Section */}
            <section className="py-5 bg-white join-us" data-aos="fade-down">
                <div className="container-lg px-xxl-5">

                    {/* Head section */}
                    <div className="text-center">
                        <span className="badge text-bg-primary border border-white rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-medium">
                            <span className="ps-2">Open Positions</span>
                        </span>
                        <h2 className="h1 my-4">Join Us From <span className="text-primary">Anywhere</span></h2>
                    </div>
                    {/* // Head section // */}

                    {/* job cards */}
                    <div className="row row-cols-1 row-cols-md-2 g-4 job-cards">
                        <div className="col">
                            <div className="card card-body rounded-4">
                                <div className="mb-4">
                                    <span className="badge text-primary border border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-medium">
                                        <span className="ps-2">Marketing</span>
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <h5 className="card-title fw-semibold">Senior Software Engineer</h5>
                                    <div className="hstack gap-2 text-secondary text-opacity-75">
                                        <div>Full-time</div>
                                        <div className="vr"></div>
                                        <div>Remote (USA timezone)</div>
                                    </div>
                                </div>
                                <div className="hstack gap-2 justify-content-between">
                                    <Button variant="primary" className='border-white icon-link icon-link-hover hover-icon--45deg p-1 ps-3 d-inline-flex align-items-center' 
                                    onClick={()=> navigate('./job-description')}>
                                        Apply Now
                                        <PiPaperPlaneRight size={16} className="bi rotate-45deg- ms-1 p-1 w-auto h-auto bg-info bg-opacity-50 rounded-circle" />
                                    </Button>
                                    <div className="d-flex align-items-center">
                                        <span className="hstack p-1 rounded-3 border border-primary"><HiCalendar className="text-primary" size={20} /></span>
                                        <span className="ps-3 p-1 fs-6">02 January 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-body rounded-4">
                                <div className="mb-4">
                                    <span className="badge text-primary border border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-medium">
                                        <span className="ps-2">Marketing</span>
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <h5 className="card-title fw-semibold">Senior Software Engineer</h5>
                                    <div className="hstack gap-2 text-secondary text-opacity-75">
                                        <div>Full-time</div>
                                        <div className="vr"></div>
                                        <div>Remote (USA timezone)</div>
                                    </div>
                                </div>
                                <div className="hstack gap-2 justify-content-between">
                                    <Button variant="primary" className='border-white icon-link icon-link-hover hover-icon--45deg p-1 ps-3 d-inline-flex align-items-center' 
                                    onClick={()=> navigate('./job-description')}>
                                        Apply Now
                                        <PiPaperPlaneRight size={16} className="bi rotate-45deg- ms-1 p-1 w-auto h-auto bg-info bg-opacity-50 rounded-circle" />
                                    </Button>
                                    <div className="d-flex align-items-center">
                                        <span className="hstack p-1 rounded-3 border border-primary"><HiCalendar className="text-primary" size={20} /></span>
                                        <span className="ps-3 p-1 fs-6">02 January 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-body rounded-4">
                                <div className="mb-4">
                                    <span className="badge text-primary border border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-medium">
                                        <span className="ps-2">Marketing</span>
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <h5 className="card-title fw-semibold">Senior Software Engineer</h5>
                                    <div className="hstack gap-2 text-secondary text-opacity-75">
                                        <div>Full-time</div>
                                        <div className="vr"></div>
                                        <div>Remote (USA timezone)</div>
                                    </div>
                                </div>
                                <div className="hstack gap-2 justify-content-between">
                                    <Button variant="primary" className='border-white icon-link icon-link-hover hover-icon--45deg p-1 ps-3 d-inline-flex align-items-center' 
                                    onClick={()=> navigate('./job-description')}>
                                        Apply Now
                                        <PiPaperPlaneRight size={16} className="bi rotate-45deg- ms-1 p-1 w-auto h-auto bg-info bg-opacity-50 rounded-circle" />
                                    </Button>
                                    <div className="d-flex align-items-center">
                                        <span className="hstack p-1 rounded-3 border border-primary"><HiCalendar className="text-primary" size={20} /></span>
                                        <span className="ps-3 p-1 fs-6">02 January 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-body rounded-4">
                                <div className="mb-4">
                                    <span className="badge text-primary border border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-medium">
                                        <span className="ps-2">Marketing</span>
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <h5 className="card-title fw-semibold">Senior Software Engineer</h5>
                                    <div className="hstack gap-2 text-secondary text-opacity-75">
                                        <div>Full-time</div>
                                        <div className="vr"></div>
                                        <div>Remote (USA timezone)</div>
                                    </div>
                                </div>
                                <div className="hstack gap-2 justify-content-between">
                                    <Button variant="primary" className='border-white icon-link icon-link-hover hover-icon--45deg p-1 ps-3 d-inline-flex align-items-center' 
                                    onClick={()=> navigate('./job-description')}>
                                        Apply Now
                                        <PiPaperPlaneRight size={16} className="bi rotate-45deg- ms-1 p-1 w-auto h-auto bg-info bg-opacity-50 rounded-circle" />
                                    </Button>
                                    <div className="d-flex align-items-center">
                                        <span className="hstack p-1 rounded-3 border border-primary"><HiCalendar className="text-primary" size={20} /></span>
                                        <span className="ps-3 p-1 fs-6">02 January 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // job cards // */}

                </div>
            </section>
            {/* // Free Trail Box END // */}

        </div>
        </>
     );
}
 
export default Careers;