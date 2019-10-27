import React, { Component } from 'react';
import logo from '../img/Ripple-Logo.png';
import Dropp from './dropdown'

class NavBar extends Component {
    state = { 
        display: false,
     }
     handleHamburger= () => {
        this.setState( prevState => ({display: !prevState.display})
        )
     }
    render() { 
        return ( 
            <div>
                <nav className="generic--navbar">
                <img src={logo} alt="ripple-logo"/>
                <div className="nav--items">
                    <div className="nav--item">Home</div>
                    <div className="nav--item">Movies</div>
                    <div className="nav--item">Series</div>
                    <div className="nav--item">My List</div>
                </div>
                    <i className="fas fa-search"></i>
                    <i className="fas fa-user-circle"></i>
            </nav>

            <nav className="generic--navbar__sm">
                <i className="fas fa-bars" onClick={this.handleHamburger}></i>
                <img src={logo} alt="ripple-logo"/>

                <i className="fas fa-search"></i>
                <i className="fas fa-user-circle"></i>
                
            </nav>
           
            {this.state.display === true && <Dropp contents={["Home","Movies","Series","My List"]}/>}
           
            </div>

         );
    }
}
 
export default NavBar;