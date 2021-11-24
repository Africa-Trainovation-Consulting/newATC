import React from "react";
import Backdrop from './HOC'
import { Link } from 'react-router-dom'
function CreateNewpassword(props) {
    function continueHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    return (<>
        <span className='flex_btn'>
            <h1 style={{ textAlign: 'center' }}>
                CREATE NEW PASSWORD
            </h1>
        </span>
        <form action='post'>
            <span className="form-group">
                <label for="Password"> Confirm new password </label>
                <input type="Password" name="confirmPassword" placeholder="Confirm Password" />
            </span>
            <Link to='/passwordChanged'>
                <button type="submit" onClick={continueHandler}> Continue <svg xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 37 20" fill="none">
                    <path d="M35.5 10H2M35.5 10L27.5 18.5M35.5 10L27.5 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg></button>
            </Link>
        </form>
        {/* 
      <ForgotPassword label='Email' title='FORGOT PASSWORD'/> */}
    </>
    )
}
export default Backdrop(CreateNewpassword)