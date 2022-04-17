import React from 'react';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Carousel></Carousel>
            </div>
            <div className='container mt-5'>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;