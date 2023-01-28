import React from "react";
import { Col, Row } from "antd";
import ProfileDetails from "./profile";
import Transactions from "./transaction";
import Activities from "./activities";
import Products from "./products";
import { mainContainer } from "./style";

const Main = () => (
  <div className="grid-container">
    <div className="grid-item">
    <ProfileDetails />
    </div>
    <div className="grid-item item2">
    <Transactions />
    </div>
  
    <div className="grid-item item3">
    <Activities />
    </div>
    <div className="grid-item item4">
    <Products />
    </div>

  </div>
  
);
export default Main;
