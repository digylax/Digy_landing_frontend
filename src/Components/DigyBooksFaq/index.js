import AOS from 'aos';
import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const DigyBooksFaqAccordion = () => {
    
    // Init AOS Animation
    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        <Accordion className='custom-icon'>
            {/* defaultActiveKey="0" */}

            <Accordion.Item eventKey="0" className='shadow-sm' data-aos="fade-left" data-aos-delay={0}>
                <Accordion.Header>How does Digybooks simplify accounting?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    It automates accounting tasks, tracks transactions, and generates real-time reports for easy management.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Can Digybooks handle GST calculations?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, it automatically calculates GST and ensures compliance with the latest regulations.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Is Digybooks suitable for small businesses?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, Digybooks is scalable and perfect for businesses of all sizes, including small ones.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Can I access Digybooks on mobile?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, Digybooks is cloud-based, allowing secure access from any internet-enabled device.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>How does Digybooks help with receivables and payables?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    It tracks outstanding payments and liabilities, giving you better control over your cash flow
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default DigyBooksFaqAccordion;