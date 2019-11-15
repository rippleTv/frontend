import React, { Component } from 'react';

class Drop extends Component {
	render() {
		return (
			<div className={`dropdown ${this.props.giveClass}`}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					{this.props.children.map(child => (
						<div className="clickable drop--items">{child}</div>
					))}
				</div>
			</div>
		);
	}
}

export default Drop;
