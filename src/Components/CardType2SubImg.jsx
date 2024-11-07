import React from 'react';
import "../CSS/CardType2Sub.css"

function SubImage({ image, date, title }) {
  return (
    <div className="subImgDiv">
      <div>
        <a href="#">
          <img src={image} alt="crack" />
        </a>
      </div>
      <div>
        <p className="bgColorMode4">{date}</p>
        <h3 className="bgColorMode4">{title}</h3>
      </div>
    </div>
  );
}

export default SubImage;
