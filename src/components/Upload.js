import React from 'react';
import Backdrop from './HOC';
import Spanning from '../layouts/Spanning';
import ContinueBtn from "../layouts/ContinueBtn";
function Upload(props) {
    /* function loadfile(event) {
        let image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0])
        document.getElementById('output').style.border = "0 solid #000";
        document.getElementById('upload').style.display = "none";
        image.style.display = 'block';
        console.log(image)
    } */
    return (
        <>
            <Spanning heading='Upload Picture' />
            <h1>Upload Picture</h1>
            <form action="post">
                <label className='imageUpload' for='myphoto'  >
                    <input type='file' name='myphoto' /* onChange={loadfile} */ accept="image/*" className='inputImage' />
                    <img id='output' alt='myImage' />
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