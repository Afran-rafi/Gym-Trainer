import React from 'react';
import { useParams } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to detail: {serviceId}</h2>
            <div className='text-center'>
                <CustomLink to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </CustomLink>
            </div>
        </div>
    );
};

export default ServiceDetails;