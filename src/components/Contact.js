import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Contact() {
  return (
    <div className="Structure_container">
      <div>
        <Navbar />
      </div>
      <div className="Structure_body">Contact</div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
