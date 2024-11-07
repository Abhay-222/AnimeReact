import React from 'react';
import "../CSS/CardType2Main.css"

function MainImage({ mainImage, date, title, description }) {
  return (
    <div className='mainImg'>
      <div className='image'>
        <a href="#" >
          <img src={mainImage} alt="crack" />
        </a>
      </div>
      <div className='data'>
        <div className="linkTime">
          <p><a href="#" className="bgColorMode4">AnimeKaiZoku</a></p>
          <p className="bgColorMode4">{date}</p>
        </div>
        <h1>
          <a href="#" className="bgColorMode4">{title}</a>
        </h1>
        <p className="bgColorMode4">{description}</p>
        <button>Download</button>
      </div>
    </div>
  );
}

export default MainImage;
