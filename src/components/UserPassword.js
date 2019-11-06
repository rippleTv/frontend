import React, { Component } from 'react';
import padlock from '../img/padlock.png'
import Button from '../common/button';


class UserPassword extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment >
                <img id="padlockImg" src={padlock} alt="padlock"/>
                <form className="password--form">
                    <input type="text" placeholder="Current Password"/>
                    <input type="text" placeholder="New Password"/>
                </form>
                <Button label="Change Password" buttonType={true} />
            </React.Fragment>
         );
    }
}
 
export default UserPassword;