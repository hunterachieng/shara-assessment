import React from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { userDetails, userName, avatar } from "./style";

const User = ({name, title,initials}) => {
  return (
    <div style={userDetails}>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 40, xxl: 40 }}
        icon={initials}
        style={avatar}
      />
      <div style={userName}>
        <h4>{name}</h4>
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default User;
