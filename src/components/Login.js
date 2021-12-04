import React from 'react';
import Backdrop from './HOC'
import { Link } from 'react-router-dom'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
function Login(props) {
    return (
        <>
            <span className='dont_'>
                <Link className="dont" to='/forgotpassword' style={{ color: '#262B33' }}>Don’t have an account?</Link>
            </span>
            <span className="flex_btn">
                <button className="login active">
                    Login to continue
                </button>
                <button className="signUp ">
                    Sign up to continue
                </button>
            </span>
            <div className='Or'>
                    Login with <span style={{ color: 'blue', fontSize: '16px', paddingLeft: '10px'}}>G</span>
                    <span style={{ color: 'red', fontSize: '16px' }}>o</span>
                    <span style={{ color: 'yellow', fontSize: '16px' }}>o</span>
                    <span style={{ color: 'blue', fontSize: '16px' }}>g</span>
                    <span style={{ color: 'green', fontSize: '16px' }}>l</span>
                    <span style={{ color: 'red', fontSize: '16px' }}>e </span>
               <span className='or_'> OR </span>
                    <span style={{ color: 'blue', fontSize: '16px' }}> Facebook </span>
                
            </div>
            <form action="post">
                <h3 className='title'>LOGIN</h3>
                <Formgroup label='Email' htmlFor='Email' type='email' name='email' placeholder='Enter your email' />
                <Formgroup label='Password' htmlFor='password' type='password' name='password' placeholder='Enter password' />
                <ContinueBtn to='signup' />
            </form>
            <Link to='/forgotpassword' style={{ color: '#262B33', marginTop: '2em', fontSize:'12px' }}>Forgot Password?</Link>
        </>
    )
}
export default Backdrop(Login);