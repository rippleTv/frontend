import React from 'react';

function Login() {
	return (
		<div className="login">
			<div className="login_aside">
				<img src="logo1.png" alt="logo"></img>
				<div className="login_aside_body">
					<h2>Watch Great Nollywood movies</h2>
					<h3>Thousands of Movies. Watch on any device</h3>
					<button className="signButton">SIGN UP</button>
				</div>
			</div>
			<form action="" className="login_form">
				<button className="google">
					<img src="googleLogo.png" alt="g"></img> LOG IN WITH GOOGLE
				</button>

				<div className="middleman">
					<hr></hr> OR <hr></hr>{' '}
				</div>

				<div className="form_input">
					<input type="text" placeholder="E-mail"></input>

					<input type="password" placeholder="Password"></input>
					<button className="logButton">LOG IN</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
