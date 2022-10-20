import React from "react";
import DailyInfoCard from "../components/DailyInfoCard";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-4">
        <DailyInfoCard />
      </div>
    </div>
  );
};

export default Home;
