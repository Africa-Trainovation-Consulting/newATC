import React from 'react';
import Backdrop from './HOC'
import { Link } from 'react-router-dom'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
import FlexBtn from '../layouts/Flex_btn';/* 
import GoogleLogo from '../img/googleLogo.svg' */
import FacebookLogo from '../img/facebookLogo.svg'
import GoogleLogin from 'react-google-login'
function Login(props) {
    const handleFailure = (result) => {
        alert(result);
    }
    const handleLogin = (googleData) => {
        console.log(googleData);
    }
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
                <GoogleLogin buttonText='Google' clientId='299026080175-aniok2a19bldg972gn6ulkibf297h5bp.apps.googleusercontent.com' onSuccess={handleLogin} onFailure={handleFailure} cookiePolicy={'single_host_origin'}></GoogleLogin>
                   {/*  <button className="login socials regular" >
                        <img src={GoogleLogo} alt='googlelogo' />  Google
                    </button> */}
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