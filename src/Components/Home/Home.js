import React from 'react';
import Menubar from '../Menubar/Menubar';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="main-container">
                <Menubar></Menubar>
                <div className='container margin-top text-white'>
                    <h1 className='font-size'>Your Best Personal <br /> Gym Trainer</h1>
                    <p className='w-50 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia, quam amet dolorem voluptate et ipsum unde laboriosam animi inventore placeat eveniet quos distinctio iste repellendus. Necessitatibus veniam quos architecto.</p>
                    <button className='btn-orchid rounded mt-4 fw-bolder'>Hire me dear</button>
                </div>
            </div>
        </div>
    );
};

export default Home;