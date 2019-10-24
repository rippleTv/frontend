import React from 'react';
import ripple from '../img/Ripple-Logo.png';
import googleIcon from '../img/google-icon.svg';

function Signup() {
	return (
		<section className="signup">
			<div className="container">
				<header className="signup--header">
					<img src={ripple} width="135" height="36" alt="" />
				</header>
				<div className="signup--body">
					<div className="signup--content">
						<h1>Watch Great</h1>
						<h1>Nollywood Movies</h1>
						<p>Thousands of Movies. Watch on any device</p>
						<button>LOG IN</button>
					</div>
					<form action="" className="signup--form">
						<div class="signup--google">
							<img src={googleIcon} width="19" height="19"></img>
							<p>SIGN UP WITH GOOGLE</p>
						</div>
						<div className="signup-divider">
							<hr /> OR <hr />
						</div>

						<div className="form-input">
							<input type="text" placeholder="Name" />
						</div>
						<div className="form-input">
							<input type="text" placeholder="Email" />
						</div>
						<div className="form-input">
							<input type="password" placeholder="Password" />
						</div>
						<div className="form-input">
							<input type="password" placeholder="Confirm Password" />
						</div>

						<div className="signup--agreement">
							<input type="checkbox" />
							&nbsp;
							<span>
								By signing up, you agree to our&nbsp;
								<a href="#">Terms and Condition</a>
							</span>
						</div>

						<button class="signup--button">Sign up</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Signup;
