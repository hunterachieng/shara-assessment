import React from "react";
import { Card, Divider } from "antd";

const Activities = () => {
  return (
    <Card 
    // style={{width:"60%"}}
    title="Latest Activity">
      <small>Transaction success Oct 19,2022 at 1:05 PM</small>
      <p>
        KES 100,000 processed
         successfully, ref QKj88XUSUW
      </p>
      <small>Deputy Lead- Oct 14,2022 at 4:05 PM</small>
      <p>Lorem ipsum is simply dummy text</p>
      <Divider />
      <small>Papa Jay Oct 19,2022 at 1:05 PM</small>
      <p>Lorem ipsum is simply dummy text</p>
      <small>Ray- Oct 14,2022 at 4:05 PM</small>
      <p>Lorem ipsum is simply dummy text</p>
      <Divider />
    </Card>
  );
};
export default Activities;
