import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class Drop extends Component {
    
    render() { 
        return ( 
            <div className={`dropdown ${this.props.giveClass}`} >
                <div  style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent: "space-between",
                    alignItems: "center"
                    }}>
                    {this.props.contents.map(content =><div className="clickable drop--items" ><Link to={content.path}>{content.name}</Link></div> )}
                    
            </div>
            </div>
         );
    }
}
 
export default Drop;