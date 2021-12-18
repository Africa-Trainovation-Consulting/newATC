import React from 'react';
import Backdrop from './HOC'
import { Link } from 'react-router-dom'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
import FlexBtn from '../layouts/Flex_btn';
import FacebookLogo from '../img/facebookLogo.svg'
import Google from '.././layouts/socials/Google'
function Login(props) {
    return (
        <>
            <span className='dont_'>
                <Link className="dont opacity" to='/signup' style={{ color: '#262B33' }}>Don't have an account?</Link>
            </span>
            <FlexBtn login='Login to continue' signup='Sign up to continue' />
            <span className='flex_btn'>
                <h3>Login with</h3>
            </span>
            <span className="flex_btn">
                <Google />
                OR
                <button className="signUp socials regular">
                    <img src={FacebookLogo} alt='facebooklogo' />  Facebook
                </button>
            </span>

            <form action="post">
                <h3 className='title'>LOGIN</h3>
                <Formgroup label='Email' htmlFor='Email' type='email' name='email' placeholder='Enter your email' />
                <Formgroup label='Password' htmlFor='password' type='password' name='password' placeholder='Enter password' />
                <ContinueBtn to='signup' />
            </form>
            <Link to='/forgotpassword' className='opacity' style={{ color: '#262B33', marginTop: '2em', fontSize: '15px' }}>Forgot Password?</Link>
        </>
    )
}
export default Backdrop(Login);