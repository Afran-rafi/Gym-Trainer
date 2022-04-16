import CustomLink from '../CustomLink/CustomLink';
import Menubar from '../Menubar/Menubar';
import './Login.css'

const Login = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div className='login-container'>
                <form className='login mt-5 p-3 shadow'>
                    <h3 className='text-center mt-3 text-primary'>Login</h3>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="" id="1" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label htmlFor="email">Password</label> <br />
                        <input type="password" name="" id="2" required />
                    </div>
                    <button className='container border-0 mt-4 btn-primary'>Login</button>
                    <div className='d-flex justify-content-center font mt-2'>
                        <small>New to genius car?</small><CustomLink className='link-color ms-2 fw-bold' to='/signUp'>Create new Account</CustomLink>
                    </div>
                    <div className='d-flex justify-content-center align-items-center font'>
                        <small>Forget Password?</small>
                        <button className='link-color ms-2 fw-bold border-0 bg-white'>Forget Password</button>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <hr />
                        or
                        <hr />
                    </div>
                </form>

            </div>
        </div>
    );
};
export default Login;