import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as ROUTES from './routes';

import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import PaymentPage from './components/payment';
import HomePage from './components/HomePage';
import SeriesPage from './components/SeriesPage';
import DashNav from './common/dashNav';


function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.LANDING} component={LandingPage}></Route>
				<Route path={ROUTES.SIGN_IN} component={Login}></Route>
				<Route path={ROUTES.SIGN_UP} component={Signup}></Route>
				<Route path={ROUTES.PAYMENT} component={PaymentPage}></Route>
				<Route path={ROUTES.HOMEPAGE} component={HomePage}></Route>
				<Route path={ROUTES.SERIESPAGE} component={SeriesPage}></Route>
				<Route path={ROUTES.DASHNAV} component={DashNav}></Route>
			</Switch>
		</Router>
	);
}

export default AppRouter;
