import React, { Component } from 'react';
import '../'


const Button = (props) => {
    const className = props.buttonType ? "yellow--button": "transparent--button"
    return ( 
        <button className={className} style={{
            width: props.width,
            height: props.height,
        }}>{props.label}</button>
     );
}
 
Button.defaultProps ={
    width: "183px",
    height: "40px"
}
export default Button;