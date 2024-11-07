// Card.js
import React from 'react';
import "../CSS/CardType1.css";

function LatestCard({ heading, hoverText, image }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <a href="#">
        <div className="info-box">
          <h2 className="heading">{heading}</h2>
          <div className="hidden-info">
            <p>{hoverText}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default LatestCard;
