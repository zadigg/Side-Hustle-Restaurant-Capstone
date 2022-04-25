import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar_container">
      <div className="Navbar_body">
        <div>
          <Link to={"/"}>
            <div>Home</div>
          </Link>
        </div>
        <div className="Navbar_innerbody">
          <div>
            <Link to={"/products"}>Product</Link>
          </div>
          <div>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div>
            <Link to={"/about"}>About</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
