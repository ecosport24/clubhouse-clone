import React, { useState } from "react";
import style from "../../styles/bottomSheet.module.css";
import { FcGlobe } from "react-icons/fc";
import { BsPlusLg } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";

const StartRoom = (props) => {
  const [room, setRoom] = useState("open");
  const btns = ["open", "social", "closed"];

  return (
    <div>
      <div className={style.switch_line}></div>
      <div className={style.addTopicBtnContainer}>
        <button className={style.addTopicBtn}>
          <BsPlusLg className="me-1 fw-bold" />{" "}
          <span className="fw-semibold">Add a topic</span>
        </button>
      </div>

      <div className={style.selectRoom}>
        {btns.map((btn) => (
          <button
            className={room == btn ? style.active : ""}
            onClick={() => setRoom(btn)}
          >
            <div>
              <FcGlobe />
            </div>
            <p className="m-0">{btn.toUpperCase()}</p>
          </button>
        ))}
      </div>
      <hr className="mb-1"></hr>
      <p className="mt-0 text-center fw-semibold">
        Start a room{" "}
        <span>
          {room == "closed"
            ? "for people I choose"
            : room == "social"
            ? "with people I follow"
            : "open for everyone"}
        </span>
      </p>
      <div className="text-center">
        <button
          className={style.letsGoBtn}
          onClick={() => {
            props.setSheetCreateRoom(true);
            props.setSheetVisible(true);
          }}
        >
          <BiRocket className="me-2 fs-3" />
          <span>Let's Go</span>
        </button>
      </div>
    </div>
  );
};

export default StartRoom;
