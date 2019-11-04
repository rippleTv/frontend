import React, { Component } from 'react';
import NavBar from './navbar';
import dlogo from '../img/dashboard.png';
import mlogo from '../img/subscribe.png';
import plogo from '../img/lock.png';


class DashNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className={`dash--nav ${this.props.giveClass}`} >
                    <ul className="dash--nav__list">
                        <li className="dash--nav__item dashy"><img src={dlogo} width="29" height="20" alt=""/> Dashboard</li>
                        <li className="dash--nav__item"><img src={mlogo} width="21" height="20" alt=""/> Manage Subscription</li>
                        <li className="dash--nav__item"><img src={plogo} width="16" height="21" alt=""/> Change Password</li>
                    </ul>
                </div>

                <div className={`dash--nav__sm ${this.props.giveClass}`}>
                    <ul className="dash--nav__list__sm">
                        <li className="dash--nav__item__sm"><img src={dlogo} id="dash--first__logo" width="29" height="20" alt=""/> </li>
                        <li className="dash--nav__item__sm"><img src={mlogo} id="dash--second__logo" width="21" height="20" alt=""/> </li>
                        <li className="dash--nav__item__sm"><img src={plogo} id="dash--third__logo" width="16" height="21" alt=""/> </li>
                    </ul>
                </div> 
            </div>
            
         );
    }
}
 
export default DashNav;