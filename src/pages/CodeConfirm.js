import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/phoneConfirmation.module.css";

const CodeConfirm = () => {
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link to={"/"} className={style.backBtn}>
        <img src="./images/back-icon.png" alt="" />
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
          <img src="./images/next-icon.png" className={"ms-2 mt-1"} />
        </Link>
      </div>
    </div>
  );
};

export default CodeConfirm;
