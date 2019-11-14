import React, { Component } from "react";
import logo from "../img/Ripple-Logo.png";
import confirmImg from "../img/Free.png";
import Button from "../common/button";

import * as ROUTES from "../routes";

class ConfirmScreen extends Component {
  state = {};
  render() {
    return (
      <div className="verifyscreen">
        <div className="verifyscreen--header">
          <div className="landing--header">
            <img src={logo} width="135" height="36" alt="" />
          </div>
        </div>
        <div className="confirmscreen--body">
          <h1>Congratulations!</h1>
          <img src={confirmImg} alt="" />

          <Button
            label="START YOUR FREE MONTH"
            path={ROUTES.SIGN_IN}
            buttonType={true}
          />
        </div>
      </div>
    );
  }
}

export default ConfirmScreen;
