import React from 'react';
import "../CSS/CardHeader.css"

function CardHeader({ iconClass, title }) {
  return (
    <>
    <ul id="heading">
    <li>
      <div>
        <i className={iconClass}></i>
        <h2>{title}</h2>
      </div>
    </li>
  </ul>

  <div id="horLine">
    <hr className="bgColorMode3" />
  </div>
  </>
  );
}

export default CardHeader;
