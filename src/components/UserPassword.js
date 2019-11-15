import React, { Component } from 'react';
import Button from '../common/button';

import padlock from '../img/padlock.png';

import AuthService from '../utils/AuthService';
import { validate } from '../utils/validate';

const INTIAL_STATE = {
	password: '',
	password2: '',
	errors: {},
	loading: false,
	disabled: false,
	error: ''
};

class UserPassword extends Component {
	state = {
		...INTIAL_STATE
	};

	handleChange = e => {
		const { errors } = this.state;

		const value = e.target.value;
		const name = e.target.name;
		const error = validate(value, name);

		errors[name] = error ? error : null;
		this.setState({ [e.target.name]: e.target.value, errors });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { token } = this.props.match.params;
		const { password, password2 } = this.state;
		if (password2 !== password) {
			return;
		}

		this.setState({ loading: true, disabled: true });
		AuthService.sendPasswordReset({ password }, token)
			.then(response => {
				alert('Password was successfully changed');
			})
			.catch(error => {
				this.setState({
					error: error.message,
					loading: false,
					disabled: false
				});
			});
	};
	render() {
		const {
			errors,
			password,
			password2,
			loading,
			disabled,
			error
		} = this.state;

		const errorExists = Object.keys(errors).filter(error => errors[error]);
		const invalid =
			disabled ||
			errorExists.length ||
			!password ||
			!password2 ||
			password !== password2;
		return (
			<React.Fragment>
				<img id="padlockImg" src={padlock} alt="padlock" />
				<form className="password--form">
					{error && <p className="error-message">{error}</p>}
					<input
						type="password"
						placeholder="New Password"
						name="password"
						onChange={this.handleChange}
						value={password}
					></input>
					{errors.password && (
						<span className="error-text">{errors.password}</span>
					)}
					<input
						type="password"
						placeholder="Confirm Password"
						onChange={this.handleChange}
						name="password2"
						value={password2}
					></input>
					{errors.password2 && (
						<span className="error-text">{errors.password2}</span>
					)}
					<button className="form-button" disabled={invalid}>
						{loading ? <span class="spinner"></span> : 'Change Password'}
					</button>
				</form>
			</React.Fragment>
		);
	}
}

export default UserPassword;
