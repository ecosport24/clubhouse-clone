import React, { useState } from "react";
import style from "../styles/explore.module.css";
import datas from "../data/explore.json";
import { SlArrowDown } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import Subheader from "../components/Subheader";
const Explore = () => {
  const [peopleSize, setPeopleSize] = useState(3);
  const limitWordLength = (limit, word) => word.substring(0, limit) + "...";
  return (
    <div className={style.exploreContainer}>
      <Subheader />
      <div class="input-group input-group-sm px-4">
        <span class="input-group-text">
          <BiSearch />
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Find People and Clubs"
        />
      </div>

      <div className={style.followContainer}>
        <h4>People to follow</h4>
        <div className={style.peopleCardContainer}>
          {datas.people.slice(0, peopleSize).map((people) => (
            <div className={style.peopleContainer}>
              <div>
                <img src="./images/me.jpg" />
                <div>
                  <h2>
                    {people.first_name} {people.last_name}
                  </h2>
                  <p>{people.description}</p>
                </div>
              </div>
              <button className={style.followBtn}> Follow </button>
            </div>
          ))}
          <div className={style.showMoreBtnContainer}>
            <button
              className={style.showMoreBtn}
              onClick={() => setPeopleSize(peopleSize + 1)}
            >
              <span>Show more people</span> <SlArrowDown className="ms-2" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.conversationCardContainer}>
        <h4>Find conversiontion about</h4>
        <div className={style.conversationContainer}>
          {datas.conversation.map((topic) => (
            <div>
              <div>
                <h5>
                  <AiOutlineFire /> {limitWordLength(13, topic.title)}
                </h5>
              </div>
              <p>{limitWordLength(40, topic.description)} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
