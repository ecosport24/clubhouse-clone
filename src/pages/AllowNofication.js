import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/phoneConfirmation.module.css";

const AllowNofication = () => {
  return (
    <div className={style.phoneConfirmationContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last, important step!</h1>
        <h1 className="mb-3">
          Enable notifications to know when people are talking.
        </h1>
        <div className={`${style.notificationContainer}`}>
          <h3 className="pt-3 fs-6">
            "Clubhouse" Would Like to Send You Notifications
          </h3>
          <p className="lh-sm mb-4">
            Notifications may include alerts, sounds, and icon badges.
          </p>
          <div className={`${style.action_btn}`}>
            <Link to={"/"} className="">
              Don't Allow
            </Link>
            <Link to={"/"}>Allow</Link>
          </div>
        </div>
        <img className={style.handImageIcon} src="./images/hand_icon.png" />
      </div>
    </div>
  );
};

export default AllowNofication;
