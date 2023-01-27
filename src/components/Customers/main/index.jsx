import React from 'react';
import { Col, Row } from 'antd';
import ProfileDetails from './profile';
import Transactions from './transaction';
import Activities from './activities';
import Products from './products';

const Main = () => (
  <div className="site-card-wrapper"
  style={{display:"flex"}}
  >
   
<div 
style={{ width:"80%"}}>
<Row gutter={16}
>
      <Col span={12}>
        <ProfileDetails/>
      </Col>
      <Col span={12}>
        <Transactions/>
      </Col>
    </Row>
    <br/>
    <Row gutter={16}
  >
    <Col span={12}>
       <Products/>
      </Col>
    </Row>
</div>
<div >
<Row gutter={16}
style={{ marginLeft:"2%"}}
>
    <Col span={25}>
       <Activities/>
      </Col>
    </Row>
</div>
  </div>
);
export default Main;