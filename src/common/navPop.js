import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


const NavPop = (props) => {
    return ( 
        <div className={`navpop--container ${props.giveClass}`}  onClick={props.handleClick}>
            
                <ul className="navpop"  >
                    <li className="navpop--item"><NavLink to="/home">Home</NavLink></li>
                    <li className="navpop--item"><NavLink to="/movies">Movies</NavLink></li>
                    <li className="navpop--item"><NavLink to="/series">Series</NavLink></li>
                    <li className="navpop--item"><NavLink to="/lists">My List</NavLink></li>
                </ul>
        
        </div>
     );
}
 
export default NavPop;