import React from "react";
import Backdrop from './HOC'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
function ForgotPassword(props) {
    return (
        <>
            <h1 className='forgot'>
                FORGOT PASSWORD
            </h1>
            <form action='post'>
                <Formgroup label='Email' htmlFor='Email' type='email' name='email' placeholder='Enter your email' />
                <ContinueBtn to='/createNewPassword' />
            </form>
            {/* 
      <ForgotPassword label='Email' title='FORGOT PASSWORD'/> */}
        </>
    )
}
export default Backdrop(ForgotPassword);