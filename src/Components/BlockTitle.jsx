import React from 'react';
import '../CSS/BlockTitle.css'; 

function BlockTitle() {
  return (
    <div id="blockTitle">
      <div id="blockHead">
        <p id="blockHeadContent">Block Title</p>
      </div>
      <div id="blockContent" className="bgColorMode1">
        This is Hagemaru Speaking .....
      </div>
    </div>
  );
}

export default BlockTitle;
