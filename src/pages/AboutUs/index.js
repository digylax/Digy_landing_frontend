import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import { HiCube } from "react-icons/hi2";
import bannerIcon1 from "../../assets/images/career/career-b-icon-1.png";
import bannerIcon2 from "../../assets/images/career/career-b-icon-2.png";
import aboutFea1 from "../../assets/images/about/about-fea-1.png";
import aboutFea2 from "../../assets/images/about/about-fea-2.png";
import teamMem1 from "../../assets/images/about/digy-team-mem-1.png";
import teamMem2 from "../../assets/images/about/digy-team-mem-2.png";
import teamMem3 from "../../assets/images/about/digy-team-mem-3.png";
import teamMem4 from "../../assets/images/about/digy-team-mem-4.png";
import teamMem5 from "../../assets/images/about/digy-team-mem-5.png";
import teamMem6 from "../../assets/images/about/digy-team-mem-6.png";
import teamMem7 from "../../assets/images/about/digy-team-mem-7.png";
import teamMem8 from "../../assets/images/about/digy-team-mem-8.png";
import teamMem9 from "../../assets/images/about/digy-team-mem-9.png";
import ClientsLogoSlider from "../../Components/ClientsLogoSlider";

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
                    <div className="col col-xl-9 col-xxl-8 mx-auto text-center">
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
                                onClick={()=> navigate('/contact-us')}>
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

        {/* Clients brand logo Slider */}
        <section className="py-5 bg-body-tertiary client-logos" data-aos="fade-up">
            <div className="client-section center">
                <h5 className="text-center fw-semibold pb-4 mb-4 mb-xl-5">Brands which trust us</h5>
                
                <ClientsLogoSlider />
            </div>
        </section>
        {/* // Clients brand logo Slider END // */}

        {/* About features */}
        <section className="py-5 features">
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4 fea-item">
                        <div className="row g-4 g-md-3 justify-content-md-beetween align-items-center">
                            <div className="col-12">
                            <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                <HiCube />
                                <span className="ps-2">Our Collaborative Culture</span>
                            </span>
                            </div>
                            <div className="col-12 col-md-6 text-start" data-aos="fade-up">
                                <img src={aboutFea1} alt="digy-about" className="img-fluid object-fit-cover rounded-3" />
                            </div>
                            <div className="col-12 col-md-6" data-aos="fade-up">
                                <p className="mb-0 text-center fs-4 col-xl-9 mx-xl-auto">
                                    Driven by innovation and united as a team, we empower each other to achieve success
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-4 fea-item">
                        <div className="row g-4 g-md-3 justify-content-md-beetween align-items-center">
                            <div className="col-12 text-md-end">
                                <span className="badge text-primary border rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-semibold">
                                    <HiCube />
                                    <span className="ps-2">Inspiring Work Environment</span>
                                </span>
                            </div>
                            <div className="col-12 col-md-6 order-1 order-md-0" data-aos="fade-up">
                                <p className="mb-0 text-center fs-4 col-xl-9 mx-xl-auto">
                                    Creating a supportive and dynamic workplace where collaboration sparks innovation and ideas come to life
                                </p>
                            </div>
                            <div className="col-12 col-md-6 text-md-end" data-aos="fade-up">
                                <img src={aboutFea2} alt="digy-about" className="img-fluid object-fit-cover rounded-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* // About features END // */}

        {/* Our Team */}
        <section className="py-5 bg-body-tertiary bg-opacity-50 our-team">
            <div class="container mt-5">

                {/* Head Section */}
                <div className="text-center pb-4">
                    <h2 className="h1 fw-semibold mb-4 mb-xl-5" data-aos="fade-up">Our <span className="text-primary">Team</span></h2>
                </div>
                {/* // Head Section // */}

                <div class="row g-3 g-xxl-4">

                    <div class="col-sm-6 col-md-4">
                        <div class="card rounded-4  team-member-card" data-aos="fade-up">
                            <img src={teamMem1} alt="Team Member 1" />
                            <div class="member-info text-center p-4">
                                <h5 className="member-name">Freddy Morrel</h5>
                                <p>Managing Director</p>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="card rounded-4  team-member-card" data-aos="fade-up">
                            <img src={teamMem2} alt="Team Member 2" />
                            <div class="member-info text-center p-4">
                                <h5 className="member-name">Robert Lee</h5>
                                <p>Marketing Head</p>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="card rounded-4  team-member-card" data-aos="fade-up">
                            <img src={teamMem3} alt="Team Member 3" />
                            <div class="member-info text-center p-4">
                                <h5 className="member-name">Mec Rogers</h5>
                                <p>Project Lead</p>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4">
                        <div class="card rounded-4  team-member-card" data-aos="fade-up">
                            <img src={teamMem4} alt="Team Member 4" />
                            <div class="member-info text-center p-4">
                                <h5 className="member-name">Laura Hendry</h5>
                                <p>UI UX Team Lead</p>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="card rounded-4  team-member-card" data-aos="fade-up">
                            <img src={teamMem5} alt="Team Member 5" />
                            <div class="member-info text-center p-4">
                                <h5 className="member-name">Josh Miller</h5>
                                <p>Principle Developer</p>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="card rounded-4  team-member-card" data-aos="fade-up">
                            <img src={teamMem6} alt="Team Member 6" />
                            <div class="member-info text-center p-4">
                                <h5 className="member-name">Ahamed Khan</h5>
                                <p>Testing Team Lead</p>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4">
                        <div class="card rounded-4  team-member-card" data-aos="fade-up">
                            <img src={teamMem7} alt="Team Member 7" />
                            <div class="member-info text-center p-4">
                                <h5 className="member-name">Robert Peterson</h5>
                                <p>Digital Marketing Analyst</p>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="card rounded-4  team-member-card" data-aos="fade-up">
                            <img src={teamMem8} alt="Team Member 8" />
                            <div class="member-info text-center p-4">
                                <h5 className="member-name">Andy Marcus</h5>
                                <p>Account Executive</p>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="card rounded-4  team-member-card" data-aos="fade-up">
                            <img src={teamMem9} alt="Team Member 9" />
                            <div class="member-info text-center p-4">
                                <h5 className="member-name">Christo Lee</h5>
                                <p>Sales Lead</p>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* // Our Team END // */}
    </div>
    </> );
}
 
export default AboutUs;