import Accordion from 'react-bootstrap/Accordion';

const FaqAccordion = () => {
    return (
        <Accordion defaultActiveKey="0" className='custom-icon'>

            <Accordion.Item eventKey="0" className='shadow-sm'>
                <Accordion.Header>What is Digylax's core focus?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    We provide innovative software solutions like MDM, CRM, HRMS, and more, 
                    designed to help businesses optimize operations and boost efficiency.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='shadow-sm'>
                <Accordion.Header>Is there a free trial available for Digylax products?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    We provide innovative software solutions like MDM, CRM, HRMS, and more, 
                    designed to help businesses optimize operations and boost efficiency.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='shadow-sm'>
                <Accordion.Header>How often are your products updated?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    We provide innovative software solutions like MDM, CRM, HRMS, and more, 
                    designed to help businesses optimize operations and boost efficiency.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='shadow-sm'>
                <Accordion.Header>Can I customize Digylax’s products for my specific needs?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    We provide innovative software solutions like MDM, CRM, HRMS, and more, 
                    designed to help businesses optimize operations and boost efficiency.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className='shadow-sm'>
                <Accordion.Header>Is my data secure with Digylax?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    We provide innovative software solutions like MDM, CRM, HRMS, and more, 
                    designed to help businesses optimize operations and boost efficiency.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className='shadow-sm'>
                <Accordion.Header>Do you offer customer support?</Accordion.Header>
                <Accordion.Body className='pt-1'>
                    We provide innovative software solutions like MDM, CRM, HRMS, and more, 
                    designed to help businesses optimize operations and boost efficiency.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default FaqAccordion;