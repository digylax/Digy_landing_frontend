import Accordion from 'react-bootstrap/Accordion';

const HrmsFaqAccordion = () => {
    return (
        <Accordion className='custom-icon'>
            {/* defaultActiveKey="0" */}

            <Accordion.Item eventKey="0" className='shadow-sm' data-aos="fade-left" data-aos-delay={0}>
                <Accordion.Header>What is HRMS and how can it help my business?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    HRMS simplifies HR tasks like payroll, attendance, and performance management. 
                    It automates processes, increases efficiency, and ensures compliance.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Is the HRMS platform customizable?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, our HRMS can be customized to suit your business needs, adjusting settings and workflows as required.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>How secure is my data with your HRMS?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Your data is secure with advanced encryption and cloud storage, ensuring confidentiality and safety.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>Can I access the HRMS on mobile devices?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Yes, our HRMS is mobile-friendly, allowing you to manage HR tasks from any device.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className='shadow-sm' data-aos="fade-left" data-aos-delay={500}>
                <Accordion.Header>How can I get started with your HRMS?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    Simply schedule a demo or choose a pricing plan, and our team will guide you through the setup process.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default HrmsFaqAccordion;