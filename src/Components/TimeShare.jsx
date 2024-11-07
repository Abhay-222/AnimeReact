import React from 'react';
import '../css/timeShare.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';


const TimeShare = () => {
  return (
    <>
    <header className="bgColorMode0">
      <div id="time">
        <span className="bgColorMode4" id="dateTime">Sunday, August 18, 2024</span>
        <div id="socialMedia">
          <a href="#" id="telegram">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="#" id="whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#" className="modeChange">
            <FontAwesomeIcon icon={faSun} />
          </a>
        </div>
      </div>
    </header>
    </>
  );
};

export default TimeShare;
