import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import digyLogo from '../../assets/images/digylax-logo.png';
import whatsappIcon from '../../assets/images/header/whatsapp-icon.svg';
import settingIcon from '../../assets/images/header/setting-icon.svg';
import qmarkIcon from '../../assets/images/header/question-mark-icon.svg';
import bellIcon from '../../assets/images/header/bell-icon.svg';
import profilePicture from '../../assets/images/user-img.png';
import companyLogo from '../../assets/images/header/McAfee.png';
// import mdmLogo from '../../assets/images/product-logo/mdm-logo-icon.svg';
// import crmLogo from '../../assets/images/product-logo/crm-logo.svg';
// import hrmsLogo from '../../assets/images/product-logo/hrms-logo.svg';
// import digyBooksLogo from '../../assets/images/product-logo/digy-books-logo.svg';
import { ReactComponent as MdmLogo} from '../../assets/images/product-logo/mdm-logo-icon.svg';
import { ReactComponent as CrmLogo} from '../../assets/images/product-logo/crm-logo-icon.svg';
import { ReactComponent as HrmsLogo} from '../../assets/images/product-logo/hrms-logo-icon.svg';
import { ReactComponent as DigyBooksLogo} from '../../assets/images/product-logo/digy-books-logo-icon.svg';
import mmFeature from '../../assets/images/header/mm-feature.png';
import mdmFeaImg from '../../assets/images/header/header-mdm-fea.png';
import crmFeaImg from '../../assets/images/header/header-crm-fea.png';
import hrmsFeaImg from '../../assets/images/header/header-hrms-fea.png';
import digyBooksFeaImg from '../../assets/images/header/header-digy-books-fea.png';
import mmUser1 from '../../assets/images/header/mm-user-1.png';
import mmUser2 from '../../assets/images/header/mm-user-2.png';
import mmUser3 from '../../assets/images/header/mm-user-3.png';
import mmUser4 from '../../assets/images/header/mm-user-4.png';
import { FiLayers } from "react-icons/fi";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        navigate(`/`);
    }

    // State to track the hovered item
    const [hoveredIndex, setHoveredIndex] = useState(0);

    // List of content to be displayed for each list item
    const content = [
        { id: 1, 
            navLink: '/product-mdm',
            title: "MDM", 
            logo: MdmLogo, 
            feaImg: mdmFeaImg,
            content: "Built for IT teams and managed service providers, NinjaOne offers a unified console for managing various device platforms. Key features include remote management, patching, and security policies​", 
            userImg: mmUser4,
            userName: "Craig Schleifer",
            userDesignation: "Data Engineer, Kojo",
        },
        { id: 2, 
          navLink: '/product-crm',
          title: "CRM", 
          logo: CrmLogo, 
          feaImg: crmFeaImg,
          content: "Includes AI-powered insights, lead prediction, sales gamification, and extensive customization options. Great for remote teams with tools to foster collaboration and competition​", 
          userImg: mmUser2,
          userName: "Kierra Schleifer",
          userDesignation: "Senior Manager, ZenDesk",
        },
        { id: 3, 
            navLink: "/product-hrms",
            title: "HRMS", 
            logo: HrmsLogo, 
            feaImg: hrmsFeaImg,
            content: "Known for its simplicity and intuitive design, it’s great for small to medium-sized businesses. Features include applicant tracking, employee records management, and performance evaluations.", 
            userImg: mmUser1,
            userName: "George Mabey",
            userDesignation: "CEO, Pixelpay",
        },
        { id: 4, 
          navLink: '/product-digybooks',
          title: "Digy Books", 
          logo: DigyBooksLogo, 
          feaImg: digyBooksFeaImg,
          content: "Users appreciate DigiBooks for its affordability and comprehensive feature set. The platform's integration with other Digylax products is highlighted as a significant advantage.", 
          userImg: mmUser3,
          userName: "Marcus Bergson",
          userDesignation: "Marketing Specialist, Georsk",
        },
    ];

    // Handle mouse enter for a specific link
    // const handleMouseEnter = (index) => {
    //     setHoveredIndex(index); // Update hovered index
    // };

    // Handle mouse leave (Do not reset hoveredIndex to null)
    // const handleMouseLeave = (index) => {
    //     // Keep the last hovered content visible (do not change the index)
    //     setHoveredIndex(index);
    // };

    return (
        
        <header
            className="navbar navbar-expand-lg fixed-top px-2 py-2 top-header" data-aos="light-in">
            <nav className="container-lg shadow-sm flex-wrap flex-lg-nowrap bg-white border rounded-4 px-xl-3 px-xxl-4 py-2 position-relative">
                {/* Left side Mobile Hamburger icon */}
                <button className="navbar-toggler border-0" type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuNavbar"
                    aria-controls="offcanvasMenuNavbar">
                    <FiLayers />
                </button>
                {/* Brand Logo */}
                <a onClick={() => navigate("/")} className="navbar-brand py-0 d-flex mx-auto ms-lg-0 me-lg-4" role="button">
                {/*  onClick={() => navigate("/")} */}
                    <img src={digyLogo} alt="digylax-logo" width="130" height="24" className="align-self-center" />
                </a>

                {/* Left side menus Start */}
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasMenuNavbar" aria-labelledby="offcanvasMenuNavbarLabel">
                    <div className="offcanvas-header">
                        {/* <h5 className="offcanvas-title" id="offcanvasMenuNavbarLabel">Mobile Menu Title</h5> */}
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-lg-row me-auto main-links-list">
                            <li className={`nav-item dropdown dropdown-mega position-static text-nowrap`}>
                                <button type="button" 
                                className={`btn btn-link text-decoration-none text-dark without-arrow d-inline-flex align-items-center dropdown-toggle`}
                                id="dropdownOne" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="pe-2">Products</span>
                                    <IoMdArrowDropdown size={24} className="bi" />
                                </button>
                                {/* <ul className="dropdown-menu overflow-auto" aria-labelledby="dropdownOne">
                                    <li><a className="dropdown-item cursor-pointer">Option 1</a></li>
                                    <li><a className="dropdown-item cursor-pointer">Option 2</a></li>
                                </ul> */}
                                <div className="dropdown-menu mega-menu" aria-labelledby="navbarDropdown">
                                    <Container>
                                        <Row className="my-4">
                                            {/* Mega menu Left Column ListGroup */}
                                            <Col lg={3}>
                                                <ListGroup variant="flush">
                                                    {content.map((item, index) => (
                                                    <ListGroup.Item action onClick={() => navigate(item.navLink)}
                                                        key={item.id}
                                                        onMouseEnter={() => setHoveredIndex(index)}
                                                        onMouseLeave={() => setHoveredIndex(index)}
                                                        className={`py-3 rounded-2 border ${hoveredIndex === index ? "bg-primary-subtle border-primary" : "border-white"}`}
                                                    >
                                                        
                                                        <span className="d-flex align-items-center icon-link icon-link-hover">
                                                            {item.logo === MdmLogo ?
                                                                <MdmLogo width={40} height={40} className="align-self-start rounded-2" />
                                                                :
                                                                ''
                                                            }
                                                            {item.logo === CrmLogo ?
                                                                <CrmLogo width={40} height={40} className="align-self-start rounded-2" />
                                                                :
                                                                ''
                                                            }
                                                            {item.logo === HrmsLogo ? 
                                                                <HrmsLogo width={40} height={40} className="align-self-start rounded-2" />
                                                                :
                                                                ''
                                                            }
                                                            {item.logo === DigyBooksLogo ? 
                                                                <DigyBooksLogo width={40} height={40} className="align-self-start rounded-2" />
                                                                :
                                                                ''
                                                            }
                                                            <span className="align-self-start ms-3">
                                                                <span className="fs-6 d-block fw-semibold mb-2">{item.title}</span>
                                                                <span>{item.title} Platform</span>
                                                            </span>
                                                            <FaAngleRight size={18} className="bi ms-auto" />
                                                        </span>
                                                    </ListGroup.Item>
                                                    ))}
                                                </ListGroup>
                                            </Col>

                                            {/* Mega menu Middle Column to Show Content */}
                                            <Col lg={9} className="d-none d-lg-block">
                                                <div className="content h-100 text-wrap">
                                                    <div
                                                        key={content[hoveredIndex].id}
                                                        className={`d-flex justify-content-between content-item h-100 fade-content ${hoveredIndex === hoveredIndex || hoveredIndex === null &&  hoveredIndex === 0 ? "visible" : ""}`}
                                                    >
                                                        <img src={content[hoveredIndex].feaImg} alt="digy-product-feature" className="img-fluid" style={{maxHeight: "374px"}} />
                                                        <div className="ms-3 px-3 d-flex flex-column justify-content-between h-100">
                                                            <div>
                                                                <BiSolidQuoteLeft size={24} color="#e2e3e5" />
                                                                <p className="my-4">{content[hoveredIndex].content}</p>
                                                            </div>
                                                            <div className="d-flex align-items-center mt-auto">
                                                                <img src={content[hoveredIndex].userImg} alt="digy-product-user" className="img-fluid" width={80} height={80} />
                                                                <div className="ps-3">
                                                                    <h6 className="fw-semibold mb-2">{content[hoveredIndex].userName}</h6>
                                                                    <div className="small">{content[hoveredIndex].userDesignation}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </li>
                            {/* <li className={`nav-item text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark`}>
                                    Enterprise
                                </button>
                            </li>
                            <li className={`nav-item text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark`}>
                                    Customers
                                </button>
                            </li>
                            <li className={`nav-item text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark`}>
                                    About Us
                                </button>
                            </li> */}
                            <li className={`nav-item text-nowrap`}>
                                <button onClick={()=> navigate('/careers')} type="button" className={`btn btn-link text-decoration-none text-dark`}>
                                    Careers
                                </button>
                            </li>
                            {/* <li className={`nav-item dropdown text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark with-arrow angle-icon dropdown-toggle`} 
                                id="dropdownTwo" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </button>
                                <ul className="dropdown-menu overflow-auto" aria-labelledby="dropdownTwo">
                                    <li><a className="dropdown-item cursor-pointer">Option 1</a></li>
                                    <li><a className="dropdown-item cursor-pointer">Option 2</a></li>
                                </ul>
                            </li>
                            <li className={`nav-item dropdown text-nowrap`}>
                                <button type="button" className={`btn btn-link text-decoration-none text-dark with-arrow angle-icon dropdown-toggle`} 
                                id="dropdownThree" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </button>
                                <ul className="dropdown-menu overflow-auto" aria-labelledby="dropdownThree">
                                    <li><a className="dropdown-item cursor-pointer">About Us</a></li>
                                    <li><a className="dropdown-item cursor-pointer">Careers</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <Button onClick={() => navigate("/contact-us")} variant="primary" type="button" className={`rounded-pill con-btn`}>
                            Contact Us
                        </Button>
                    </div>
                </div>
                {/* // Left side menus END // */}
            </nav>
        </header>
        
    )

}
export default Header;