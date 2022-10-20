import React from "react";
import style from "../styles/dailyCard.module.css";
import datas from "../data/dailyCard.json";

const DailyInfoCard = () => {
  return (
    <div className={style.dailyInforCard}>
      {datas.map((data, index) => {
        const desc = data.description ? data.description : "";
        const displayDesc =
          desc.length > 50 ? `${desc.substring(0, 50)}...` : data.description;
        return (
          <div key={index} className={style.dailyCardItem}>
            <span className={style.itemTime}>{data.time}</span>
            <div className="px-4">
              <span>{data.title}</span>
              <p className="fw-bold" numberOfLines={1}>
                {displayDesc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DailyInfoCard;
