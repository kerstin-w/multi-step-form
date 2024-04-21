import "./App.css";
import React, { useState } from "react";
import { Steps } from "./Steps";
import { PersonalInfo } from "./PersonalInfo";
import { Plan } from "./Plan";
import { AddOns } from "./AddOns";

export const plans = [
  {
    name: "Arcade",
    image: require("./images/icon-arcade.svg").default,
    price: "$9/mo",
    priceYearly: "$90/yr",
  },
  {
    name: "Advanced",
    image: require("./images/icon-advanced.svg").default,
    price: "$12/mo",
    priceYearly: "$120/yr",
  },
  {
    name: "Pro",
    image: require("./images/icon-pro.svg").default,
    price: "$15/mo",
    priceYearly: "$150/yr",
  },
];

export default function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [personalInfo, setPersonalInfo] = useState(false);
  const [monthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  function handlePreviousStep(event) {
    event.preventDefault();

    if (step > 1) {
      setStep((s) => s - 1);
      setPersonalInfo(false);
    }
  }

  function handleSubmit(e) {
    setPersonalInfo(true);
    if (step < 4) setStep((s) => s + 1);
  }

  function toggleIsMonthly() {
    setIsMonthly((is) => !monthly);
  }

  function handlePlanSelect(plan) {
    setSelectedPlan(plan);
  }

  function handleNext(e) {
    e.preventDefault();
    if (step < 4) setStep((s) => s + 1);
  }

  return (
    <div className="app">
      <Steps step={step} />
      {step === 1 && (
        <PersonalInfo
          onSubmit={handleSubmit}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
        />
      )}
      {step === 2 && (
        <Plan
          onToggleIsMonthly={toggleIsMonthly}
          monthly={monthly}
          selectedPlan={selectedPlan}
          handlePlanSelect={handlePlanSelect}
          handlePreviousStep={handlePreviousStep}
          onSubmit={handleNext}
        />
      )}
      {step === 3 && <AddOns handlePreviousStep={handlePreviousStep} />}
    </div>
  );
}
