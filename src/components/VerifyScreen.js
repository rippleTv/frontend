import React, { Component } from 'react';
import logo from '../img/Ripple-Logo.png';
import verifyImg from '../img/confirmScreen.png'
import Button from '../common/button';

class VerifyScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="verifyscreen">

                <div className="verifyscreen--header">
                    <img src={logo} alt="ripple logo"/>
                </div>
                <div className="verifyscreen--body">

                    <img src={verifyImg} alt=""/>
                    <p className="verify--firstP">You are almost there, We just you a confirmation mail</p>
                    <p className="verify--lastP">please kindly verify the mail</p>
                    <Button  label="VERIFY EMAIL" path="/confirm" buttonType={true} />
                </div>

            </div>
         );
    }
}
 
export default VerifyScreen; 