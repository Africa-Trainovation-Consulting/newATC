import React from 'react';
import Backdrop from './HOC'
import Spanning from '../layouts/Spanning';
import ContinueBtn from "../layouts/ContinueBtn";
function ChoosePlan(props) {
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
                    <select name="paymentType" placeholder="Freelancer">
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
                <ContinueBtn to='/' />
            </form>
        </>
    )
}
export default Backdrop(ChoosePlan);