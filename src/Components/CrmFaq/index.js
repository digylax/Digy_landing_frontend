import AOS from 'aos';
import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const CrmFaqAccordion = () => {
    
    // Init AOS Animation
    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        <Accordion className='custom-icon'>
            {/* defaultActiveKey="0" */}

            <Accordion.Item eventKey="0" className='shadow-sm' data-aos="fade-left" data-aos-delay={0}>
                <Accordion.Header>What is Digylax CRM?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Digylax CRM is a platform designed to help businesses manage customer interactions, 
                    optimize sales workflows, and enhance customer satisfaction.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>How can Digylax CRM help my business?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Digylax CRM integrates customer data, streamlines workflows, and provides actionable insights, 
                    enabling your team to foster stronger relationships and close deals more efficiently.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Can I integrate Digylax CRM with other tools?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, Digylax CRM offers integration capabilities with various third-party applications, 
                    ensuring seamless workflows across your business.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Does Digylax CRM support mobile access?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, Digylax CRM is mobile-friendly, allowing you to manage customer relationships and 
                    sales on-the-go from any device.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Is my data secure with Digylax CRM?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Absolutely. We prioritize data security with encrypted connections, secure storage, 
                    and regular backups to keep your customer data safe.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default CrmFaqAccordion;