import React from 'react';
import Backdrop from './HOC'
import { Link } from 'react-router-dom'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
function Login(props) {
    return (
        <>
            <Link to='/forgotpassword' style={{ color: '#262B33', marginTop: '1em' }}>Don’t have an account?</Link>

            <span className="flex_btn">
                <button className="login active">
                    Login to continue
                </button>
                <button className="signUp ">
                    Sign up to continue
                </button>
            </span>

            <div className='Or'>
                <p className="goggle">
                    Login with <span style={{ color: 'blue', fontSize: '18px' }}>G</span><span style={{ color: 'red', fontSize: '18px' }}>o</span><span style={{ color: 'yellow', fontSize: '18px' }}>o</span><span style={{ color: 'blue', fontSize: '18px' }}>g</span><span style={{ color: 'green', fontSize: '18px' }}>l</span><span style={{ color: 'red', fontSize: '18px' }}>e </span>
                </p>
                OR <p className="facebook " >
                    <span style={{ color: 'blue', fontSize: '18px' }}> Facebook </span>
                </p>
            </div>
            <form action="post">
                <Formgroup label='Email' htmlFor='Email' type='email' name='email' placeholder='Enter your email' />
                <Formgroup label='Password' htmlFor='password' type='password' name='password' placeholder='Enter password' />
                <ContinueBtn to='signup' />
            </form>
            <Link to='/forgotpassword' style={{ color: '#262B33', marginTop: '1em' }}>Forgot Password?</Link>
        </>
    )
}
export default Backdrop(Login);