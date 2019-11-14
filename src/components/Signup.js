import React, { Component } from "react";
import ripple from "../img/Ripple-Logo.png";
import googleIcon from "../img/google-icon.svg";
import * as ROUTES from "../routes";

import { validate, validateSignup } from "../utils/validate";
import AuthService from "../utils/AuthService";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  password2: ""
};

class Signup extends Component {
  state = {
    fields: { ...INITIAL_STATE },
    errors: {},
    error: "",
    checked: true,
    loading: false,
    disabled: false
  };

  routeToLogin = () => {
    this.props.history.push(ROUTES.SIGN_IN);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { fields } = this.state;

    const errors = validateSignup(fields);
    if (errors) {
      this.setState({ errors });
      return;
    }
    this.setState({ loading: true, disabled: true });

    AuthService.signup(fields)
      .then(response => {
        this.props.history.push(ROUTES.VERIFY);
        this.setState({
          fields: { ...INITIAL_STATE },
          loading: false,
          errors: {}
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false,
          disabled: false
        });
      });
  };

  handleChange = e => {
    const { fields } = this.state;
    if (e.target.name === "checked") {
      return this.setState({ checked: e.target.checked });
    }
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  handleBlur = e => {
    let {
      errors,
      fields: { password2, password }
    } = this.state;
    const value = e.target.value;
    const name = e.target.name;
    const error = validate(value, name);

    errors[name] = error ? error : undefined;

    if (name === "password2") {
      errors[name] =
        password !== password2 ? "Password Doesn't Match" : undefined;
    }

    this.setState({ errors });
  };
  render() {
    const { fields, errors, error, checked, loading, disabled } = this.state;
    const { name, email, password, password2 } = fields;

    const errorExists = Object.keys(errors).filter(error => errors[error]);
    const invalid =
      disabled ||
      errorExists.length ||
      name === "" ||
      email === "" ||
      password === "" ||
      password2 === "" ||
      password !== password2 ||
      !checked;
    return (
      <section className="signup">
        <div className="container">
          <header className="signup--header">
            <img src={ripple} width="135" height="36" alt="" />
          </header>
          <div className="signup--body">
            <div className="signup--content">
              <h1>Watch Great</h1>
              <h1>Nollywood Movies</h1>
              <p>Thousands of Movies. Watch on any device</p>
              <button onClick={this.routeToLogin}>LOG IN</button>
            </div>
            <form
              action=""
              className="signup--form"
              onSubmit={this.handleFormSubmit}
            >
              <div className="signup--google">
                <img src={googleIcon} width="19" height="19" alt="google"></img>
                <p>SIGN UP WITH GOOGLE</p>
              </div>
              <div className="signup-divider">
                <hr /> OR <hr />
              </div>
              {error && <p className="error-message">{error}</p>}

              <div className="form-input">
                <input
                  type="text"
                  placeholder="Name"
                  className={errors.name ? "invalid__input" : ""}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  value={name}
                  name="name"
                />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}
              </div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  className={errors.email ? "invalid__input" : ""}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  name="email"
                />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
              </div>
              <div className="form-input">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  className={errors.password ? "invalid__input" : ""}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                />
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}
              </div>
              <div className="form-input">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={password2}
                  name="password2"
                  className={errors.password2 ? "invalid__input" : ""}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                />
                {errors.password2 && (
                  <span className="error-text">{errors.password2}</span>
                )}
              </div>

              <div className="signup--agreement">
                <input
                  type="checkbox"
                  checked={checked}
                  name="checked"
                  onChange={this.handleChange}
                />
                &nbsp;
                <span>
                  By signing up, you agree to our&nbsp;
                  <a href="#">Terms and Condition</a>
                </span>
              </div>

              <button className="signup--button" disabled={invalid}>
                {loading ? <span className="spinner"></span> : "Sign up"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
