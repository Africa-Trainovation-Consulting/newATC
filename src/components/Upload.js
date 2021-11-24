import React from 'react';
import Backdrop from './HOC';
import { Link } from 'react-router-dom'
function Upload(props) {
    function continueHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    return (
        <>
            <span className="cancel_btn">
                <svg className='cancelButton' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 38 38" fill="none">
                    <path d="M19 0C8.52369 0 0 8.52369 0 19C0 29.4763 8.52369 38 19 38C29.4763 38 38 29.4763 38 19C38 8.52369 29.4763 0 19 0ZM19 2.92308C27.8964 2.92308 35.0769 10.1036 35.0769 19C35.0769 27.8964 27.8964 35.0769 19 35.0769C10.1036 35.0769 2.92308 27.8964 2.92308 19C2.92308 10.1036 10.1036 2.92308 19 2.92308ZM13.4754 11.3708L11.3708 13.4754L16.9012 19L11.3737 24.5246L13.4783 26.6292L19 21.1002L24.5246 26.6248L26.6292 24.5246L21.1002 19L26.6248 13.4754L24.5246 11.3708L19 16.9012L13.4754 11.3737V11.3708Z" fill="#5D5FEF" />
                </svg>
            </span>
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