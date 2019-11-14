import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';
import * as ROUTES from '../routes';
import logo from '../img/Ripple-Logo.png';

import NavPop from './navPop';

class NavBar extends Component {
	state = {
		display: false
	};
	handleHamburger = () => {
		this.setState(prevState => ({ display: !prevState.display }));
	};
	render() {
		return (
			<div style={{ width: '100%' }}>
				{this.state.display == true && <NavPop giveClass="navsidepop" handleClick={this.handleHamburger}/>}
				<nav className={`${this.props.giveClass} generic--navbar`}>
					<img src={logo} alt="ripple-logo" />
					<div className="nav--items">
						<div className="nav--item"><NavLink to="/home" activeClassName="active--nav__item" >Home</NavLink></div>
						<div className="nav--item"><NavLink to="/movies" activeClassName="active--nav__item">Movies</NavLink></div>
						<div className="nav--item"><NavLink to="/series" activeClassName="active--nav__item">Series</NavLink></div>
						<div className="nav--item"><NavLink to="/lists" activeClassName="active--nav__item">My List</NavLink></div>
					</div>
					<i className="fas fa-search"></i>
					<Link to="/user"><i className="fas fa-user-circle"></i></Link>
				</nav>

				<nav className={`generic--navbar__sm ${this.props.giveClass}`}>
					<i className="fas fa-bars" onClick={this.handleHamburger}></i>
					<img src={logo} alt="ripple-logo" />

					<i className="fas fa-search"></i>
					<Link to='/user'><i className="fas fa-user-circle"></i></Link>
				</nav>

			</div>
		);
	}
}

export default NavBar;
