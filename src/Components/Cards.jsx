import React from 'react';
import CardHeader from './CardHeader';
import MainImage from './CardType2MainImg';
import SubImage from './CardType2SubImg';
import hage from "../Images/hage.jpg";
import "../CSS/CardType2Main.css";
import LeftCards from './LeftCards';
import RightCards from './RightCards';

function Cards() {
  return (
    <div 
      className="cards" 
      style={{ 
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1em',
        justifyContent: 'space-between', 
      }}
    >
    
      <div 
        className="lcards" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          marginRight: '1.5em' 
        }}
      >
        <LeftCards />
        <LeftCards />
      </div> 

      <div 
        className="rCards" 
        style={{
          width: '35%',
          marginLeft: '3.5em'
        }}
      >
        <RightCards />
      </div>
    </div>
  );
}

export default Cards;
