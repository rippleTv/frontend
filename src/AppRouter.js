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
import UserSection from './components/UserSection';
import ListPage from './components/ListPage';
import StreamingPage from './components/StreamingPage';
import NavPop from './common/navPop'
import VerifyScreen from './components/VerifyScreen';
import ConfirmScreen from './components/ConfirmScreen';

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
				<Route path={ROUTES.USER} component ={UserSection}></Route>
				<Route path={ROUTES.NAVPOP} component={NavPop}></Route>
				<Route path={ROUTES.VERIFY} component={VerifyScreen}></Route>
				<Route path={ROUTES.CONFIRM} component={ConfirmScreen}></Route>
				<PrivateRoute path={ROUTES.SUBSCRIPTION} component={SubscriptionPage} />
				<PrivateRoute path={ROUTES.MOVIES} component={MoviesPage} />
				<PrivateRoute path={ROUTES.ListPage} component={ListPage} />
				<PrivateRoute path={ROUTES.STREAM} component={StreamingPage} />
				<PrivateRoute path={ROUTES.USER} component={UserSection} />
			</Switch>
		</Router>
	);
}

export default AppRouter;
