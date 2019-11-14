import React, { Component } from "react";
import logo from "../img/Ripple-Logo.png";
import verifyImg from "../img/confirmScreen.png";
import Button from "../common/button";

import * as ROUTES from "../routes";

class VerifyScreen extends Component {
  state = {};
  render() {
    return (
      <div className="verifyscreen">
        <div className="verifyscreen--header">
          <div className="landing--header">
            <img src={logo} width="135" height="36" alt="" />
          </div>
        </div>
        <div className="verifyscreen--body">
          <img src={verifyImg} alt="" />
          <p className="verify--firstP">
            You are almost there, We just you a confirmation mail
          </p>
          <p className="verify--lastP">please kindly verify the mail</p>
          <Button label="LOGIN" path={ROUTES.SIGN_IN} buttonType={true} />
        </div>
      </div>
    );
  }
}

export default VerifyScreen;
