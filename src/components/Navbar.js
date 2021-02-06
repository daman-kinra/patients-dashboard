import React from "react";
import "../styles/Navbar.css";
import { BsBellFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import logo from "../Static/logo.png";

function Navbar() {
  return (
    <div className="nav_main">
      <div className="nav_left">
        <div className="logo">
          <img src={logo} alt="" className="img" />
        </div>
        <div className="links">
          <ul>
            <div className="list_items">
              <li>PATIENTS</li>
            </div>
            <div className="list_items">
              <li>CALENDAR</li>
            </div>
            <div className="list_items">
              <li>USERS</li>
            </div>
            <div className="list_items">
              <li>BILLING</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="nav_right">
        <div className="bell">
          <BsBellFill size="1.5rem" />
          <div className="notifications">
            <p>1</p>
          </div>
        </div>
        <div className="avtar">
          <FaUserAlt size="1.5rem" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
