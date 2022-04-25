import React, { Component } from "react";
import PBox from "./PolicyUI";
import img1 from "../Images/freeshipping.png";
import img2 from "../Images/loyalty-customer.png";
import img3 from "../Images/money-back.png";
import img4 from "../Images/safe-payment.png";

class PolicyBox extends Component {
  render() {
    return (
      <div className="p-container">
        <div className="row">
          <div className="col">
            <PBox
              img={img1}
              title="FREE Delibvery"
              distn="Get 10% cash back, free shipping, free returns, and more "
            />
          </div>
          <div className="col">
            <PBox
              img={img2}
              title="MONEYBACK  "
              distn="100% satisfaction guaranteed, or get your money back within if the food is not good!"
            />
          </div>
          <div className="col">
            <PBox
              img={img3}
              title="SAFE PAYMENT"
              distn="Pay with the world’s most popular and secure payment methods."
            />
          </div>
          <div className="col">
            <PBox
              img={img4}
              title="LOYALTY CUSTOMER"
              distn="Card for the other 30% of their purchases at a rate of 1% cash back."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PolicyBox;
