import React, { Component } from "react";
import icon from "../img/paysticker.png";
import logo from "../img/Ripple-Logo.png";
import Button from "../common/button";
import paypal from "../img/Paypal.png";
import footer from "../img/powerBy.png";

import { parse } from "querystring";

import Auth from "../utils/AuthService";
import withState from "../context/withState";
import * as ROUTES from "../routes";
import { Redirect } from "react-router-dom";

import {
  CardNumberElement,
  injectStripe,
  CardCVCElement,
  CardExpiryElement
} from "react-stripe-elements";

const createOptions = () => {
  return {
    style: {
      base: {
        letterSpacing: "0.025em",
        fontFamily: "Roboto",
        fontWeight: "normal",
        "::placeholder": {
          color: "#bcc1c5",
          opacity: 0.4,
          "line-height": "18px"
        },
        fontSize: "13px"
      },
      invalid: {
        color: "#9e2146",
        borderBottom: "1px solid #9e2146"
      }
    }
  };
};

class PaymentPage extends Component {
  state = {
    name: "",
    error: "",
    loading: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();
      this.setState({ loading: true });
      const { plan } = parse(this.props.location.search.slice(1));
      const { token, error } = await this.props.stripe.createToken({
        type: "card",
        name: this.state.name
      });
      if (error) {
        return this.setState({ error: error.message, loading: false });
      }
      const { data } = await Auth.subscribeUser({
        token: token.id,
        plan_id: plan
      });
      this.props.updateUserData(data);
      this.setState({ loading: false });
      this.props.history.replace(ROUTES.HOMEPAGE);
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message, loading: false });
    }
  };
  render() {
    if (this.props.isSubscribed()) {
      return <Redirect to={ROUTES.HOMEPAGE} />;
    }
    const { error, name, loading } = this.state;
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
              <CardNumberElement {...createOptions(this.props.fontSize)} />
            </div>

            <div className="paymentpage--inline ">
              <label htmlFor="" className="start">
                <CardExpiryElement {...createOptions(this.props.fontSize)} />
              </label>
              <label htmlFor="" className="end">
                <CardCVCElement {...createOptions(this.props.fontSize)} />
              </label>
            </div>

            <div
              className="paymentpage--button"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <button>
                {loading ? <span class="spinner"></span> : "Continue"}
              </button>
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

export default withState(injectStripe(PaymentPage));
