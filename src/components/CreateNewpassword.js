import React from "react";
import Backdrop from './HOC'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
function CreateNewpassword(props) {
    return (<>
            <h1 className='forgot'>
                CREATE NEW PASSWORD
            </h1>
        <form action='post'>
            <Formgroup label='Confirm new Password' htmlFor='password' type='password' name='confirmPassword' placeholder='Confirm password' />    
            <ContinueBtn to='/passwordChanged' />
        </form>
        {/* 
      <ForgotPassword label='Email' title='FORGOT PASSWORD'/> */}
    </>
    )
}
export default Backdrop(CreateNewpassword)