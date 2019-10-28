import React, { Component } from 'react';
import icon from '../img/paysticker.png';
import logo from '../img/Ripple-Logo.png'
import Button from '../common/button'
import paypal from '../img/Paypal.png'
import footer from '../img/powerBy.png'

class PaymentPage extends Component {
    state = {  }
    render() { 
        return (
            <div className="paymentpage"> 
                
                <div className="paymentpage--header">
                    <img src={logo} alt="ff"/>
                    <Button label="SIGN OUT" width="112px" height="42px" buttonType={false}/>
                </div>

                <div className="paymentpage--body">
                    <form className="paymentpage--form" action="">
                        <img className="sticker" src={icon} width="143px" height="105px" alt=""/>
                        <input type="text" placeholder="Card Holder Name"/>
                        <input type="text" placeholder="Card Number"  style={{
                            marginTop: "30px",
                            marginBottom: "30px"
                        }}/>
                        <div className="paymentpage--inline ">
                            <input className="start" type="text" placeholder="Expiration Month / Year" />
                            <input className="end" type="text" placeholder="CVV"/>
                        </div>
                        <div className="paymentpage--button" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                             <Button label="CONTINUE" width="183px" height="40px" buttonType={true}/>
                        </div>
                       
                    </form>
                </div>

                <div className="paymentpage--footer">
                    <img className="footer--start"src={footer} alt=""/>
                    <img className="footer--end" src={paypal} alt=""/>
                </div>
            </div>
         );
    }
}
 
export default PaymentPage;