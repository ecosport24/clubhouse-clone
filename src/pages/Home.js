import React, { useState } from "react";
import DailyInfoCard from "../components/DailyInfoCard";
import Header from "../components/Header";
import RoomInforCard from "../components/RoomInforCard";
import style from "../styles/home.module.css";
import { BsPlusLg, BsGrid3X3Gap } from "react-icons/bs";
import datas from "../data/roomCard.json";
import BottomSheet from "../components/BottomSheet";

const Home = () => {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <div className={style.home_container}>
      <Header />
      <div className="px-4">
        <DailyInfoCard />
        <RoomInforCard />
      </div>

      <div className={style.btn_container}>
        <div className={style.btn_actions}>
          <button onClick={() => setSheetVisible(true)}>
            <BsPlusLg className="me-2" /> Start a room
          </button>
          <button className="pe-4">
            <BsGrid3X3Gap />
          </button>
        </div>
      </div>

      <BottomSheet
        sheetTitle="start room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={datas.find((data) => data.id == cardId)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          }, 1000);
        }}
      ></BottomSheet>
    </div>
  );
};

export default Home;
