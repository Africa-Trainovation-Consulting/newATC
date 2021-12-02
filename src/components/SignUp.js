import React from "react";
import Backdrop from './HOC'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
function SignUp(props) {
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
            <h3 className='title'>SIGN UP</h3>
                <Formgroup label='Full Name' htmlFor='name' type='text' name='name' placeholder='Enter your full name' />
                <Formgroup label='Email' htmlFor='Email' type='email' name='email' placeholder='Enter your email' />
                <Formgroup label='Home Address' htmlFor='Address' type='address' name='address' placeholder='Enter your home address' />
                <Formgroup label='Phone Number' htmlFor='Phone' type='tel' name='phone' placeholder='Enter phone number' />
                <Formgroup label='Password' htmlFor='password' type='password' name='password' placeholder='Enter password' />
                <Formgroup label='Confirm Password' htmlFor='password' type='password' name='confirmPassword' placeholder='Confirm password' />
                <ContinueBtn to='/upload' />
            </form>
        </>
    )
}
export default Backdrop(SignUp);