import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <Link to={"/explore"}>
        <img src="./images/search-icon.png" className={style.icons} />
      </Link>
      <div>
        <Link to={"/friends-invite"}>
          <img src="./images/open-email-icon.png" className={style.icons} />
        </Link>
        <Link to={"/upcoming"}>
          <img src="./images/calendar-icon.png" className={style.icons} />
        </Link>
        <Link to={"/activity"}>
          <img src="./images/notif-icon.png" className={style.icons} />
        </Link>
        <Link to={"/profile"}>
          <img src="./images/profile-icon.png" className={style.icons} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
