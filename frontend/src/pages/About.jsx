import React from 'react'
import CommonSection from '../Shared/CommonSection'
import { Container, Col, Row } from 'reactstrap';
import Newsletter from '../Shared/Newsletter';

const About = () => {
    return (
        <>
            <CommonSection title={'About Us'} />

            <section>
                <Container>
                    <Row>
                        <Col md="12">
                            <h3 className='text-center'>Meet Our Team</h3>
                            <img src='#'></img>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newsletter />
        </>
    )
}

export default About;