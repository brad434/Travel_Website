import React from 'react'
import '../styles/home.css'


import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../Shared/Subtitle'
import worldImg from './../assets/images/world.png'

import SearchBar from '../Shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';


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
                                    <span className='highlight'> memories</span>
                                </h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis at distinctio adipisci nihil placeat architecto saepe optio voluptatum excepturi expedita animi quis ipsum quos, aut beatae, vel, alias amet? Assumenda deleniti dolor magni quisquam voluptate modi fugiat veritatis, veniam quod aliquid fuga saepe sed, iusto, ratione temporibus et nemo dicta?</p>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-4">
                                <video src={heroVideo} alt="" controls />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                        <SearchBar />
                    </Row>
                </Container>
            </section>
            {/* ============== hero section end ============== */}

            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className='services__subtitle'>What we serve</h5>
                            <h2 className='services__title'>We offer our best services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            {/* ================== Featured Tour Section START ====================== */}

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={'Explore'} />
                            <h2 className='featured__tour-title'>Our featured tours</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>
            {/* ================== Featured Tour Section END ====================== */}

            {/* ================== EXPERIENCE SECTION START ====================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience__content">
                                <Subtitle subtitle={"Experience"} />
                                <h2>
                                    With our all experience <br />we will serve you
                                </h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    <br />Culpa sapiente adipisci voluptates eius, corporis doloribus.
                                </p>
                            </div>

                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful Trip</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular Clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful Trip</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'></Col>
                    </Row>
                </Container>
            </section>



            {/* ================== EXPERIENCE SECTION END ====================== */}



        </>
    )
}

export default Home