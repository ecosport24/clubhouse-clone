import React from "react";
import style from "../styles/roomInfoCard.module.css";
import datas from "../data/roomCard.json";
import {
  BsChatDots,
  BsFillPersonLinesFill,
  BsFillChatDotsFill,
} from "react-icons/bs";
const RoomInforCard = () => {
  return (
    <div>
      {datas.map((data, index) => (
        <div key={index} className={style.roomCardContainer}>
          <h6>{data.title}</h6>
          <h3>{data.sub_title}</h3>
          <div className={style.roomMembers}>
            <div className={style.imgContainer}>
              <img src="./images/me.jpg" />
              <img src="./images/raven.jpg" />
            </div>
            <div>
              {data.members.map((person) => (
                <p>
                  {person.first_name} {person.last_name} <BsChatDots />
                </p>
              ))}
              <div className="d-flex align-items-center">
                <span className="fw-semibold">1.8</span>
                <BsFillPersonLinesFill className="ms-2" />
                <span className="mx-2"></span>
                <span className="fw-semibold">5</span>
                <BsFillChatDotsFill className="ms-2" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomInforCard;
