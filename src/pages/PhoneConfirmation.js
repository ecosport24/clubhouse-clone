import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import style from "../styles/phoneConfirmation.module.css";
const PhoneConfirmation = () => {
  const [phoneNum, setPhoneNum] = useState();
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link to={"/"} className={style.backBtn}>
        <img src="./images/back-icon.png" alt="" />
      </Link>
      <h1>Enter your Phone</h1>
      <PhoneInput
        international
        defaultCountry="PH"
        value={phoneNum}
      ></PhoneInput>
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy.</span>Thanks!
      </p>
      <Link to={"/code-confirm"} className={style.nextBtn}>
        <span>Next</span>
        <img src="./images/next-icon.png" className={"ms-2 mt-1"} />
      </Link>
    </div>
  );
};

export default PhoneConfirmation;
