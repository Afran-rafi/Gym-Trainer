import React from 'react';
import Menubar from '../Menubar/Menubar';
import Avatar from '../../Images/AvatarMaker .png'
import './About.css'

const About = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div style={{ height: '65vh' }} className='container mt-5'>
                <div className='d-flex justify-content-center'>
                    <img className='border rounded-circle' src={Avatar} alt="" />
                </div>
                <div>
                    <h5 className='text-center text-orchid'>Afran_Rafi</h5>
                </div>
                <div className='container mt-5 d-flex justify-content-center'>
                    <p>Assalamu Walaikum Everyone . I am <span className='fw-bold'>Afran_Rafi</span> . Inter second year student. In 2022 , I set a Goal . <br /> That goal is to acquire some of my own skills and to do a good job with that skill. <br /> For that I enroll in this course and keep trying will my best.</p>
                </div>
                <div>
                    <p className='fw-bold text-center'> NOTE:- Amr kono professional pic nei. bcz 4 month dhore bahire jauyar time pai nah. tai ai cartoon ta use korechi... he he (emoji)..</p>
                </div>
            </div>
        </div>
    );
};

export default About;