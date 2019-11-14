import React from "react";
import ripple from "../img/Ripple-Logo.png";
import Button from "../common/button";

import withState from "../context/withState";
import { Redirect } from "react-router-dom";
import * as ROUTES from "../routes";

const formatAmount = x =>
  (x / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });

function Subscription({ plans, isSubscribed }) {
  if (isSubscribed()) {
    return <Redirect to={ROUTES.HOMEPAGE} />;
  }
  return (
    <section className="subscription__page">
      <div className="subscription__header">
        <img src={ripple} alt="logo"></img>
        <Button
          label={"SIGN OUT"}
          buttonType={false}
          height="4.0rem"
          width="11.2rem"
        ></Button>
      </div>
      <div className="mid__text">
        <h1>Choose a plan and watch your favorite </h1>
        <h1>
          {" "}
          Nollywood movies on <span className="highlight"> Ripple</span>
        </h1>
      </div>
      <div className="subscription__body">
        {plans.map(plan => (
          <div key={plan._id} className="subscription__card">
            <div className="card__head">
              <h1>{plan.name.toUpperCase()}</h1>
              <h2>{formatAmount(plan.amount)} per month</h2>
            </div>
            <div className="card__body">
              {plan.description &&
                plan.description
                  .split(".")
                  .map((a, i) => <h3 key={`${plan._id}_${i}`}>{a.trim()}</h3>)}
            </div>
            <Button
              label={"SUBSCRIBE"}
              buttonType={false}
              path={`/payment?plan=${plan.plan_id}`}
              giveClass="sub--button"
            ></Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default withState(Subscription);
