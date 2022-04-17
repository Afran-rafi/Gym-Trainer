import React from 'react';
import { useParams } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import Menubar from '../Menubar/Menubar';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <Menubar></Menubar>
            <div style={{ height: '72vh' }} className='container'>
                <h2>Welcome to detail: {serviceId}</h2>
                <h4>{ }</h4>
                <div className='text-center'>
                    <CustomLink to="/checkout">
                        <button className='btn btn-primary'>Proceed Checkout</button>
                    </CustomLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;