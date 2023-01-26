import React from "react";
import AppDropdown from "../../../atoms/Dropdown";
import UnivButton from "../../../atoms/Button";
import { container } from "./style";

const HeadNav = () => {
  const items = [
    {
      label: "Price",
      key: "0",
    },
    {
      label: "Products",
      key: "1",
    },
  ];
  return (
    <div style={container}>
      <AppDropdown title="Filters" items={items} />
      <UnivButton content="+ Add New User" />
    </div>
  );
};
export default HeadNav;
