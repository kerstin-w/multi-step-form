import React from "react";

export function Steps({ step }) {
  return (
    <aside className="steps">
      <ul>
        {[
          { number: 1, title: "Your Info" },
          { number: 2, title: "Select Plan" },
          { number: 3, title: "Add-Ons" },
          { number: 4, title: "Summary" },
        ].map((stepInfo) => (
          <li key={stepInfo.number}>
            <p
              className={`number ${
                step === stepInfo.number ? "number-active" : ""
              }`}
            >
              {stepInfo.number}
            </p>
            <div>
              <h3>Step {stepInfo.number}</h3>
              <p>{stepInfo.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
