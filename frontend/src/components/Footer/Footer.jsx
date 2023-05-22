import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const quick__links = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/about',
        display: 'About',
    },
    {
        path: '/tours',
        display: 'Tours',
    },
]

const quick__links2 = [
    {
        path: '/gallery',
        display: 'Gallery',
    },
    {
        path: '/login',
        display: 'Login',
    },
    {
        path: '/register',
        display: 'Register',
    },
]

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sapiente placeat aperiam vitae ratione ad!</p>

                        <div className="social__links d-flex align-items-center gap-4">
                            <span>
                                <Link to='#'><i class="ri-youtube-line"></i></Link>
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer