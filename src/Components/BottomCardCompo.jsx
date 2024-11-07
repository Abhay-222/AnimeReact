import React from "react";
import "../CSS/BottomCardCompo.css";
import CardHeader from "./CardHeader";

const MainImage = ({ imgSrc, title, description }) => (
  <div>
    <div className="cbMainImg">
      <a href="#">
        <img src={imgSrc} alt="main-img" />
      </a>
    </div>
    <div className="mainImgDetails">
      <h2 className="bgColorMode4">{title}</h2>
      <span className="bgColorMode4">{description}</span>
      <button>Read More</button>
    </div>
  </div>
);

const SubImage = ({ imgSrc, date, title }) => (
  <div className="subImg">
    <div className="subImgImg">
      <a href="#">
        <img src={imgSrc} alt="sub-img" />
      </a>
    </div>
    <div className="subImgDetails">
      <span className="bgColorMode4">{date}</span>
      <h3 className="bgColorMode4">{title}</h3>
    </div>
  </div>
);

const BottomCardCompo = ({
  iconClass,
  title,
  mainImage,
  mainTitle,
  mainDescription,
  subImages,
}) => (
  <div className="bottomParent">
    <CardHeader iconClass="fa-solid fa-tv" title=". Genres" />
    <MainImage
      imgSrc={mainImage}
      title={mainTitle}
      description={mainDescription}
    />
    {subImages.map((sub, index) => (
      <SubImage
        key={index}
        imgSrc={sub.imgSrc}
        date={sub.date}
        title={sub.title}
      />
    ))}
  </div>
);

export default BottomCardCompo;
