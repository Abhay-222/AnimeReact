import React from "react";
import "../CSS/Footer.css"; 
import hage from "../Images/hage.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="foot">
        <img src={hage} alt="Anime Kaizoku Logo" />
        <span className="bgColorMode4">
          Anime Kaizoku is the best place to download anime series, anime
          movies, anime ova series, and much more, providing you with the latest
          anime dose for free. The Best Anime Downloads Website.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
