// import AOS from 'aos';
import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const MdmFaqAccordion = () => {
    
    // Init AOS Animation
    // useEffect(() => {
    //     AOS.init({
    //     });
    // }, []);

    return (
        <Accordion className='custom-icon'>
            {/* defaultActiveKey="0" */}

            <Accordion.Item eventKey="0" className='shadow-sm' data-aos="fade-left" data-aos-delay={0}>
                <Accordion.Header>Why do I need Master Data Management (MDM)?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    MDM centralizes and ensures consistency and accuracy of your critical data for better decision-making.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>How does MDM improve data quality?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    MDM continuously validates and cleanses data, maintaining its accuracy and integrity.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Is MDM easy to implement?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, it integrates smoothly with your existing systems for a hassle-free setup.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Can I customize the MDM solution for my business?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, our solution offers flexible modules to fit your unique business needs.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Will MDM help with compliance and regulations?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, it ensures your data management aligns with industry standards and regulations.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default MdmFaqAccordion;