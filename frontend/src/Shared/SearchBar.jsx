import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

import { BASE_URL } from './../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const locationRef = useRef(null);
    const distanceRef = useRef(null);
    const maxGroupSizeRef = useRef(null);
    const navigate = useNavigate()

    // This function from line 12-20 is used for making the user input a value on each input but cannot p ass
    const searchHandler = async () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === "" || distance === "" || maxGroupSize === "") {
            return alert("All fields are imported!")
        }

        try {

            const res = await fetch(`${BASE_URL}/tours/search/getToursBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
            const url1 = `${BASE_URL}/tours/search/getToursBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`;
            console.log(url1)

            if (!res.ok) {
                alert("Something went wrong")
            }

            const result = await res.json();

            navigate(`/tours/search/getToursBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data, });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Col lg='12'>
            <div className="search__bar">
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder='Where are you going?' ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><i className="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder='Distance k/m' ref={distanceRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form__group form__group-last'>
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className="search_icon" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
}

export default SearchBar