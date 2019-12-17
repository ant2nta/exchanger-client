import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <ul>
        <li>
          <Link to="/">
            <div className="logo"></div>
          </Link>
        </li>
        <li className="big">
          <Link to="#">Exchange rates</Link>
        </li>
        <li className="big">
          <Link to="/news">News</Link>
        </li>
        <li className="big">
          <Link to="/analytycs">Analytycs</Link>
        </li>
        <li className="small align">
          <Link to="/auth">Sign in</Link>
        </li>
        <li className="small">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
