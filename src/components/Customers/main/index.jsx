import React from 'react';
import { Card, Col, Row } from 'antd';
import ProfileDetails from './profile';
import Transactions from './transaction';
const Main = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <ProfileDetails/>
      </Col>
      <Col span={8}>
        <Transactions/>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);
export default Main;