import React, { Component } from 'react';
import NavBar from '../common/navbar';
import DashNav from '../common/dashNav';
import UserPassword from '../components/UserPassword';
import UserProfile from './UserProfile';
import UserSub from './UserSubscription';

class UserSection extends Component {
    state = { 
        bodyStatus: "profile"
     }

    handleClick = (message) => {
        this.setState({
            bodyStatus: message
        })
    }
    render() { 
        const { bodyStatus: test } = this.state;
        let mainSeg;
        switch(test){
            case "profile":
                mainSeg=<UserProfile />
            break;
            case "subscription":
                mainSeg=<UserSub />
            break;
            case "password":
                mainSeg=<UserPassword />
            break;
            default: 
                mainSeg= null
            }
        return ( 
            <div className="userprofile">
                <NavBar giveClass="user--nav"  giveClassSM="user--nav__sm"/>
                <div className="userprofile--body">
                    <DashNav onClick={this.handleClick} isActive={this.state.bodyStatus}/>
                    <div className="userprofile--main">
                        {
                            mainSeg
                        }
                    </div>
                    
                    
                </div>
            </div>
         );
    }
}
 
export default UserSection;