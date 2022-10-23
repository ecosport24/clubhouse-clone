import React, { useState } from "react";
import style from "../../styles/roomDetail.module.css";
import { SlArrowDown } from "react-icons/sl";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill, BsPlusLg, BsMicFill } from "react-icons/bs";
import { FaGlobeAsia, FaRegHandPaper, FaHandPeace } from "react-icons/fa";

import roomMembers from "../../data/newRoom.json";
const NewRoom = (props) => {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const card = props.cardDetail;
  return (
    <div className={style.roomDetailContainer}>
      <div className={`${style.header} p-2`}>
        <div>
          <a
            href="#"
            onClick={() => {
              props.setSheetCreateRoom(false);
            }}
          >
            <SlArrowDown />
            <span>Hallway</span>
          </a>
        </div>
        <div>
          <AiOutlineFile />
          <img src="/images/me.jpg" />
        </div>
      </div>
      <div className={style.memberContainer}>
        {roomMembers.members.map((member) => (
          <div>
            <img src="/images/me.jpg" />
            <div className={!micMuteVisible ? "d-none" : ""}>
              <BsMicMuteFill />
            </div>
            <p>
              <FaGlobeAsia />
              {member.first_name}
            </p>
          </div>
        ))}
      </div>
      <div className={style.footer}>
        <button onClick={() => props.setSheetCreateRoom(false)}>
          <FaHandPeace />
          <span>Leave Quietly</span>
        </button>
        <div>
          <button>
            <BsPlusLg />
          </button>
          <button>
            <FaRegHandPaper />
          </button>
          <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
            <BsMicFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
