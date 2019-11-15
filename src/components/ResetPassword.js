import React, { Component } from 'react';
import ripple from '../img/Ripple-Logo.png';
import resetimage from '../img/resetimage.png';

import AuthService from '../utils/AuthService';

import { validate } from '../utils/validate';

import * as ROUTES from '../routes';

const INTIAL_STATE = {
	email: '',
	errors: {},
	loading: false,
	disabled: false,
	error: ''
};

class ResetPassword extends Component {
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
		const { email } = this.state;
		this.setState({ loading: true, disabled: true });
		AuthService.sendPasswordResetMail({ email })
			.then(response => {
				alert('Kindly Check your mail for the password reset link');
				this.props.history.push(ROUTES.SIGN_IN);
			})
			.catch(error => {
				console.error(error);
				this.setState({
					error: error.message,
					loading: false,
					disabled: false
				});
			});
	};

	render() {
		const { errors, email, loading, disabled, error } = this.state;

		const errorExists = Object.keys(errors).filter(error => errors[error]);
		const invalid = disabled || errorExists.length || email === '';
		return (
			<section className="reset__body">
				<nav className="reset__navbar">
					<img src={ripple} alt="logo"></img>
				</nav>
				<div className="reset__card">
					<img src={resetimage} alt="resetimage"></img>
					{error && (
						<p
							className="error-message"
							style={{ textAlign: 'center', padding: 0 }}
						>
							{error}
						</p>
					)}
					<h1>Reset Password</h1>
					<p>Enter your email address </p>
					<form
						action=""
						onSubmit={this.handleSubmit}
						className="reset__password__form"
					>
						<div className="reset__form__input">
							<input
								type="email"
								placeholder="E-mail"
								name="email"
								value={email}
								onChange={this.handleChange}
								onBlur={this.handleBlur}
							></input>
							{errors.email && (
								<span className="error-text">{errors.email}</span>
							)}
						</div>
						<button class="logButton" disabled={invalid}>
							{loading ? <span class="spinner"></span> : 'Reset Password'}
						</button>
					</form>
				</div>
			</section>
		);
	}
}

export default ResetPassword;
