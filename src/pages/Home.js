import React, { useState } from "react";
import DailyInfoCard from "../components/DailyInfoCard";
import Header from "../components/Header";
import RoomInforCard from "../components/RoomInforCard";
import style from "../styles/home.module.css";
import { BsPlusLg, BsGrid3X3Gap } from "react-icons/bs";
import datas from "../data/roomCard.json";
import newRoomDatas from "../data/newRoom.json";
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
        setSheetCreateRoom={(item) => setSheetCreateRoom(item)}
      />

      <BottomSheet
        sheetTitle="new room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetCreateRoom}
        setSheetCreateRoom={(item) => setSheetCreateRoom(item)}
        cardDetail={newRoomDatas}
        setItemsVisible={(item) => setItemsVisible(item)}
      />
    </div>
  );
};

export default Home;
