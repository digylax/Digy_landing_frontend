import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { PiQuotesDuotone } from "react-icons/pi"; 
import Collapse from 'react-bootstrap/Collapse';
import tmNavImg1 from "../../assets/images/testmonial/tm-nav-img-1.png";
import tmNavImg2 from "../../assets/images/testmonial/tm-nav-img-2.png";
import tmNavImg3 from "../../assets/images/testmonial/tm-nav-img-3.png";
import tmNavImg4 from "../../assets/images/testmonial/tm-nav-img-4.png";
import tmNavImg5 from "../../assets/images/testmonial/tm-nav-img-5.png";
import tmUserImg1 from "../../assets/images/testmonial/tm-user-img-1.png";
import tmUserImg2 from "../../assets/images/testmonial/tm-user-img-2.png";
import tmUserImg3 from "../../assets/images/testmonial/tm-user-img-3.png";
import tmUserImg4 from "../../assets/images/testmonial/tm-user-img-4.jpeg";
import tmUserImg5 from "../../assets/images/testmonial/tm-user-img-5.jpg";

const testimonials = [
    {
        id: 1,
        name: "Michael Keaton",
        image: tmUserImg1,
        navImg: tmNavImg1,
        role: "",
        company: "Acme Corp.",
        content:
            "This product has completely transformed how we handle our marketing campaigns. The interface is intuitive and the results are outstanding.",
        rating: 5,
    },
    {
        id: 2,
        name: "Ethan Sawyer",
        image: tmUserImg2,
        navImg: tmNavImg2,
        role: "",
        company: "Pulse Digital Media",
        content:
            "The developer experience is fantastic. API integration was seamless and the documentation is comprehensive. Highly recommended!",
        rating: 5,
    },
    {
        id: 3,
        name: "Ava Moreno",
        image: tmUserImg3,
        navImg: tmNavImg3,
        role: "",
        company: "Fusion Interactive",
        content:
            "We've seen a 40% increase in team productivity since implementing this solution. The automated workflows are a game-changer.",
        rating: 4,
    },
    {
        id: 4,
        name: "Julian Styles",
        image: tmUserImg4,
        navImg: tmNavImg4,
        role: "",
        company: "Apex Design Lab",
        content:
            "The best investment we've made this year. Customer support is exceptional and the platform keeps getting better with each update.",
        rating: 5,
    },
    {
        id: 5,
        name: "Lily Patel",
        image: tmUserImg5,
        navImg: tmNavImg5,
        role: "",
        company: "Sparkle Creative Agency",
        content:
            "Working with Digylax has made our operations run so much smoother. The tools they provided helped us save time and keep everything organized.",
        rating: 5,        
    },
];

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState("");

    const nextSlide = () => {
        if (!isAnimating) {
            setDirection("left");
            setIsAnimating(true);
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setDirection("right");
            setIsAnimating(true);
            setActiveIndex(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
            );
        }
    };

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    // Auto play - Auto-advance slides
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                size={18}
                className={
                    index < rating ? "fill-warning text-warning" : "text-black-50"
                }
            />
        ));
    };
    
    return (
        <div className="w-100 py-4 px-1 testimonials" data-aos="fade-down">
            {/* Carousel */}
            <div className="position-relative w-100">

                {/* Nav Buttons Section */}
                <div className="row mb-4 g-0 tm-nav">
                    <div className="col-auto col-md-8 col-lg-6 col-xxl-5 mx-auto">
                        {testimonials.map((_, index) => (
                            <div key={index}
                                className={`d-inline-block me-2 rounded-5 p-1 pe-0 border ${index === activeIndex ? "active border-secondary-subtle flex-grow-1" : "opacity-75 border-white flex-grow-0" }`}
                                onClick={() => setActiveIndex(index)}
                                aria-controls={`collapseText-` + index} aria-expanded={index === activeIndex} role="button">
                                <span className="d-flex align-items-center tm-nav-item">
                                    <span className="tm-nav-img">
                                        <img src={testimonials[index].navImg} alt={testimonials[index].name}
                                          className="rounded-circle mr-3"/>
                                    </span>
                                    <Collapse in={index === activeIndex} dimension="width">
                                        <div id={`collapseText-` + index}>
                                            <div className={`t-btn-cont d-flex flex-column px-2 text-start tm-nav-cont`}
                                                style={{ width: '164px' }}>
                                                <span className="fs-6 fw-semibold">{testimonials[index].name}</span>
                                                <small>{testimonials[activeIndex].company}</small>
                                            </div>
                                        </div>
                                    </Collapse>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* // Nav Buttons Section END //*/}

                {/* Main carousel container */}
                <div className="overflow-hidden position-relative bg-white border rounded-4 shadow-sm">
                    <div className={`d-flex transition-transform duration-500 ease-in-out ${isAnimating ? direction === "left" ? "-translate-x-full" : "translate-x-full" : "translate-x-0" }`}>
                        {/* Current testimonial */}
                        <div className="w-100 flex-shrink-0">
                            <div className="row">
                                {/* If need 2 boxes add this class above row - 'row-cols-md-2 g-md-3' */}
                                {/* Testimonial card */}
                                <div className="col px-4 position-relative tm-card">
                                    <PiQuotesDuotone
                                        className="text-primary text-opacity-25 position-absolute end-0 bottom-0 translate-middle"
                                        size={48}
                                    />
                                    <div className="d-flex flex-column flex-md-row align-items-center h-100 mb-4">
                                        <div className="user-img me-3">
                                            <img src={testimonials[activeIndex].image}
                                                alt={testimonials[activeIndex].name}
                                                className="user-img rounded-4 object-fit-cover"/>
                                        </div>
                                        
                                        <div className="d-flex flex-column justify-content-around h-100 py-3 ps-md-4 py-md-5">
                                            <div className="d-flex align-items-center mb-3">
                                                {renderStars(testimonials[activeIndex].rating)}
                                            </div>
                                            <p className="mb-3 fs-5 fw-medium">
                                                "{testimonials[activeIndex].content}"
                                            </p>
                                            <div>
                                                <h3 className="fw-semibold fs-6">
                                                    {testimonials[activeIndex].name}
                                                </h3>
                                                <p className="text-secondary-emphasis">
                                                    {testimonials[activeIndex].company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col d-none d-md-block">
                                    <div className="bg-white rounded-lg shadow-lg p-4 opacity-50">
                                        <div className="d-flex align-items-center mb-4">
                                            <img src={testimonials[(activeIndex + 1) % testimonials.length].image}
                                                alt={testimonials[(activeIndex + 1) % testimonials.length].name}
                                                className="w-50px h-50px rounded-circle object-fit-cover mr-3"/>
                                            <div>
                                                <h3 className="fw-semibold fs-5">
                                                    {testimonials[(activeIndex + 1) % testimonials.length].name}
                                                </h3>
                                                <p className="text-secondary">
                                                    {testimonials[(activeIndex + 1) % testimonials.length].company}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-body-teritory fs-5 fw-medium mb-4">
                                            "{testimonials[(activeIndex + 1) % testimonials.length].content}"
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button onClick={prevSlide}
                    className="btn btn-light position-absolute start-0 top-50 translate-middle-y rounded-circle p-2 shadow-lg">
                    <FaChevronLeft size={24} />
                </button>
                <button onClick={nextSlide}
                    className="btn btn-light position-absolute end-0 top-50 translate-middle-y rounded-circle p-2 shadow-lg">
                    <FaChevronRight size={24} />
                </button> */}
                
            </div>
        </div>
    );
}
export default Testimonial;
