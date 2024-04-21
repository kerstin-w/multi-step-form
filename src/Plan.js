import Button from "./Button";
import React from "react";
import { plans } from "./App";

export function Plan({
  onToggleIsMonthly,
  monthly,
  onSubmit,
  handlePlanSelect,
  selectedPlan,
  handlePreviousStep,
}) {
  return (
    <div className="form-input">
      <form onSubmit={onSubmit}>
        <h2>Select your Plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="cards">
          {plans.map((plan) => (
            <div
              className={`card ${
                selectedPlan && selectedPlan.plan.name === plan.name
                  ? "selected"
                  : ""
              }`}
              key={plan.name}
              value={plan.name}
              onClick={() => handlePlanSelect({ plan })}
            >
              <img src={plan.image} alt={plan.name} />
              <h3>{plan.name}</h3>
              <p>{monthly ? plan.price : plan.priceYearly}</p>
              {!monthly && <p className="offer">2 months for free</p>}
            </div>
          ))}
        </div>
        <div className="toggle-switch">
          <span className={`toggle-label ${!monthly ? "grey" : ""}`}>
            Monthly
          </span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider" onClick={onToggleIsMonthly}></span>
          </label>
          <span className={`toggle-label ${monthly ? "grey" : ""}`}>
            Yearly
          </span>
        </div>
        <div className="button-container">
          <button
            onClick={(event) => handlePreviousStep(event)}
            className="btn-back"
          >
            Go back
          </button>
          <Button>Next Step</Button>
        </div>
      </form>
    </div>
  );
}
