import React from "react";
import style from "../styles/explore.module.css";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
const Subheader = () => {
  return (
    <div className={style.header}>
      <Link to="/home">
        <AiOutlineLeft />
      </Link>
      <h2>EXPLORE</h2>
    </div>
  );
};

export default Subheader;
