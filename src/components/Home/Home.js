import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import background from "../Images/slider.jpg";
import MenImage from "../Images/banner-3-2.jpg"
import WomenImage from "../Images/banner-2-2.jpg"
import { Link } from "react-router-dom";
import Policy from "./PolicyBox"
import Product from "./Product";
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
              <div className="header-slide" style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '600px',
                position: 'relative',
              }}>
              </div>
              <div className="header-text"> 
                <h1> NIKE AIR MAX</h1>
                <h2> RUN DON'T HIDE </h2>
                <p> - Sytle that rise to make every eyes fall</p>
                <Link to={"/products"}>
                <button> SHOP NOW </button>
                </Link> 
              </div>

            <Policy />
            
              {/* Men Product */}
            <div className="men-product">
              <img src={MenImage} alt="" />
              <div className="product-col">
                <div className="info-product">
                  <h4>MEN’S COLLECTION</h4> 
                  <p>Shop All Products</p>
                </div> 
                <div className="home-product">
                  <Product
                    id= "1"
                    name= "Adidas NMD"
                    imageUrl= "https://i.ibb.co/0s3pdnc/adidas-nmd.png"
                    price= {220}
                    rating= {4}
                  />
                  <Product
                    id= "2"
                    name= "Adidas Yeezy"
                    imageUrl= "https://i.ibb.co/dJbG1cT/yeezy.png"
                    price= {280}
                    rating= {3}
                  />      
                  <Product
                    id= "3"
                    name= "Black Converse"
                    imageUrl= "https://i.ibb.co/bPmVXyP/black-converse.png"
                    price= {110}
                    rating= {5}
                  />
                </div>
              </div>
            </div>

              {/* Women Product */}
            <div className="men-product women">
              <div className="product-col">
                <div className="info-product">
                  <h4>WOMEN’S COLLECTION</h4> 
                  <p>Shop All Products</p>
                </div> 
                <div className="home-product">
                  <Product
                    id= "1"
                    name= "Adidas NMD"
                    imageUrl= "https://i.ibb.co/0s3pdnc/adidas-nmd.png"
                    price= {220}
                    rating= {4}
                  />
                  <Product
                    id= "2"
                    name= "Adidas Yeezy"
                    imageUrl= "https://i.ibb.co/dJbG1cT/yeezy.png"
                    price= {280}
                    rating= {3}
                  />      
                  <Product
                    id= "3"
                    name= "Black Converse"
                    imageUrl= "https://i.ibb.co/bPmVXyP/black-converse.png"
                    price= {110}
                    rating= {5}
                  />
                </div>
              </div>
              <img src={WomenImage} alt="" />
            </div>

              {/* Top Product */}
            <div className="men-product women">
              <div className="product-col">
                <div className="info-product">
                  <h4>THE TOP SELLERS</h4> 
                  <p>Shop All Products</p>
                </div> 
                <div className="home-product">
                  <Product
                    id= "1"
                    name= "Adidas NMD"
                    imageUrl= "https://i.ibb.co/0s3pdnc/adidas-nmd.png"
                    price= {220}
                    rating= {4}
                  />
                  <Product
                    id= "2"
                    name= "Adidas Yeezy"
                    imageUrl= "https://i.ibb.co/dJbG1cT/yeezy.png"
                    price= {280}
                    rating= {3}
                  />      
                  <Product
                    id= "3"
                    name= "Black Converse"
                    imageUrl= "https://i.ibb.co/bPmVXyP/black-converse.png"
                    price= {110}
                    rating= {5}

                  />
                  <Product
                    id= "4"
                    name= "Nike White AirForce"
                    imageUrl= "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png"                    
                    price= {160}
                    rating= {3}
                    
                  />
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
