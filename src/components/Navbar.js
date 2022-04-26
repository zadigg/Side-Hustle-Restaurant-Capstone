import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "./Images/homelogo.png";

function Navbar() {
  return (
    <div className="Navbar_container">
      <div className="Navbar_body">
        <div>
          <Link to={"/"}>
            <img src={logo} width="220px" alt="" />
          </Link>
        </div>
        <div className="Navbar_innerbody">
          <div className="navb">
            <Link to={"/products"}>Product</Link>
          </div>
          <div className="navb">
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="navb">
            <Link to={"/about"}>About</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
