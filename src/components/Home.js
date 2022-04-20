import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Footer from "./components/Footer";
function Home() {
  return (
    <div className="Structure_container">
      <div>
        <Navbar />
      </div>
      <div className="Structure_body">hey</div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
