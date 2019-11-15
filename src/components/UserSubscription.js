import React, { Component } from 'react';
import card from './../img/mastercard.png';

import withState from '../context/withState';

const formatAmount = x =>
	(x / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

class UserSub extends Component {
	state = {};
	render() {
		const { plans, user } = this.props;
		console.log(plans, user);
		return (
			<div className="user_subscriptionpage">
				<div className="subscriptionpage--userheader">
					<h3>Add / Remove Card</h3>

					<div className="cardplus">
						<img src={card} alt="" width="327" height="200" />
						<div className="plus--sign">+</div>
					</div>
				</div>

				<div className="subscriptionpage--userbottom">
					<h3>Subscriptions</h3>

					{plans.map(plan => {
						let isActive = plan.plan_id === user.subscription.plan_id;
						const className = isActive
							? `subuser--active subuser--button`
							: 'subuser--button';
						return (
							<div class="subuser--section ">
								<div className={className}>
									<span className="subuser--button__first">{plan.name}</span>
									<span className="subuser--button__second">
										{formatAmount(plan.amount)} per month
									</span>
								</div>

								{isActive && (
									<button
										className="subuser--cancel"
										onClick={this.props.handleModal}
									>
										x
									</button>
								)}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default withState(UserSub);
