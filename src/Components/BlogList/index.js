import { Row, Col, Card, Button } from 'react-bootstrap';
import blogBg1 from "../../assets/images/blog/1-blog-bg.jpg";
import blogBg2 from "../../assets/images/blog/2-blog-bg.jpg";
import blogBg3 from "../../assets/images/blog/3-blog-bg.jpg";
import { MdKeyboardArrowRight } from 'react-icons/md';

const blogList = [
    {
        id: 1,
        bgImg: blogBg1,        
        category: "Category 1",
        readTime: 5,
        blogTitle: "10 Essential Features to Look for in a CRM System",
        content:
            "Not all CRM systems are created equal, and choosing the right one can make or break your sales and ...",
        readMoreLink: "",
    },
    {
        id: 2,
        bgImg: blogBg2, 
        category: "Category 2",
        readTime: 2,
        blogTitle: "Why SaaS is the Future of Business Software",
        content:
            "Gone are the days of clunky, on-premise software. The SaaS model has revolutionized how ...",
        readMoreLink: "",
    },
    {
        id: 3,
        bgImg: blogBg3,        
        category: "Category 3",
        readTime: 4,
        blogTitle: "The ROI of Investing in an HRMS Platform",
        content:
            "Investing in an HRMS isn’t just about convenience—it’s about driving measurable ROI for your business...",
        readMoreLink: "",
    },
];

const BlogList = () => {
    return (
        <Row xs={1} sm={2} md={3} className="g-3 g-xl-4">
            {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
            {blogList.map((_, idx) => (
                <Col key={idx}>
                    <Card className='h-100 border-0'>
                        <Card.Img variant="top" src={blogList[idx].bgImg} />
                        <Card.Body className='px-0'>
                            <p className='mt-2 mb-4'>
                                <span className='px-2 py-1 bg-secondary-subtle fw-medium'>{blogList[idx].category}</span> 
                                <span className='fw-medium ps-3'>{blogList[idx].readTime} {' '} min read</span>
                            </p>
                            <Card.Title className='text-truncate-v truncate-2'>{blogList[idx].blogTitle}</Card.Title>
                            <Card.Text className='text-truncate-v truncate-2'>
                                {blogList[idx].content}
                            </Card.Text>
                            <Card.Text>
                                <Button variant="link" href={blogList[idx].readMoreLink} className='d-inline-flex align-items-center fs-14 ps-0 icon-link icon-link-hover text-dark'>
                                    <span className='lh-1'>Read more</span>
                                    {/* <FaAngleRight className="bi ms-1" /> */}
                                    <MdKeyboardArrowRight size={20} className="fs-5 bi" />
                                </Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default BlogList;