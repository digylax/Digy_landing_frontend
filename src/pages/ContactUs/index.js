import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import { BiPhone } from "react-icons/bi";
import { PiChatCircleTextDuotone } from "react-icons/pi";
import { TiLocationOutline } from "react-icons/ti";
import { HiCube } from "react-icons/hi2";

const ContactUs = () => {

    // Init AOS Animation
    useEffect(() => {
        AOS.init({
        //   disable: function() {
        //     var maxWidth = 800;
        //     return window.innerWidth < maxWidth;
        //   },
          disable: "phone", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
          disable: "mobile",
          duration: 1000,
          easing: "ease-in-out-back",
        });
    }, []);

    // Example starter JavaScript for disabling form submissions if there are invalid fields
   const formValidation = () => {
        'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }
        
                form.classList.add('was-validated')
            }, false)
        })
    }

    return ( 
        <>
        <div className="contact-page">

            {/* Banner */}
            <section className="hero-banner d-flex align-items-stretch pb-4 pb-lg-0">
                <div className="container-lg h-100 pb-4">
                    <div className="row align-items-end h-100">
                        <div className="col text-center" data-aos="fade-up">
                            <h1 className="fw-semibold display-5 pb-3 banner-title">Contact our Friendly Team</h1>
                            <p className="mt-3 mb-4 h5 text-secondary">
                                Let us know how we can  help.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* // Banner END // */}

            {/* Form Section */}
            <section className="py-5 bg-body-tertiary bg-opacity-50">
                <div className="contact-form mx-auto">
                    <div className="container">
                        {/* Form Header */}
                        <div className="text-center" data-aos="fade-up">
                            <h2 className="text-center fw-semibold mb-4">Message Us</h2>
                            <p className="mb-4">We will get back to you in 24-hours</p>
                        </div>
                        
                        {/* Form Box */}
                        <div className="bg-white rounded-3 p-3 p-xl-4 pb-0" data-aos="fade-up">
                            <form className="row g-3 g-xl-4 needs-validation">
                                {/* Submit button click function - above form add this class 'was-validated' for form validation design */}
                                <div className="col-sm-6">
                                    <div className="form-label-group in-border mb-0">
                                        <input type="text" className="form-control" id="validationCustom01" 
                                        placeholder="Firstt Name" required />
                                        <label htmlFor="validationCustom01" className="form-label">First name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-label-group in-border mb-0">
                                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last Name" />
                                        <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-label-group in-border mb-0">
                                        <input type="email" className="form-control" id="validationEmail" 
                                        placeholder="mail@address.com" required />
                                        <label htmlFor="validationEmail" className="form-label">Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-label-group in-border mb-0">
                                        <span className="position-absolute h-100 p-2 ps-3 fs-14 d-flex align-items-center" id="inputGroupPrepend">+91</span>
                                        <input type="text" className="form-control ps-5" id="validationPhone" 
                                        aria-describedby="inputGroupPrepend" placeholder="9008007000" required />
                                        <label htmlFor="validationPhone" className="form-label ps-4 ms-4">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-label-group in-border mb-0">
                                        <textarea id="validationMsg" className="form-control text-bg-light" placeholder="Leave a message" rows="4"></textarea>
                                        <label htmlFor="validationMsg" className="form-label">Leave a message</label>
                                    </div>
                                </div>

                                <h5 className="py-2 mb-0 fw-medium">Services</h5>
                                <div className="col-12">
                                    <div className="row row-cols-sm-2 g-3">
                                        <div className="col">
                                            <div className="border p-2 pb-1 bg-body-tertiary">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="serviceOptRadio1"
                                                 defaultChecked={true} required />
                                                <label className="form-check-label" htmlFor="serviceOptRadio1">
                                                    Web Application Development
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="border p-2 pb-1 bg-body-tertiary">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="serviceOptRadio2" required />
                                                <label className="form-check-label" htmlFor="serviceOptRadio2">
                                                    Mobile Application Development
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="border p-2 pb-1 bg-body-tertiary">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="serviceOptRadio3" required />
                                                <label className="form-check-label" htmlFor="serviceOptRadio3">
                                                    UI / UX
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="border p-2 pb-1 bg-body-tertiary">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="serviceOptRadio4" required />
                                                <label className="form-check-label" htmlFor="serviceOptRadio4">
                                                    Digital Marketing
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-12 text-center">
                                    <Button variant="primary-digy" type="submit" size="lg" 
                                     onClick={()=> formValidation()} className='fs-6 icon-link icon-link-hover'>
                                        Send Message
                                        <IoMdArrowRoundForward className="bi fs-6 ms-1" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                        {/* // Form Box // */}
                    </div>
                </div>
            </section>
            {/* // Form Section END // */}

            {/* Contact detail boxs */}
            <section className="py-5 bg-body-tertiary bg-opacity-50">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-11 col-xl-10 col-xxl-9 mx-auto">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center fs-6">
                                <div className="col">
                                    <div className="card card-body rounded-4">
                                        <p className="card-text d-flex align-items-center justify-content-center">
                                            <PiChatCircleTextDuotone size={24} className="text-primary" />
                                            <span className="ps-2 fw-medium text-primary-emphasis">Chat to Support</span>
                                        </p>
                                        <p className="card-text fw-semibold">Speak to Support</p>
                                        <p className="card-text"><a href="mailto:support@digylax.com" className="text-link">support@digylax.com</a></p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-body rounded-4">
                                        <p className="card-text d-flex align-items-center justify-content-center">
                                            <TiLocationOutline size={24} className="text-primary" />
                                            <span className="ps-2 fw-medium text-primary-emphasis">Visit Us</span>
                                        </p>
                                        <p className="card-text fw-semibold">Visit our Office HQ</p>
                                        <p className="card-text"><a href="" className="text-link">View on Google Map</a></p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-body rounded-4">
                                        <p className="card-text d-flex align-items-center justify-content-center">
                                            <BiPhone size={24} className="text-primary" />
                                            <span className="ps-2 fw-medium text-primary-emphasis">Call Us</span>
                                        </p>
                                        <p className="card-text fw-semibold">Mon - Fri from 8am to 5pm</p>
                                        <p className="card-text"><a href="tel:+911234567890" className="text-link">+91 1234567890</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* // Contact detail boxs END // */}

            {/* Free Trail Box */}
            <section className="py-5 bg-body-tertiary bg-opacity-50">
                <div className="container rounded-4 bg-primary bg-gradient text-center py-5">
                    <span className="badge text-bg-primary border border-white rounded-pill d-inline-flex px-3 py-2 align-items-center fs-6 fw-medium">
                        <HiCube size={20} />
                        <span className="ps-2 small">Free Trail</span>
                    </span>
                    <h2 className="h1 my-4 text-white">Start your 30days free trail</h2>
                    <Button variant="outline-primary" className='bg-white text-primary bg-hover-opacity-75 border-white icon-link icon-link-hover hover-icon--45deg p-1 ps-3 d-inline-flex align-items-center'>
                        Get Started
                        <IoMdArrowRoundForward size={16} className="bi ms-1 p-1 w-auto h-auto border rounded-circle" />
                    </Button>
                </div>
            </section>
            {/* // Free Trail Box END // */}

        </div>
        </>
     );
}
 
export default ContactUs;