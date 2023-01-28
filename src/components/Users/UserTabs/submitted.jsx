import React from "react";
import {  Table } from "antd";
import CollapseData from "./collapseData";

const SubmittedData = () => {
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Submission Id",
      dataIndex: "submissionId",
      key: "submissionId",
    },
    {
      title: "Merchant's Name",
      dataIndex: "merchant",
      key: "merchant",
    },
    {
      title: "Business Name",
      dataIndex: "business",
      key: "business",
    },
    {
      title: "Submission Date",
      dataIndex: "submission",
      key: "submission",
    },
    {
      title: "Transaction Type",
      dataIndex: "transaction",
      key: "transaction",
    },
    {
      title: "Account Manager",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Community Lead",
      dataIndex: "community",
      key: "community",
    },
  ];
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push({
      key: i.toString(),
      no: (i + 1).toString(),
      submissionId: "87970645",
      merchant: "Peter Johnson",
      business: "Min Biz",
      submission: "12/02/2022",
      transaction: "BNPL",
      account: "Antonie Bond",
      community: "Joseph Msika",
    });
  }
  const expandedRowRender = () => {
    return <CollapseData />;
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: "30vw" }}
        expandable={{
          expandedRowRender,
        }}
      />
    </>
  );
};
export default SubmittedData;
