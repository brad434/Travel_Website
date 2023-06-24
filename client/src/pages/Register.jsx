import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../../src/styles/login.css'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleClick = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (!res.ok) {
                const result = await res.json();
                alert(result.message)
                return;
            };


            const result = await res.json()
            console.log(result.data)

            dispatch({ type: 'REGISTER_SUCCESS' });
            navigate('/login')

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col xs="8" >
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Register</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="text" placeholder="Username" required id='username' value={credentials.username} onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="text" placeholder="Email" required id='email' value={credentials.email} onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id='password' value={credentials.password} onChange={handleChange} />
                                    </FormGroup>
                                    <Button type="submit" className="btn secondary__btn auth__btn">Create Account</Button>
                                </Form>
                                <p>Already have an account?
                                    <Link to='/login'>Login</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Register