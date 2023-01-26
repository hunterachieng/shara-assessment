import React from "react";
import { Input } from "antd";
import { searchBar } from "./style";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = ({ onSearch }) => {
  return (
    <Input
      onChange={onSearch}
      style={searchBar}
      placeholder="Search"
      // bordered
      size="default"
      prefix={<SearchOutlined />}
    />
  );
};
export default SearchBar;
