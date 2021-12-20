import React, { Component } from 'react'
import FacebookLogin  from 'react-facebook-login'
import FacebookLogo from '../../img/facebookLogo.svg'
export default class Facebook extends Component {
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

    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (<FacebookLogin 
                appId="2684487048524619"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
                render={renderProps => (
                    <button className="login socials regular" type="submit" onClick={renderProps.onClick}>
                    <img src={FacebookLogo} alt='googlelogo' />  Google</button>
                  )}
                />
                )
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
