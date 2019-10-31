import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StripeProvider, Elements } from 'react-stripe-elements';

import * as ROUTES from './routes';

import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import PaymentPage from './components/payment';
import HomePage from './components/HomePage';
import SubscriptionPage from './components/SubscriptionPage';

function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.LANDING} component={LandingPage}></Route>
				<Route path={ROUTES.SIGN_IN} component={Login}></Route>
				<Route path={ROUTES.SIGN_UP} component={Signup}></Route>
				<Route
					path={ROUTES.PAYMENT}
					render={() => (
						<StripeProvider apiKey="pk_test_UPzrXmje24b500GtGySA7bdx00ai4PpbFZ">
							<Elements>
								<PaymentPage fontSize={16} />
							</Elements>
						</StripeProvider>
					)}
				></Route>
				<Route path={ROUTES.HOMEPAGE} component={HomePage}></Route>
				<Route path={ROUTES.SUBSCRIPTION} component={SubscriptionPage}></Route>
			</Switch>
		</Router>
	);
}

export default AppRouter;
