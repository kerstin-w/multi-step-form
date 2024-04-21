import Button from "./Button";
import React, { useState } from "react";

export function PersonalInfo({
  onSubmit,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleFormSubmitErrors = (e) => {
    e.preventDefault();

    // Check if any of the input fields are empty
    if (!name) {
      setNameError("This field is required");
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("This field is required");
    } else {
      setEmailError("");
    }

    if (!phone) {
      setPhoneError("This field is required");
    } else {
      setPhoneError("");
    }

    if (name && email && phone) {
      onSubmit();
    }
  };

  return (
    <div className="form-input">
      <form onSubmit={handleFormSubmitErrors}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number</p>
        <div className="personal-info-label">
          <label>Name:</label>
          {nameError && <span className="error-input">{nameError}</span>}
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Stephen King"
          className={nameError ? "error-input-border" : ""}
        />
        <div className="personal-info-label">
          <label>Email:</label>
          {emailError && <span className="error-input">{emailError}</span>}
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. stephenking@lorem.com"
          className={emailError ? "error-input-border" : ""}
        />
        <div className="personal-info-label">
          <label>Phone:</label>
          {phoneError && <span className="error-input">{phoneError}</span>}
        </div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. +1 234 567 890"
          className={phoneError ? "error-input-border" : ""}
        />

        <Button>Next Step</Button>
      </form>
    </div>
  );
}
