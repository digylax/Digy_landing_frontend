import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import bannerIcon1 from "../../assets/images/career/career-b-icon-1.png";
import bannerIcon2 from "../../assets/images/career/career-b-icon-2.png";

const AboutUs = () => {
    const navigate = useNavigate();

    return ( <>
    <div className="aboutus-page single-page">
        {/* Banner */}
        <section className="hero-banner d-flex flex-column align-items-stretch justify-content-center pb-4 pb-lg-0">

            <div className="container-lg pb-4 h-100">
                <div className="row align-items-center h-100 position-relative">
                    {/* Bg icons */}
                    <div className="position-absolute w-100 h-100 d-none d-xl-block banner-icons">
                        <img src={bannerIcon1} alt="digy-career-icon" className="position-absolute b-icon-1" width={96} height={96} />
                        <img src={bannerIcon2} alt="digy-career-icon" className="position-absolute b-icon-2" width={96} height={96} />
                    </div>
                    {/* // Bg icons // */}
                    <div className="col col-xl-7 mx-auto text-center">
                        <div data-aos="fade-up">
                            <h1 className="fw-semibold display-5 pt-4 pb-3 banner-title">About Us</h1>
                            <p className="mt-3 mb-4 h5 text-secondary lead lh-base">
                                "At Digylax, we create innovative software solutions to streamline business operations 
                                and fuel growth. Our products, including HRMS, MDM, CRM, and accounting software, 
                                are tailored to meet the unique needs of each organization. We focus on seamless 
                                integration and user-centric design to help businesses optimize processes and make 
                                informed decisions. Driven by a commitment to excellence, we empower businesses 
                                to succeed in today’s competitive landscape."
                            </p>
                            <p className="my-3 pt-3">
                                <Button variant="primary" size="lg" className='ms-sm-3 mt-3 mt-sm-0 fs-6 icon-link icon-link-hover hover-icon-0deg' 
                                onClick={()=> navigate('/careers/job-application')}>
                                    Join Us
                                    <IoMdArrowRoundForward className="bi rotate--45deg fs-6 ms-1" />
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* // Banner END // */}
    </div>
    </> );
}
 
export default AboutUs;