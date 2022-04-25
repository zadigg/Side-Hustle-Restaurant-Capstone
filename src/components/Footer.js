import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerMain">
      <div class="row primary">
        <div class="column about">
          <h3>React Group 45 Developer</h3>

          <p>SideHustle internship</p>
        </div>

        <div class="column links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to={"/"}>
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link to={"/products"}>Product</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/about"}>about</Link>
            </li>
          </ul>
        </div>

        <div class=" subscribe">
          <h6>About</h6>
          <p class="text-justify">
            Chicken Republic is a proudly Nigerian brand that comes from humble
            beginnings. We opened our first Chicken Republic restaurant in Lagos
            in 2004 and are presently trading in over 129 locations across
            Nigeria and Ghana, with plans to operate 430 restaurants by the end
            of 2024.
          </p>
          <div class="col-sm-12 col-md-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
