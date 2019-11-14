import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Elements } from "react-stripe-elements";

import AsyncStripeProvider from "./components/AsyncStripeProvider";

import * as ROUTES from "./routes";
import AuthService from "./utils/AuthService";

import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import PaymentPage from "./components/payment";
import HomePage from "./components/HomePage";
import SeriesPage from "./components/SeriesPage";
import SubscriptionPage from "./components/SubscriptionPage";
import MoviesPage from "./components/MoviesPage";
import UserSection from "./components/UserSection";
import ListPage from "./components/ListPage";
import StreamingPage from "./components/StreamingPage";
import NavPop from "./common/navPop";
import VerifyScreen from "./components/VerifyScreen";
import ConfirmScreen from "./components/ConfirmScreen";
import Admin from './components/Admin';
import MoviePreview from './components/MoviePreview';
import SeriesPreview from './components/SeriesPreview';

import { Consumer } from "./context";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    render={props =>
      AuthService.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: ROUTES.SIGN_IN, state: { from: props.location } }}
        />
      )
    }
    {...rest}
  ></Route>
);

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      {({ user, isSubscribed }) => {
        if (user && !isSubscribed()) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.SUBSCRIPTION
              }}
            />
          );
        }

        return <PrivateRoute {...rest} component={Component} />;
      }}
    </Consumer>
  );
};

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.isAuthenticated() ? (
        <Redirect to={ROUTES.HOMEPAGE} />
      ) : (
        <Component {...props} />
      )
    }
  ></Route>
);

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />

        <Route path={ROUTES.NAVPOP} component={NavPop}></Route>
        <Route path={ROUTES.VERIFY} component={VerifyScreen}></Route>
        <Route path={ROUTES.CONFIRM} component={ConfirmScreen}></Route>
        <PublicRoute path={ROUTES.SIGN_IN} component={Login} />
        <PublicRoute path={ROUTES.SIGN_UP} component={Signup} />

        <PrivateRoute
          path={ROUTES.PAYMENT}
          render={props => (
            <AsyncStripeProvider apiKey="pk_test_UPzrXmje24b500GtGySA7bdx00ai4PpbFZ">
              <Elements>
                <PaymentPage fontSize={16} {...props} />
              </Elements>
            </AsyncStripeProvider>
          )}
        />
        <PrivateRoute path={ROUTES.USER} component={UserSection} />
        <PrivateRoute path={ROUTES.SUBSCRIPTION} component={SubscriptionPage} />
        <ProtectedRoute path={ROUTES.HOMEPAGE} component={HomePage} />
        <ProtectedRoute path={ROUTES.SERIESPAGE} component={SeriesPage} />
        <ProtectedRoute path={ROUTES.MOVIES} component={MoviesPage} />
        <ProtectedRoute path={ROUTES.ListPage} component={ListPage} />
        <ProtectedRoute path={ROUTES.STREAM} component={StreamingPage} />
          <ProtectedRoute path={ROUTES.ADMIN} component={Admin}/>
          <Route path={ROUTES.MOVIEPREVIEW} component={MoviePreview}></Route>
				<Route path={ROUTES.SERIESPREVIEW} component={SeriesPreview}></Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
