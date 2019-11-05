import React from 'react';
import ripple from '../img/Ripple-Logo.png';
import Button from '../common/button';

function Subscription() {
	return (
		<section className="subscription__page">
			<div className="subscription__header">
				<img src={ripple} alt="logo"></img>
				<Button
					label={'SIGN OUT'}
					buttonType={false}
					height="4.0rem"
					width="11.2rem"
				></Button>
			</div>
			<div className="mid__text">
				<h1>Choose a plan and watch your favorite </h1>
				<h1>
					{' '}
					Nollywood movies on <span className="highlight"> Ripple</span>{' '}
				</h1>
			</div>
			<div className="subscription__body">
				<div className="subscription__card">
					<div className="card__head">
						<h1>BASIC</h1>
						<h2>$7.99 per month</h2>
					</div>
					<div className="card__body">
						<h3>Watch on laptop, TV and tablet</h3>
						<h3>Watch on 1 screen</h3>
						<h3>Unlimited movies and TV show</h3>
						<h3>Cancel anytime</h3>
						<h3>First Month Free</h3>
					</div>
					<Button
						label={'SUBSCRIBE'}
						buttonType={false}
						giveClass="sub--button"
					></Button>
				</div>
				<div className="subscription__card">
					<div className="card__head">
						<h1>STANDARD</h1>
						<h2>$9.99 per month</h2>
					</div>
					<div className="card__body">
						<h3>HD available</h3>
						<h3>Watch on laptop, TV and tablet</h3>
						<h3>Watch on 2 screen at the same time</h3>
						<h3>Unlimited movies and TV show</h3>
						<h3>Cancel anytime</h3>
						<h3>First Month Free</h3>
					</div>
					<Button
						label={'SUBSCRIBE'}
						buttonType={false}
						giveClass="sub--button"
					></Button>
				</div>
				<div className="subscription__card">
					<div className="card__head">
						<h1>PREMIUM</h1>
						<h2>$11.99 per month</h2>
					</div>
					<div className="card__body">
						<h3>HD available</h3>
						<h3>Ultra HD</h3>
						<h3>Watch on laptop, TV and tablet</h3>
						<h3>Watch on 4 screen at the same time</h3>
						<h3>Unlimited movies and TV show</h3>
						<h3>Cancel anytime</h3>
						<h3>First Month Free</h3>
					</div>
					<Button
						label={'SUBSCRIBE'}
						buttonType={false}
						giveClass="sub--button"
					></Button>
				</div>
			</div>
		</section>
	);
}

export default Subscription;
