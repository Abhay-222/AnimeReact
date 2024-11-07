import React from 'react';
import '../css/menubar.css';
import logo from '../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBookmark, faCheckDouble, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';

const MenuBar = () => {
  const MenuItem = ({ icon, label }) => (
    <div className="menuItem">
      <a href="#" className="menuItemLink">
        <div className="pairs">
          <FontAwesomeIcon icon={icon} />
          <span>{label}</span>
        </div>
      </a>
    </div>
  );

  const MenuSearch = () => (
    <div id="searchBar">
      <input type="text" placeholder="  Search..." id="searchArea" />
      <a href="#" id="searchButton">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </a>
    </div>
  );

  return (
    <div className='menuParent'>
      <div id="divlogo">
        <img src={logo} alt="crack" id="logo" />
      </div>
      <div className="menubar">
        <nav className="menu">
          <div className="menuList">
            <MenuItem icon={faVideo} label="Airing" />
            <MenuItem icon={faRectangleList} label="Completed" />
            <MenuItem icon={faVideo} label="Movies" />
            <MenuItem icon={faBookmark} label="OVA" />
            <MenuItem icon={faCheckDouble} label="Request" />
          </div>
          <MenuSearch />
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;

