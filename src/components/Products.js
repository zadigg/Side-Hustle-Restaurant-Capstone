import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SHOP_DATA from "./ShopData.js";
function Products() {
  return (
    <div className="Structure_container">
      <div>
        <Navbar />
      </div>
      <div className="Structure_body">
        <div className="collection-item">
          {SHOP_DATA.map((item) => (
            <div className="collection-container">
              <img src={item.imageUrl} alt='' className="image" />
              <div className="collection-footer">
                <div>{item.name}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default Products;
