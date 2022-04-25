import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import food from "./Images/pexels.jpg";
import chairs from "./Images/pexel2.jpg";
function About() {
  return (
    <div className="Structure_container">
      <div>
        <Navbar />
      </div>
      <div className="Structure_body task">
        <div className="aboutimg">
          <img className="img1" src={chairs} alt="image1" />
          <img className="img2" src={food} alt="image2" />
          {/* <img className="img2" src={image} alt="image2" /> */}
        </div>
        <div className="Thebody">
          <h1>About Us</h1>
          <div className="word">
            <div className="word1">
              <p>
                Chicken Republic is a proudly Nigerian brand that comes from
                humble beginnings. We opened our first Chicken Republic
                restaurant in Lagos in 2004 and are presently trading in over
                129 locations across Nigeria and Ghana, with plans to operate
                430 restaurants by the end of 2024.{" "}
              </p>
              <p>
                From the start our vision has been: to be the most loved quick
                service restaurant brand in West Africa. Our “Taste More”
                philosophy encourages a bold spirit of adventure as we set out
                to challenge the status quo by providing our customers with
                tasty, everyday affordable value meals in clean, cool ambient
                restaurants that offer good customer service.
              </p>
              <p>
                We invite our customers to experience more as they interact with
                our brand and enjoy our Soulfully Spiced Chicken and tasty
                sides, all flavoured to perfection with our unique blend of
                authentic West African herbs and spices.
              </p>
            </div>
            <div className="word2">
              <p>
                Chicken Republic is a committed supporter of Nigerian
                production. Most of our products are sourced directly from
                local, Nigerian suppliers. Our philosophy is “People Capability
                Always”. We pride ourselves on being an equal opportunity
                employer, with a strong focus on creating opportunities for
                women and young adults.
              </p>
              <p>
                As a Nigerian brand, facing challenges and overcoming obstacles
                is in our DNA. Our motto is, “happy, but never content”. This
                quest for excellence, together with, our committed staff, local
                partnerships and loyal customers has led us to be the fastest
                growing, chicken focused, quick service restaurant chain in the
                country today.
              </p>
              <p>
                Chicken Republic is proudly owned by Food Concepts Plc. As such,
                we adhere to excellent corporate governance and sustainability
                practices. The Chicken Republic brand complies with SEC
                regulations, committed to by the Food Concepts Group.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
