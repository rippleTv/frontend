import React from 'react';

import StateContext from './context';
import AuthService from '../utils/AuthService';

const injectState = Component => {
	class InjectState extends React.Component {
		state = {
			user: {},
			movies: []
		};

		componentDidMount() {
			if (AuthService.isAuthenticated()) {
				this.updateUserData();
			}
		}

		updateUserData = async () => {
			const response = await AuthService.getUserData();
			console.log(response);
			response.data.isSubscribed = false;
			this.setState({ user: response.data });
		};

		render() {
			const { updateUserData, state } = this;
			const value = { ...state, updateUserData };
			return (
				<StateContext.Provider value={value}>
					<Component {...this.props} />
				</StateContext.Provider>
			);
		}
	}

	return InjectState;
};

export default injectState;
