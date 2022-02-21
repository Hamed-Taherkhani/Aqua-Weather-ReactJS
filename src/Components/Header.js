import React from "react";
import "./scss/Header.scss";

function Header() {
  return (
    <header className="app-header">
      <ul className="header-items-list flex-row">
        <li className="header-item icon">
          <button className="icon">
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/plus-math.png"
              alt="Plus"
            />
          </button>
        </li>
        <li className="header-item">City Name</li>
        <li className="header-item">
          <button id="more" className="icon">
            <img
              src="https://img.icons8.com/ios-filled/30/ffffff/menu-2.png"
              alt="More"
            />
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
