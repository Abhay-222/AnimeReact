// LeftCards.jsx
import React from "react";
import CardHeader from "./CardHeader";
import MainImage from "./CardType2MainImg";
import SubImage from "./CardType2SubImg";
import hage from "../Images/hage.jpg";
import "../CSS/CardType2Main.css";

function LeftCards() {
  return (
    <div
      className="leftCards"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1f2024",
        width: "60vw",
        margin: "2em 0 0 2.5em",
        borderRadius: "0.5em",
        border: "1px solid rgb(133, 132, 132)",
        padding: "1em",
      }}
    >
      <CardHeader iconClass="fa-solid fa-tv" title=". Genres" />

      <MainImage
        mainImage={hage}
        date="August 12, 2024"
        title="Food Wars !"
        description="To access the private drive just open Google Group and join the Google Group."
      />

      <div
        className="subImagesParent"
        style={{ display: "flex", flexDirection: "row" , margin :'1.5em 1.5em 0em 1.5em'}}
      >
        <div className="subImages">
          <SubImage
            image={hage}
            date="August 12, 2024"
            title="Komi-san wa, Comyushou desu. 2nd Season"
          />
          <SubImage image={hage} date="March 22, 2024" title="Accel World" />
        </div>

        <div className="subImages">
          <SubImage
            image={hage}
            date="March 2, 2024"
            title="JoJo’s Bizarre Adventure: Stone Ocean Part 3"
          />
          <SubImage
            image={hage}
            date="November 8, 2023"
            title="Carole & Tuesday"
          />
        </div>
      </div>
    </div>
  );
}

export default LeftCards;
