import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../Shared/Subtitle'
import worldImg from './../assets/images/world.png'

const Home = () => {
    return (
        <>
            {/* ============= hero section start ============ */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-item-center">
                                    <Subtitle subtitle={'Know Before You Go'} />
                                    <img src={worldImg} alt="" srcset="" />
                                </div>
                                <h1>Traveling opens the door to creating
                                    <span className='highlight'>memories</span>
                                </h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis at distinctio adipisci nihil placeat architecto saepe optio voluptatum excepturi expedita animi quis ipsum quos, aut beatae, vel, alias amet? Assumenda deleniti dolor magni quisquam voluptate modi fugiat veritatis, veniam quod aliquid fuga saepe sed, iusto, ratione temporibus et nemo dicta?</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ============== hero section end ============== */}
        </>
    )
}

export default Home