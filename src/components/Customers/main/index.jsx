import React from "react";
import { Col, Row } from "antd";
import ProfileDetails from "./profile";
import Transactions from "./transaction";
import Activities from "./activities";
import Products from "./products";
import { mainContainer } from "./style";

const Main = () => (
  <Row className="site-card-wrapper" style={mainContainer}>
    <div className="home" style={{ width: "70%" }}>
      <Row gutter={{ xs: 8, sm: 20, md: 24, lg: 20 }}>
        <Col span={12}>
          <ProfileDetails />
        </Col>
        <Col span={12}>
          <Transactions />
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col span={12}>
          <Products />
        </Col>
      </Row>
    </div>
    <div>
      <Row gutter={16} style={{ marginLeft: "3%" }}>
        <Col span={35}>
          <Activities />
        </Col>
      </Row>
    </div>
  </Row>
);
export default Main;
