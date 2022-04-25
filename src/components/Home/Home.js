import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import background from "../Images/slider.jpg";
import MenImage from "../Images/banner-3-2.jpg";
import WomenImage from "../Images/banner-2-2.jpg";
import { Link } from "react-router-dom";
import Policy from "./PolicyBox";
import Product from "./Product";
import food1 from "../Images/food1.jpg";
import food2 from "../Images/food2.jpg";
import food3 from "../Images/food3.jpg";
import food4 from "../Images/food4.jpg";
import food5 from "../Images/food5.jpg";
import main1 from "../Images/main1.jpg";
import main2 from "../Images/main2.jpg";
// import Footer from "./components/Footer";

function Home() {
  return (
    <div className="Structure_container">
      <div>
        <Navbar />
      </div>
      <div className="Structure_body">
        <div className="home">
          <div className="header">
            <div
              className="header-slide"
              style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "600px",
                position: "relative",
              }}
            ></div>
            <div className="header-text">
              <h1> SideHustle</h1>
              <h2>Restaurant </h2>

              <Link to={"/products"}>
                <button> SHOP NOW </button>
              </Link>
            </div>

            <Policy />

            {/* Men Product */}
            <div className="men-product">
              <img src={main1} alt="" />
              <div className="product-col">
                <div className="info-product">
                  <h4>BREAKFAST COLLECTION</h4>
                  <p>Shop All Products</p>
                </div>
                <div className="home-product">
                  <Product
                    id="1"
                    imageUrl={food1}
                    price={220}
                    rating={4}
                    img={food1}
                  />
                  <Product id="2" imageUrl={food2} price={280} rating={3} />
                  <Product id="3" imageUrl={food3} price={110} rating={5} />
                </div>
              </div>
            </div>

            {/* Women Product */}
            <div className="men-product women">
              <div className="product-col">
                <div className="info-product">
                  <h4>LUNCH COLLECTION</h4>
                  <p>Shop All Products</p>
                </div>
                <div className="home-product">
                  <Product id="1" imageUrl={food4} price={220} rating={4} />
                  <Product id="2" imageUrl={food5} price={280} rating={3} />
                  <Product id="3" imageUrl={food1} price={110} rating={5} />
                </div>
              </div>
              <img src={main2} alt="" />
            </div>

            {/* Top Product */}
            <div className="men-product women">
              <div className="product-col">
                <div className="info-product">
                  <h4>DINNERS</h4>
                  <p>Shop All Products</p>
                </div>
                <div className="home-product">
                  <Product id="1" imageUrl={food2} price={220} rating={4} />
                  <Product id="2" imageUrl={food3} price={280} rating={3} />
                  <Product id="3" imageUrl={food4} price={110} rating={5} />
                  <Product id="4" imageUrl={food5} price={160} rating={3} />
                </div>
              </div>
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

export default Home;
