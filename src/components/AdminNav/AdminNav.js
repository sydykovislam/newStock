import React from "react";
import { Link } from "react-router-dom";
// import What from './What/What';
import classes from "./AdminNav.module.css";
import Article from "../Article/Article";

function AdminNav(props) {
  return (
    <div className="AdminNav">
      <ul>
        <li>
          <Link to="/articles-panel">Add article</Link>
        </li>
        <li>
          <Link to="/galleries-panel">Add photo gallery</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminNav;
