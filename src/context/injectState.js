import React from "react";

import StateContext from "./context";
import AuthService from "../utils/AuthService";

const injectState = Component => {
  class InjectState extends React.Component {
    state = {
      user: null,
      movies: [],
      plans: []
    };

    componentDidMount() {
      if (AuthService.isAuthenticated()) {
        this.getUserData();
      }
    }

    isSubscribed = () => {
      const { user } = this.state;
      let isSubscribed = false;
      if (user && user.subscription) {
        const expiryDate = new Date(user.subscription.expiresAt);
        isSubscribed = expiryDate > new Date();
      }
      return isSubscribed;
    };

    updateUserData = data => {
      this.setState({ user: data });
    };

    getUserData = async () => {
      const response = await AuthService.getUserData();
      const { data } = await AuthService.getPlans();
      this.setState({ user: response.data, plans: data });
    };

    render() {
      const {
        getUserData,
        updateUserData,
        state,

        isSubscribed
      } = this;
      const value = {
        ...state,
        updateUserData,
        getUserData,
        isSubscribed
      };
      return (
        <StateContext.Provider value={value}>
          <Component {...this.props} />
        </StateContext.Provider>
      );
    }
  }

  return InjectState;
};

export default injectState;
