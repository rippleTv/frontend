import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Drop extends Component {
    // handleAccount = () => {
    //     this.props.history.push(ROUTES.USER).bind(this)
    // }
    render() { 
        return ( 
            <div className={`dropdown ${this.props.giveClass}`} >
                <div  style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent: "space-between",
                    alignItems: "center"
                    }}>
                    {this.props.contents.map(content => <div className="clickable drop--items" ><Link to={content.path}>{content.name}</Link></div>)}
                  {/* <div className="clickable drop--items" onClick={this.handleAccount} >Account</div>
                  <div className="clickable drop--items" onClick={this.handleLogOut} >Log out</div> */}
                    
            </div>
            </div>
         );
    }
}
 
export default Drop;