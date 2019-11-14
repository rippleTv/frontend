import React from 'react';

import StateContext from './context';

const withState = Component => props => {
	return (
		<StateContext.Consumer>
			{state => <Component {...props} {...state} />}
		</StateContext.Consumer>
	);
};

export default withState;
