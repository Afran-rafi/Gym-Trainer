import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import Menubar from '../Menubar/Menubar';

const SignUp = () => {
    return (
        <div>
            <form onSubmit className='login-container'>
                <div className='login mt-5 p-3 shadow'>
                    <h3 className='text-center mt-3 text-primary'>Sign UP</h3>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label htmlFor="email">Email</label> <br />
                        <input onBlur type="email" name="" id="1" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label htmlFor="password">Password</label> <br />
                        <input onBlur type="password" name="" id="2" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label htmlFor="confirm-password">Confirm Password</label> <br />
                        <input onBlur type="password" name="" id="3" required />
                    </div>
                    <input className='container border-0 mt-4 btn-primary' type="submit" value="Sign Up" />
                    <div className='d-flex justify-content-center font mt-2'>
                        <small>Already have an account ?</small><CustomLink className='link-color ms-2 fw-bold' to='/login'>Login</CustomLink>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <hr />
                        or
                        <hr />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;