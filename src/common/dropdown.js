import React, { Component } from 'react';

class Drop extends Component {
    
    render() { 
        return ( 
            <div className="dropdown" >
                <div  style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent: "space-between",
                    alignItems: "center"
                    }}>
                    {this.props.contents.map(content =><div className="clickable drop--items">{content}</div> )}
                    
            </div>
            </div>
         );
    }
}
 
export default Drop;