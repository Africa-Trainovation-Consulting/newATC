import React from 'react';
import { Link } from 'react-router-dom'
import Backdrop from './HOC'
import Spanning from '../layouts/Spanning';
function ChoosePlan(props) {
    function continueHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    const optionStyle = {
        borderTop: '1px solid rgba(0, 0, 0, 0.2)'
    }
    return (
        <>
          <Spanning heading='Choose a Plan' />
            <h1>Choose a Plan</h1>
            <form action="post">
                <span className="form-group">
                    <label for="inputPaymentType"> Choose a Package </label>
                    <select  name="paymentType" placeholder="Freelancer">
                        <option value="" disabled invalid selected hidden id="selected"
                            style={{ fontWeight: 'lighter', fontSize: '5px', color: '#b4b4b4' }}>
                            Freelancer
                        </option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="Team of 6">Team of 6</option>
                        <option value="Executive">Executive</option>
                        <option value="Digital Classroom">Digital Classroom </option>
                        <option value="hangouts">Hangouts</option>
                    </select>
                </span>
                <span className="form-group">
                    <label for="inputPaymentType"> Choose a Plan </label>
                    <select id="courses" name="paymentType" placeholder="Daily">
                        <option value="" disabled invalid selected hidden id="selected"
                            style={{ fontWeight: 'lighter', fontSize: '5px', color: '#b4b4b4' }}>
                            Daily
                        </option>
                        <option value="Daily" style={optionStyle}>Daily</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </span>
                <Link to='/login'>
                    <button type="submit" onClick={continueHandler}> Continue <svg xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 37 20" fill="none">
                        <path d="M35.5 10H2M35.5 10L27.5 18.5M35.5 10L27.5 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </Link>
            </form>
        </>
    )
}
export default Backdrop(ChoosePlan);