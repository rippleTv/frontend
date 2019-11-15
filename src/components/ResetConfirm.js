import React, { Component } from 'react';
import ripple from '../img/Ripple-Logo.png';
import resetimage from '../img/resetimage.png';
import { validate } from '../utils/validate';
import AuthService from '../utils/AuthService';
import * as ROUTES from '../routes';

const INTIAL_STATE = {
	password: '',
	password2: '',
	errors: {},
	loading: false,
	disabled: false,
	error: ''
};
class ResetConfirm extends Component {
	state = {
		...INTIAL_STATE
	};

	handleChange = e => {
		const { errors } = this.state;

		const value = e.target.value;
		const name = e.target.name;
		const error = validate(value, name);

		errors[name] = error ? error : null;
		this.setState({ [name]: value, errors });
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
				console.log(response);
				this.props.history.push(ROUTES.RESETSUCCESSFUL);
			})
			.catch(error => {
				console.error(error);
				if (error.status === 401) {
					return this.props.history.push(ROUTES.RESETPASSWORD);
				}
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
			<section className="reset__confirm__body">
				<nav className="reset__confirm__navbar">
					<img src={ripple} alt="logo"></img>
				</nav>
				<div className="reset__confirm__card">
					<img src={resetimage} alt="resetimage"></img>
					<h1>Reset Password</h1>
					<form
						action=""
						className="reset__confirm__form"
						onSubmit={this.handleSubmit}
					>
						{error && <p className="error-message">{error}</p>}
						<div className="reset__confirm__input">
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

export default ResetConfirm;
