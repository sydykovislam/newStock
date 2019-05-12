import React from "react";
// import What from './What/What';
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="Nav">
      <ul className="list">
        <li>
          <Link to="/" className="link">
            Homepage
          </Link>
        </li>
        <li>
          <Link to="/articles" className="link">
            Articles
          </Link>
        </li>
        <li>
          <Link to="/ps-gallery" className="link">
            Photo Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
