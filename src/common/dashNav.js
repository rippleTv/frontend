import React, { Component } from 'react';
import NavBar from './navbar';
import dlogo from '../img/dashboard.png';
import mlogo from '../img/subscribe.png';
import plogo from '../img/lock.png';


class DashNav extends Component {
    state = {  }
    render() { 
        let isDashboardActive, isSubscriptionActive, isPasswordActive;
        isDashboardActive="dash--active"

        if(this.props.isActive === "profile"){
            isDashboardActive="dash--active"
            isSubscriptionActive =""
            isPasswordActive =""
        }

        if(this.props.isActive === "subscription"){
            isDashboardActive=""
            isSubscriptionActive ="dash--active"
            isPasswordActive =""
        }

        if(this.props.isActive === "password"){
            isDashboardActive=""
            isSubscriptionActive =""
            isPasswordActive ="dash--active"
        }
        return ( 
            <React.Fragment>
                <div className={`dash--nav ${this.props.giveClass}`} >
                    <ul className="dash--nav__list">
                        <li className={`dash--nav__item dashy ${isDashboardActive}`} onClick={() => this.props.onClick("profile")}><img src={dlogo} width="29" height="20" alt=""/> Dashboard</li>
                        <li className={`dash--nav__item ${isSubscriptionActive}`} onClick={() => this.props.onClick("subscription")}><img src={mlogo} width="21" height="20" alt=""/> Manage Subscription</li>
                        <li className={`dash--nav__item ${isPasswordActive}`} onClick={() => this.props.onClick("password")}><img src={plogo} width="16" height="21" alt=""/> Change Password</li>
                    </ul>
                </div>

                <div className={`dash--nav__sm ${this.props.giveClass}`}>
                    <ul className="dash--nav__list__sm">
                        <li className={`dash--nav__item__sm ${isDashboardActive}`} onClick={() => this.props.onClick("profile")}><img src={dlogo} id="dash--first__logo" width="29" height="20" alt=""/> </li>
                        <li className={`dash--nav__item__sm ${isSubscriptionActive}`} onClick={() => this.props.onClick("subscription")}><img src={mlogo} id="dash--second__logo" width="21" height="20" alt=""/> </li>
                        <li className={`dash--nav__item__sm ${isPasswordActive}`} onClick={() => this.props.onClick("password")}><img src={plogo} id="dash--third__logo" width="16" height="21" alt=""/> </li>
                    </ul>
                </div> 
            </React.Fragment>
            
         );
    }
}
 
export default DashNav;