import React, { Component } from 'react';
import logo from '../img/Ripple-Site.png';
import confirmImg from '../img/Free.png';
import Button from '../common/button'

class ConfirmScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="verifyscreen">

                <div className="verifyscreen--header">
                    <img src={logo} alt="ripple logo"/>
                </div>
                <div className="confirmscreen--body">
                        <h1>Congratulations!</h1>
                        <img src={confirmImg} alt=""/>
                    
                    <Button  label="START YOUR FREE MONTH" path="/subscription" buttonType={true} />
                </div>

            </div>
         );
    }
}
 
export default ConfirmScreen;