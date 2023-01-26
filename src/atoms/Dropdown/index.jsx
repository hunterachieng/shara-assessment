import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { text } from "./style";

const AppDropdown = ({ items, title }) => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={text}>
        {title}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default AppDropdown;
