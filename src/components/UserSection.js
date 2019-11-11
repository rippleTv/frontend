import React, { Component } from 'react';
import NavBar from '../common/navbar';
import DashNav from '../common/dashNav';
import UserPassword from '../components/UserPassword';
import UserProfile from './UserProfile';
import UserSub from './UserSubscription';

class UserSection extends Component {
    state = { 
        bodyStatus: "profile",
        showModal: false
     }

    handleClick = (message) => {
        this.setState({
            bodyStatus: message
        })
    }
    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal
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
                mainSeg=<UserSub handleModal={this.handleModal}/>
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

                   { this.state.showModal && <div className="user--overlay">
                        <div className="user--cancelmodal">
                            <p>Are You Sure You Want To</p>
                            <p>Cancel Your Subscription?</p>
                            <div className="cancelModalFooter">
                                <button className="modal--button first--modal__button" onClick={this.handleModal}><i className="fas fa-check"></i></button>
                                <button className="modal--button second--modal__button" onClick={this.handleModal}><i className="fas fa-times"></i></button>
                            </div>
                            
                        </div>
                    </div>}
    
                    
                    
                </div>
            </div>
         );
    }
}
 
export default UserSection;