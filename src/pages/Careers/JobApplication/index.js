import { useState } from "react";
import { Button } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import FileUpload from "../../../Components/FileUpload";

const JobApplication = () => {

    const [wasValidate, setwasValidate] = useState(false);

    // disabling form submissions if there are invalid fields
    const formValidation = () => {
        'use strict'
        setwasValidate(true);
    }

    return ( <>
    <div className="job-application single-page">
        {/* Banner */}
        <section className="hero-banner d-flex flex-column align-items-stretch justify-content-center pb-4 pb-lg-0">

            <div className="container-lg pb-4 h-100">
                <div className="row align-items-center h-100 position-relative">
                    <div className="col col-xl-7 mx-auto text-center">
                        <div data-aos="fade-up">
                            <h1 className="fw-semibold display-5 pt-4 pb-3 banner-title">Senior Software Engineer</h1>
                            <p className="mt-3 mb-4 h5 text-secondary fw-medium lead lh-base">
                                Reg no : 2546711078
                            </p>
                            <p className="mt-3 mb-4 h5 text-secondary lead lh-base">
                                Full-time | Remote (USA timezones)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* // Banner END // */}

        {/* Application Form */}
        <section className="py-5 bg-body-tertiary bg-opacity-50">
            <div className="contact-form mx-auto">
                <div className="container">
                    {/* File Upload Section */}
                    <div className="mb-4" data-aos="fade-down">
                        <FileUpload />
                    </div>
                    {/* Form Box */}
                    <div className="bg-white rounded-3 p-3 p-xl-4 pb-0" data-aos="fade-up">
                        {/* Form Header */}
                        <h6 className="fw-semibold mb-4">General Deatails</h6>
                        <form className={`row g-3 g-xl-4 needs-validation ${wasValidate ? 'was-validated':''}`}>
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
                                    <input type="text" className="form-control" id="validationYog" 
                                    placeholder="Year of Graduation" required />
                                    <label htmlFor="validationYog" className="form-label">Year of Graduation</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group in-border mb-0">
                                    <select className="form-select" 
                                    id="selectedGenderId" name="selectedGender" defaultValue="placeholder" required>
                                        <option value="placeholder" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <label htmlFor="selectedGenderId" className="form-label">Gender</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group in-border mb-0">
                                    <select className="form-select" 
                                    id="selectedExpId" name="selectedExp" defaultValue="placeholder" required>
                                        <option value="placeholder" disabled>Experience</option>
                                        <option value="fresher">0 - 6 Months</option>
                                        <option value="6months">6 months To 1 Year</option>
                                        <option value="1to2years">1 To 2 Years</option>
                                        <option value="2to3years">2 To 3 Years</option>
                                        <option value="3to4years">3 To 4 Years</option>
                                        <option value="5years">5+ Years</option>
                                        <option value="6years">6+ Years</option>
                                    </select>
                                    <label htmlFor="selectedExpId" className="form-label">Experience</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group in-border mb-0">
                                    <select className="form-select" 
                                    id="selectedCurEmpId" name="selectedCurEmp" defaultValue="placeholder" required>
                                        <option value="placeholder" disabled>Current Employer</option>
                                        <option value="male">Yes</option>
                                        <option value="female">No</option>
                                    </select>
                                    <label htmlFor="selectedCurEmpId" className="form-label">Current Employer</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group in-border mb-0">
                                    <select className="form-select" 
                                    id="selectedExCtcId" name="selectedExCtc" defaultValue="placeholder" required>
                                        <option value="placeholder" disabled>Expected CTC</option>
                                        <option value="1lakhs">1 Lakhs</option>
                                        <option value="2lakhs">2 Lakhs</option>
                                        <option value="3lakhs">3 Lakhs</option>
                                        <option value="4lakhs">4 Lakhs</option>
                                        <option value="6lakhs">6 Lakhs</option>
                                        <option value="8lakhs">8 Lakhs</option>
                                        <option value="10lakhs">10 Lakhs</option>
                                    </select>
                                    <label htmlFor="selectedExCtcId" className="form-label">Expected CTC</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group in-border mb-0">
                                    <select className="form-select" 
                                    id="selectedNotPeId" name="selectedNotPe" defaultValue="placeholder" required>
                                        <option value="placeholder" disabled>Notice Period</option>
                                        <option value="immediate">Immediate</option>
                                        <option value="0t1mon">0 - 1 Month</option>
                                        <option value="1t3mon">1 month To 3 months</option>
                                    </select>
                                    <label htmlFor="selectedNotPeId" className="form-label">Notice Period</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group in-border mb-0">
                                    <textarea id="validationMsg" className="form-control text-bg-light" placeholder="Please type comma(,) separated" rows="4"></textarea>
                                    <label htmlFor="validationMsg" className="form-label">Skill Set</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group in-border mb-0">
                                    <select className="form-select" 
                                    id="selectedCurLocId" name="selectedCurLoc" defaultValue="placeholder" required>
                                        <option value="placeholder" disabled>Current Location</option>
                                        <option value="coimbatore">Coimbatore</option>
                                        <option value="chennai">Chennai</option>
                                        <option value="madurai">Madurai</option>
                                    </select>
                                    <label htmlFor="selectedCurLocId" className="form-label">Current Location</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group in-border mb-0">
                                    <select className="form-select" 
                                    id="selectedPreLocId" name="selectedPreLoc" defaultValue="placeholder" required>
                                        <option value="placeholder" disabled>Preferred Location</option>
                                        <option value="coimbatore">Coimbatore</option>
                                        <option value="chennai">Chennai</option>
                                        <option value="madurai">Madurai</option>
                                    </select>
                                    <label htmlFor="selectedPreLocId" className="form-label">Preferred Location</label>
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <Button variant="primary-digy" type="submit" size="lg" 
                                    onClick={()=> formValidation()} className='fs-6 icon-link icon-link-hover'>
                                    Apply
                                    <IoMdArrowRoundForward className="bi fs-6 ms-1" />
                                </Button>
                            </div>
                        </form>
                    </div>
                    {/* // Form Box // */}
                </div>
            </div>
        </section>
        {/* // Application Form END // */}
    </div>
    </> );
}
 
export default JobApplication;