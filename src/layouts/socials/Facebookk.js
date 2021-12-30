import React, { Component } from 'react';
import FacebookLogin  from 'react-facebook-login';

const Facebookk = () => {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        console.log(response)
    }

    componentClicked = () => console.log('clicked')

    return (
        <>
            
        </>
    )
}

export default Facebookk
