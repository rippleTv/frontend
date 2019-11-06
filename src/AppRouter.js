import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { StripeProvider, Elements } from 'react-stripe-elements';

import * as ROUTES from './routes';
import AuthService from './utils/AuthService';

import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import PaymentPage from './components/payment';
import HomePage from './components/HomePage';
import SeriesPage from './components/SeriesPage';
import SubscriptionPage from './components/SubscriptionPage';
import MoviesPage from './components/MoviesPage';
import ListPage from './components/ListPage';
import StreamingPage from './components/StreamingPage';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			AuthService.isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{ pathname: ROUTES.SIGN_IN, state: { from: props.location } }}
				/>
			)
		}
	></Route>
);

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
				<PrivateRoute path={ROUTES.HOMEPAGE} component={HomePage} />
				<Route path={ROUTES.SERIESPAGE} component={SeriesPage}></Route>
				<PrivateRoute path={ROUTES.SUBSCRIPTION} component={SubscriptionPage} />
				<PrivateRoute path={ROUTES.MOVIES} component={MoviesPage} />
				<PrivateRoute path={ROUTES.ListPage} component={ListPage} />
				<PrivateRoute path={ROUTES.STREAM} component={StreamingPage} />
			</Switch>
		</Router>
	);
}

export default AppRouter;
