import React from 'react';
import Backdrop from './HOC';
import Spanning from '../layouts/Spanning';
import ContinueBtn from "../layouts/ContinueBtn";
function Upload(props) {
    return (
        <>
           <Spanning heading='Upload Picture' />
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
                <ContinueBtn to='/chooseplan' />
            </form>
        </>
    )
}
export default Backdrop(Upload);