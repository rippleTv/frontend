import React, { Component } from 'react';
import * as ROUTES from '../routes';

import Validate from '../utils/validate';
import AuthService from '../utils/AuthService';

const INTIAL_STATE = {
	email: '',
	password: '',
	loading: false,
	disabled: false,
	errors: {},
	error: ''
};

class Login extends Component {
	state = { ...INTIAL_STATE };

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleBlur = e => {
		const { errors } = this.state;
		const value = e.target.value;
		const name = e.target.name;
		const error = Validate(value, name);

		errors[name] = error ? error : undefined;

		this.setState({ errors });
	};

	routeToSignup = () => {
		this.props.history.push(ROUTES.SIGN_UP);
	};

	handleFormSubmit = e => {
		e.preventDefault();

		const { email, password } = this.state;
		const user = { email, password };
		this.setState({ loading: true, disabled: true });

		AuthService.login(user)
			.then(response => {
				AuthService.setToken(response.data.token);
				this.props.history.push(ROUTES.HOMEPAGE);
				this.setState({ ...INTIAL_STATE });
				// this.
			})
			.catch(error => {
				this.setState({ error: error.message });
			});
	};
	render() {
		const { email, password, errors, loading, disabled, error } = this.state;

		const errorExists = Object.keys(errors).filter(error => error);
		const invalid =
			disabled || !errorExists.length || email === '' || password === '';
		return (
			<div className="login">
				<div className="login_aside">
					<img src="logo1.png" alt="logo"></img>
					<div className="login_aside_body">
						<h2>Watch Great Nollywood movies</h2>
						<h3>Thousands of Movies. Watch on any device</h3>
						<button className="signButton" onClick={this.routeToSignup}>
							SIGN UP
						</button>
					</div>
				</div>
				<form action="" className="login_form" onSubmit={this.handleFormSubmit}>
					<button className="google">
						<img src="googleLogo.png" alt="g"></img> LOG IN WITH GOOGLE
					</button>

					<div className="middleman">
						<hr></hr> OR <hr></hr>
					</div>

					{error && <p className="error-message">{error}</p>}

					<div className="form_input">
						<input
							type="email"
							placeholder="E-mail"
							className={errors.email ? 'invalid__input' : ''}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							name="email"
						></input>
						{errors.email && <span className="error-text">{errors.email}</span>}
					</div>
					<div className="form_input">
						{' '}
						<input
							type="password"
							placeholder="Password"
							value={password}
							name="password"
							className={errors.password ? 'invalid__input' : ''}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
						/>
						{errors.password && (
							<span className="error-text">{errors.password}</span>
						)}
					</div>
					<div className="form_input">
						<button class="logButton" disabled={invalid}>
							{loading ? <span class="spinner"></span> : 'Log In'}
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
