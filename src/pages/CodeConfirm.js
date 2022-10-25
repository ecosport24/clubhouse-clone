import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/phoneConfirmation.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BsBoxArrowInRight } from "react-icons/bs";
const CodeConfirm = () => {
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link to={"/"} className={style.backBtn}>
        <IoIosArrowBack />
      </Link>
      <div className="d-flex align-items-center text-center flex-column">
        <h1 className="w-75">Enter the code we just texted you.</h1>
        <input
          type="text"
          className="form-control my-3"
          style={{ textAlign: "center" }}
        ></input>
        <p>
          Didn't recieve it? <span>Tap to resend.</span>
        </p>
        <Link to={"/allow-notification"} className={style.nextBtn}>
          <span>Next</span>
          <BsBoxArrowInRight />
        </Link>
      </div>
    </div>
  );
};

export default CodeConfirm;
