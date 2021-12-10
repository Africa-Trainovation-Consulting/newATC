import React from "react";
function flex_btn(props) {
    
    return (
        <span className="flex_btn">
            <button className="login active">
                Login to continue
            </button>
            <button className="signUp regular">
                Sign up to continue
            </button>
        </span>
    )
}
export default flex_btn;