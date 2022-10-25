import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import style from "../styles/phoneConfirmation.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BsBoxArrowInRight } from "react-icons/bs";

const PhoneConfirmation = () => {
  const [phoneNum, setPhoneNum] = useState();
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link to={"/"} className={style.backBtn}>
        <IoIosArrowBack />
      </Link>
      <h1>Enter your Phone</h1>
      <PhoneInput
        international
        defaultCountry="PH"
        value={phoneNum}
        className={style.inputContainer}
      ></PhoneInput>
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy.</span>Thanks!
      </p>
      <Link to={"/code-confirm"} className={style.nextBtn}>
        <span>Next</span>
        <BsBoxArrowInRight />
      </Link>
    </div>
  );
};

export default PhoneConfirmation;
