
import React from "react";
import Backdrop from './HOC'
import { Link } from 'react-router-dom'
import Formgroup from '../layouts/FormGroup';
function SignUp(props) {
    function continueHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    return (
        <>
            <span className="flex_btn">
                <button className="login">
                    Login to continue
                </button>
                <button className="signUp active">
                    Sign up to continue
                </button>
            </span>
            <form action="post">
                <Formgroup label='Full Name' htmlFor='name' type='text' name='name' placeholder='Enter your full name' />
                <Formgroup label='Email' htmlFor='Email' type='email' name='email' placeholder='Enter your email' />
                <Formgroup label='Home Address' htmlFor='Address' type='address' name='address' placeholder='Enter your home address' />
                <Formgroup label='Phone Number' htmlFor='Phone' type='tel' name='phone' placeholder='Enter phone number' />
                <Formgroup label='Password' htmlFor='password' type='password' name='password' placeholder='Enter password' />
                <Formgroup label='Confirm Password' htmlFor='password' type='password' name='confirmPassword' placeholder='Confirm password' />
                <Link to='/upload'>
                    <button type="submit" onClick={continueHandler}> Continue <svg xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 37 20" fill="none">
                        <path d="M35.5 10H2M35.5 10L27.5 18.5M35.5 10L27.5 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </Link>
            </form>
        </>
    )
}
export default Backdrop(SignUp);