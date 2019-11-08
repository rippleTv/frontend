import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../';

const Button = props => {
	const className = props.buttonType ? 'yellow--button' : 'transparent--button';
	const disabled = props.disabled ? props.disabled : false;
	return (
		<button
			className={`${props.giveClass} ${className}`}
			style={{
				width: props.width,
				height: props.height
			}}
			disabled={disabled}
		>
		<Link to={props.path}>{props.label}</Link>	
		</button>
	);
};

Button.defaultProps = {
	width: '183px',
	height: '40px'
};
export default Button;
