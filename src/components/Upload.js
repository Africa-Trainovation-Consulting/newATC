import React from 'react';
import Backdrop from './HOC';
import { Link } from 'react-router-dom'
import Spanning from '../layouts/Spanning';
function Upload(props) {
    function continueHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    return (
        <>
           <Spanning />
            <h1>Upload Picture</h1>
            <form action="post">
                <label className='imageUpload'>
                    <input type='file' accept="image/*" className='inputImage' />
                    <img alt=''></img>
                </label>
                <span className="flex_btn">
                    <label className="upload">
                        <input type='file' accept="image/*" className='inputImage' />
                    </label>

                    <label className="takePicture">
                        <input type='file' capture='user' accept="image/*" className='inputImage' />
                    </label>
                </span>
                <Link to='/chooseplan'>
                    <button type="submit" onClick={continueHandler}> Continue <svg xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 37 20" fill="none">
                        <path d="M35.5 10H2M35.5 10L27.5 18.5M35.5 10L27.5 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </Link>
            </form>
        </>
    )
}
export default Backdrop(Upload);