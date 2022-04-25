import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Contact() {
  return (
    <div className="Structure_container">
      <div>
        <Navbar />
      </div>
      <div className="Structure_body">
        <div className="contactbackground">
          <div class="container">
            <div className="contactUs">Contact Us</div>
            <form action="">
              {" "}
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your last name.."
              />
              <label for="lname">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email.."
              />
              <label for="country">Country</label>
              <select id="country" name="country">
                <option value="Ethiopia">Ethiopia</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Kenya">Kenya</option>
              </select>
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
