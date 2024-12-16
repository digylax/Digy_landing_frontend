import Accordion from 'react-bootstrap/Accordion';
import AOS from "aos";
import React, {useEffect} from 'react';

const FaqAccordion = () => {

    // Init AOS Animation
    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        <Accordion className='custom-icon'>
            {/* defaultActiveKey="0" */}

            <Accordion.Item eventKey="0" className='shadow-sm' data-aos="fade-left" data-aos-delay={0}>
                <Accordion.Header>What is Digylax's core focus?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    We provide innovative software solutions like MDM, CRM, HRMS, and more, 
                    designed to help businesses optimize operations and boost efficiency.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Is there a free trial available for Digylax products?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, we offer a free trial for most of our products so you can explore their features before committing.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>How often are your products updated?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    We regularly update our products with new features, enhancements, and security 
                    improvements to meet your business needs.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Can I customize Digylax’s products for my specific needs?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Absolutely! Our products are designed to be flexible and customizable to fit your unique business requirements.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Is my data secure with Digylax?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, we prioritize your data security with advanced encryption and robust compliance measures.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Do you offer customer support?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, our support team is always available to assist you with any questions or technical concerns.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default FaqAccordion;