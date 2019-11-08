import React, { Component } from 'react';
import card from './../img/mastercard.png';


class UserSub
 extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                
                    <div className="subscriptionpage--userheader">
                        <h3>Add / Remove Card</h3>
                        
                        <div className="cardplus">
                            <img src={card} alt="" width ="327" height= "200"/>
                            <div className="plus--sign">
                                +
                            </div>
                        </div>
                       
                    </div>

                    <div className="subscriptionpage--userbottom">
                        <h3>Subscriptions</h3>

                        <div className="subuser--button">
                            <span className="subuser--button__first">Basic</span> 
                            <span className="subuser--button__second">$7.99 per month</span>
                        </div>

                        <div className="subuser--button subuser--active">
                            <span className="subuser--button__first">Standard</span> 
                            <span className="subuser--button__second ">$9.99 per month</span>
                        </div>

                        <div className="subuser--button">
                            <span className="subuser--button__first">Premium</span> 
                            <span className="subuser--button__second">$11.99 per month</span>
                        </div>
                    </div>
            </React.Fragment>
         );
    }
}
 
export default UserSub
;