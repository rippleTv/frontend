import React, { Component } from 'react';
import icon from '../img/paysticker.png';
import logo from '../img/Ripple-Logo.png';
import Button from '../common/button';
import paypal from '../img/Paypal.png';
import footer from '../img/powerBy.png';

import {
	CardNumberElement,
	injectStripe,
	CardCVCElement,
	CardExpiryElement
} from 'react-stripe-elements';
const handleBlur = () => {
	console.log('[blur]');
};
const handleChange = change => {
	console.log('[change]', change);
};
const handleClick = () => {
	console.log('[click]');
};
const handleFocus = () => {
	console.log('[focus]');
};
const handleReady = () => {
	console.log('[ready]');
};

const createOptions = () => {
	return {
		style: {
			base: {
				letterSpacing: '0.025em',
				fontFamily: 'Roboto',
				fontWeight: 'normal',
				'::placeholder': {
					color: '#bcc1c5',
					opacity: 0.4,
					'line-height': '18px'
				},
				fontSize: '13px'
			},
			invalid: {
				color: '#9e2146',
				borderBottom: '1px solid #9e2146'
			}
		}
	};
};

class PaymentPage extends Component {
	state = {
		name: '',
		error: ''
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.props.stripe) {
			this.props.stripe
				.createToken({ type: 'card', name: this.state.name })
				.then(payload => {
					if (payload.error) {
						return this.setState({ error: payload.error.message });
					}
					console.log('[token]', payload);
				});
		} else {
			this.setState({
				error:
					'An Error occured while processing your details. Please Try again'
			});
		}
	};
	render() {
		const { error, name } = this.state;
		const invalid = !name;
		return (
			<div className="paymentpage">
				<div className="paymentpage--header">
					<img src={logo} alt="ff" />
					<Button
						label="SIGN OUT"
						width="112px"
						height="42px"
						buttonType={false}
					/>
				</div>

				<div className="paymentpage--body">
					<form
						className="paymentpage--form"
						action=""
						onSubmit={this.handleSubmit}
					>
						{error && <p className="error-message">{error}</p>}
						<img
							className="sticker"
							src={icon}
							width="143px"
							height="105px"
							alt=""
						/>
						<div className="form-input">
							<input
								type="text"
								placeholder="Card Holder Name"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>

						<div className="form-payment-input">
							<CardNumberElement
								onBlur={handleBlur}
								onChange={handleChange}
								onFocus={handleFocus}
								onReady={handleReady}
								{...createOptions(this.props.fontSize)}
							/>
						</div>

						<div className="paymentpage--inline ">
							<label htmlFor="" className="start">
								<CardExpiryElement
									onBlur={handleBlur}
									onChange={handleChange}
									onFocus={handleFocus}
									onReady={handleReady}
									{...createOptions(this.props.fontSize)}
								/>
							</label>
							<label htmlFor="" className="end">
								<CardCVCElement
									onBlur={handleBlur}
									onChange={handleChange}
									onFocus={handleFocus}
									onReady={handleReady}
									{...createOptions(this.props.fontSize)}
								/>
							</label>
						</div>
						<div
							className="paymentpage--button"
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Button
								label="CONTINUE"
								width="183px"
								height="40px"
								disabled={invalid}
								buttonType={true}
							/>
						</div>
					</form>
				</div>

				<div className="paymentpage--footer">
					<img className="footer--start" src={footer} alt="" />
					<img className="footer--end" src={paypal} alt="" />
				</div>
			</div>
		);
	}
}

export default injectStripe(PaymentPage);
