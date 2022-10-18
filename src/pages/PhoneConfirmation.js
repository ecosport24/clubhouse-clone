import React from "react";
import style from "../styles/phoneConfirmation.module.css";
const PhoneConfirmation = () => {
  return (
    <div className={style.phoneConfirmationContainer}>
      <h1>Enter your Phone</h1>
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy.</span>Thanks!
      </p>
    </div>
  );
};

export default PhoneConfirmation;
