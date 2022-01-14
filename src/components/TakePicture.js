import React, { useRef, useEffect, useState } from 'react'
import Backdrop from './HOC';
import Spanning from '../layouts/Spanning';
import ContinueBtn from "../layouts/Continuebtn_upload";
function Takepicture() {
    useEffect(() => { document.title = 'Take picture' })
    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [hasPhoto, setHasPhoto] = useState(false);
    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia ({ 
            video: {width: 1920, height: 1080}})
            .then(stream => {
                let video = videoRef.current 
                video.srcObject = stream; 
                video.play()
            })
            .catch(err => {
                console.error(err)
            })
    } 
    const takePhoto = () => {
        let camera =  document.getElementsByClassName('camera')[0]
        camera.style.display = 'none'
        const width = 414;
const height = width / (16 / 9)
let video = videoRef.current;
let photo = photoRef.current;
photo.width = width 
photo.height = height
let ctx = photo.getContext('2d')
ctx.drawImage(video, 0, 0, width, height);
setHasPhoto(true)
   }


const closePhoto = () => {
    let camera =  document.getElementsByClassName('camera')[0]
        camera.style.display = 'flex'
    let photo = photoRef.current;
    let ctx = photo.getContext('2d')
ctx.clearRect(0, 0, photo.width, photo.height)

    setHasPhoto(false)
}
    useEffect(() => {
        getVideo()
    }, [videoRef])
    return (
        <>
        <Spanning heading='Upload Picture' />
            
            <form action="post">
            <label className='imageUpload regular' htmlFor='myphoto'  >
                    <input type='file' name='myphoto' /* onChange={loadfile} */ accept="image/*" className='inputImage' />
                    <img id='output' alt='myImage' />
                </label>
            <span className="camera">
                <video ref={videoRef}></video>
                <input type='button' value='Take picture' className="takePicture regular" onClick={takePhoto} />
            </span>
            <span className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
                <input type='button' value='Retake picture' className="takePicture regular" onClick={closePhoto} />
            </span>
                <ContinueBtn to='/chooseplan' />
            </form>
        </>
    )
}

export default Backdrop(Takepicture);