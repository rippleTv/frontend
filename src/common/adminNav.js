import React, { Component } from 'react';
import logo from '../img/Ripple-Logo.png'


class AdminNav extends Component {
    state = { 
        show: false
     }
     handleShow = () => {
         this.setState({
             show: !this.state.show
         })
     }
    render() { 
        return ( 
            <React.Fragment>
            <div className="adminnav">
                <img src={logo} alt=""/>
                <i className="fas fa-user-circle"></i>
            </div>

            <div className="adminnav__sm" >
                <i className="fas fa-bars" onClick={this.handleShow}></i>
                <img src={logo} alt=""/>
                <i className="fas fa-user-circle"></i>
            </div>

        {  this.state.show &&  <div className="adminnav--overlay" onClick={this.handleShow}>
                <div className="adminnav--sidebar">
                    <ul className="adminnav--content">
                        <li className="adminnav--items" onClick={() => this.props.handleRoute("upload")}>Movie Uploads</li>
                        <li className="adminnav--items" onClick={() => this.props.handleRoute("list")}>Movie List</li>
                        <li className="adminnav--items" onClick={() => this.props.handleRoute("payment")}>Payment</li>
                        <li className="adminnav--items" onClick={() => this.props.handleRoute("log out")}>Log Out</li>
                    </ul>
                </div>
            </div>}
            </React.Fragment>
         );
    }
}
 
export default AdminNav;