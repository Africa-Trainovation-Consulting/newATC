import React from "react";
import { Link } from 'react-router-dom'
import Backdrop from './HOC'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
function SignUp(props) {
    return (
        <>
            <span className='already_'>
                <Link className="already opacity" to='/' style={{ color: '#262B33' }}>Have an account?</Link>
            </span>
            <span className="flex_btn">
                <button className="login regular">
                    <Link to='/'>
                        Login to continue
                    </Link>
                </button>
                <button className="signUp active">
                    <Link to='/signup'>
                        Sign up to continue
                    </Link>
                </button>
            </span>
            <form action="post">
                <h3 className='title'>SIGN UP</h3>
                <Formgroup label='Full Name' htmlFor='name' minLength='10' maxLength="60" id='name' type='text' name='fullname' placeholder='Enter your full name'  required/>
                <Formgroup label='Email' htmlFor='email' maxLength="50" id='email' type='email' name='email' placeholder='Enter your email'  required/>
                <Formgroup label='Home Address' htmlFor='address' id='address' type='address' name='address' placeholder='Enter your home address' />
                <Formgroup label='Phone Number' htmlFor='Phone' id='Phone' minLength='11' maxLength="15"  type='tel' name='phonenumber' placeholder='Enter phone number'  required/>
                <Formgroup label='Password' id='password'  minLength='8' htmlFor='password' type='password' name='password' placeholder='Enter password' required/>
                <Formgroup label='Confirm Password'  id='confirmPassword' minLength='8' htmlFor='confirmPassword' type='password' name='confirmPassword' required placeholder='Confirm password' />
                <ContinueBtn to='/upload' />
            </form>
        </>
    )
}
export default Backdrop(SignUp);