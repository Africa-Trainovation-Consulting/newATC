import React from "react";
function flex_btn(props) {
    
    return (
        <span className="flex_btn">
            <button className="login active" >
                {props.login}
            </button>
            <button className="signUp regular">
                {props.signup}
            </button>
        </span>
    )
}
export default flex_btn;