import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function About() {
  return (
    <div className="Structure_container">
      <div>
        <Navbar />
      </div>
      <div className="Structure_body">This is where u write ur About code</div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
