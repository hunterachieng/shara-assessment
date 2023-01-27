import { Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Transaction ID",
    dataIndex: "transactionID",
  },
  {
    title: "Details",
    dataIndex: "details",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "View",
    dataIndex: "view",
  },
];
const data = [
  {
    key: "1",
    date: "2022-05-23",
    transactionID: "WTR-TEGRG",
    details: "Deposit",
    amount: 1200700,
    view: <EyeOutlined />,
  },
  {
    key: "2",
    date: "2022-05-23",
    transactionID: "WTR-TEGRG",
    details: "Deposit",
    amount: 1200700,
    view: <EyeOutlined />,
  },
  {
    key: "3",
    date: "2022-05-23",
    transactionID: "WTR-TEGRG",
    details: "Deposit",
    amount: 1200700,
    view: <EyeOutlined />,
  },
  {
    key: "4",
    date: "2022-05-23",
    transactionID: "WTR-TEGRG",
    details: "Deposit",
    amount: 1200700,
    view: <EyeOutlined />,
  },
];
const TransactionTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    size="small"
    pagination={{ position: ["none", "none"] }}
  />
);
export default TransactionTable;
