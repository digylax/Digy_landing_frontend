import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import AOS from "aos";
import { Button } from "react-bootstrap";
import { IoMdArrowDropright, IoMdArrowForward, IoMdArrowRoundForward, IoMdTime } from "react-icons/io";
import { PiPaperPlaneRight } from "react-icons/pi";
import { HiCube } from "react-icons/hi2";
import bannerIcon1 from "../../../assets/images/career/career-b-icon-1.png";
import bannerIcon2 from "../../../assets/images/career/career-b-icon-2.png";
import { CiLocationOn } from "react-icons/ci";
import FileUpload from "../../../Components/FileUpload";

const JobDescription = () => {
    const navigate = useNavigate();

    return ( <>
    <div className="job-desc-page single-page">
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
                            <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                <HiCube />
                                <span className="ps-2">Engineering</span>
                            </span>
                            <h1 className="fw-semibold display-5 pt-4 pb-3 banner-title">Senior Software Engineer</h1>
                            <p className="mt-3 mb-4 h5 text-secondary lead lh-base">
                                Full-time | Remote (USA timezones)
                            </p>
                            <p className="my-3 pt-3">
                                <Button variant="primary" size="lg" className='ms-sm-3 mt-3 mt-sm-0 fs-6 icon-link icon-link-hover hover-icon-0deg' 
                                onClick={()=> navigate('/careers/job-application')}>
                                    Apply for this Role
                                    <IoMdArrowRoundForward className="bi rotate--45deg fs-6 ms-1" />
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* // Banner END // */}

        {/* Job Description */}
        <section className="py-5 bg-body-tertiary bg-opacity-25 job-desc">
            <div className="container px-xxl-5">
                <div className="pt-3 pt-xl-4" data-aos="fade-up">
                    <h4 className="pb-3 text-primary fw-semibold">Digylax Profile</h4>
                    <p className="fs-16">
                        we are pioneers in [industry/sector], dedicated to [mission or goal]. We're on a mission to 
                        [briefly describe the mission or goal] and are seeking a talented Senior Software Engineer 
                        to join our dynamic team. If you're passionate about [relevant technology or industry trends] 
                        and thrive in a collaborative, innovative environment, we want to hear from you!
                    </p>
                </div>
                <div className="pt-3 pt-xl-4" data-aos="fade-up">
                    <h4 className="pb-3 text-primary fw-semibold">Responsibilities</h4>
                    <ul className="fs-16">
                        <li>Lead the design and development of [specific projects or areas]</li>
                        <li>Collaborate with cross-functional teams to define software requirements and specifications.</li>
                        <li>Mentor and guide junior engineers, fostering a culture of knowledge-sharing.</li>
                        <li>Drive technical excellence and best practices across the engineering team.</li>
                        <li>Contribute to the architecture, scalability, and performance of our systems.</li>
                    </ul>
                </div>
                <div className="pt-3 pt-xl-4" data-aos="fade-up">
                    <h4 className="pb-3 text-primary fw-semibold">What We Offer</h4>
                    <ul className="fs-16">
                        <li>Competitive salary and benefits package.</li>
                        <li>Opportunity to work on cutting-edge projects in [specific domain or industry].</li>
                        <li>Professional development and career growth opportunities.</li>
                        <li>Collaborative and inclusive work culture.</li>
                    </ul>
                </div>
                <div className="pt-3 pt-xl-4" data-aos="fade-up">
                    <h4 className="pb-3 text-primary fw-semibold">How to Apply</h4>
                    <p className="fs-16">
                        If you are excited about the opportunity to contribute to our mission and possess the skills 
                        we are looking for, we would love to hear from you. Please submit your resume, along with a 
                        cover letter highlighting your relevant experience, to [your email address].
                    </p>
                </div>
                <div className="hstack gap-4 pt-3 pt-xl-4" data-aos="fade-up">
                    <div className="d-flex align-items-center text-primary">
                        <CiLocationOn size={28} />
                        <span className="ps-1 fs-6 fw-semibold">Coimbatore</span>
                    </div>
                    <div className="d-flex align-items-center text-primary">
                        <IoMdTime size={28} />
                        <span className="ps-1 fs-6 fw-semibold">Full-Time</span>
                    </div>
                    <div className="d-flex align-items-center text-primary">
                        <IoMdTime size={28} />
                        <span className="ps-1 fs-6 fw-semibold">Part-Time</span>
                    </div>
                </div>
                <div className="text-center pt-3 pt-xl-4" data-aos="fade-up">
                    <Button variant="primary" size="lg" className='px-5 ms-sm-3 mt-3 mt-sm-0 fs-6 icon-link icon-link-hover' 
                    onClick={()=> navigate('/careers/job-application')}>
                        Apply
                        <IoMdArrowForward className="bi fs-6 ms-1" />
                    </Button>
                </div>
            </div>
        </section>
        {/* // Job Description // */}

    </div>
    
    </> );
}
 
export default JobDescription;