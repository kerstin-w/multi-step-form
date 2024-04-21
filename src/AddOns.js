import React from "react";
import Button from "./Button";

export function AddOns({ handlePreviousStep }) {
  return (
    <div className="form-input">
      <form>
        <h2>Pick add-ons</h2>
        <p>Customize your plan with these add-ons</p>

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
