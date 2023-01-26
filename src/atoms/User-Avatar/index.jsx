import React from "react";
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { userDetails, userName, avatar } from "./style";

const User = () =>{
    return(
        <div style={userDetails}>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 40, xxl: 40 }}
        icon={<AntDesignOutlined />}
        style={avatar}
        
      />
      <div style={userName}>
        <h4>Welcome, Username</h4>
        <h6>Team Lead</h6>
      </div>
        </div>
  
    )
}

export default User