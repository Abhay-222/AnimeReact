import React from "react";
import BottomCardCompo from "./BottomCardCompo";
import hage from "../Images/hage.jpg";

const CardsBottom = () => {
  return (
    <div id="cardsBottom" style={{
        display: 'flex',
        flexDirection: 'row'
    }}>
      <BottomCardCompo
        iconClass="fa-solid fa-box"
        title=". OVA and Special"
        mainImage={hage}
        mainTitle="Attack on Titan : Special"
        mainDescription="fsdfdg sdsfdsgdg sdggfdf dgffgfdfg dfdfgfdg dggfdg xdfdfgsf sdfdssgfd fxvbv xvxvcvc......."
        subImages={[
          {
            imgSrc: hage, 
            date: "November 8, 2024",
            title: "Hunter x Hunter: Greed Island",
          },
          {
            imgSrc: hage, 
            date: "November 8, 2024",
            title: "Gintama: Love Incense Arc",
          },
        ]}
      />
      <BottomCardCompo
        iconClass="fa-solid fa-arrow-trend-up"
        title=". Trending"
        mainImage={hage}
        mainTitle="One Piece"
        mainDescription="fsdfdg sdsfdsgdg sdggfdf dgffgfdfg dfdfgfdg dggfdg xdfdfgsf sdfdssgfd fxvbv xvxvcvc......."
        subImages={[
          {
            imgSrc: hage,
            date: "November 8, 2024",
            title: "One Piece",
          },
          {
            imgSrc: hage, 
            date: "November 8, 2024",
            title: "One Piece",
          },
        ]}
      />
    </div>
  );
};

export default CardsBottom;
