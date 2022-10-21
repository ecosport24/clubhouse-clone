import React from "react";
import DailyInfoCard from "../components/DailyInfoCard";
import Header from "../components/Header";
import RoomInforCard from "../components/RoomInforCard";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-4">
        <DailyInfoCard />
        <RoomInforCard />
      </div>
    </div>
  );
};

export default Home;
