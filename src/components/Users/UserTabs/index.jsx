import React from "react";
import { Tabs } from 'antd';
import SubmittedData from "./submitted";

const UserTabs = () =>{
    const items = [
        {
          key: '1',
          label: `Submitted`,
          children: <SubmittedData/>,
        },
        {
          key: '2',
          label: `Pending`,
          children: `Pending users`,
        },
        {
          key: '3',
          label: `Approved`,
          children: `Approved users`,
        },
        {
            key: '4',
            label: `Rejected`,
            children: `Rejected users`,
          },
      ];
    return(
        <Tabs defaultActiveKey="1" items={items} style={{marginTop:"2%"}} />
    )
}
export default UserTabs;