import React from "react";
import { Row, Col, Avatar } from "antd";
import User from "../../../atoms/User-Avatar";
import UnivButton from "../../../atoms/Button";
import { MdOutlineEdit } from "react-icons/md";
import { PictureOutlined, FileImageOutlined, UpCircleOutlined } from "@ant-design/icons";
import { paragraph, collapsData, collapseDataContainer, avatarContainer} from "../style";

const CollapseData = () => {
  const data = [
    {
      name: "Ndabuki Isaac",
      location: "Nairobi,Kenya",
      nationalId: "90876543",
      dob: "12/03/1990",
      gender: "Male",
      mobileNumber: "+ 254 712 345678",
      businessName: "Jisoo Limited",
      incoporateDate: "31 May,2016",
      businessAddress: "Moja Rd, KSM",
      businessCategory: "Electronic",
      productSold: "Phones, laptops, tablets",
      shopSetup: "shop.jpeg",
      licence: [
        { id: "1", number: "licence.docx" },
        { id: "2", number: "incoporation.docx" },
      ],
      statements: [
        { id: "1", statement: "mpesa.pdf" },
        { id: "2", statement: "bank.pdf" },
      ],
    },
  ];
  return (
    <div style={collapseDataContainer}>
        <UpCircleOutlined style={{position:"absolute",right:"2%"}}/>
        {data.map(item=>
        <div style={avatarContainer}>
        <Avatar
          size={{ xs: 24, sm: 32, md: 50, lg: 84, xl: 80, xxl: 100 }}
          icon="NI"
        />
        <div >
          <h3>{item.name}</h3>
          <p style={paragraph}>{item.location}</p>
        </div>
      </div>)}
        <div style={collapsData}>
      {data.map((item) => (
        <>
          <Row gutter={16}>
            <Col span={5}>
              <p style={paragraph}>National ID</p>
              <b>{item.nationalId}</b>
            </Col>
            <Col span={5}>
              <p style={paragraph}>Date of Birth</p>
              <b>{item.dob}</b>
              
            </Col>
            <Col span={4}>
              <p style={paragraph}>Gender</p>
              <b>{item.gender}</b>
            </Col>
            <Col span={4}>
              <p style={paragraph}> Mobile Number</p>
              <b>{item.mobileNumber}</b>
            </Col>
            <Col span={5}>
              <UnivButton content="View Comments" />
              <MdOutlineEdit size={24} style={{margin:"5% 0% 0% 2%"}}/>
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={5}>
              <p style={paragraph}>Business Name</p>
              <b>{item.businessName}</b>
            </Col>
            <Col span={5}>
              <p style={paragraph}>Incorporation Date</p>
              <b>{item.incoporateDate}</b>
            </Col>
            <Col span={4}>
              <p style={paragraph}>Business Address</p>
              <b>{item.businessAddress}</b>
            </Col>
            <Col span={4}>
              <p style={paragraph}>Business Category</p>
              <b>{item.businessCategory}</b>
            </Col>
            <Col span={5}>
              <p style={paragraph}>Products Sold</p>
              <b>{item.productSold}</b>
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={4}>
              <p style={paragraph}>Shop Setup Photos</p>
              <PictureOutlined /> <a href="#">{item.shopSetup}</a>
            </Col>
            <Col span={11}>
              <p style={paragraph}>Business License or permit/certificate</p>
            <Row>  {item.licence.map(data=>
                <Col span={8}><FileImageOutlined /><a href="#">{data.number}</a> </Col>)}</Row>
            </Col>
            <Col span={8}>
              <p style={paragraph}>Mpesa Statement or Bank Statement</p>
             <Row > {item.statements.map(data=>
                <Col span={12}><FileImageOutlined /><a href="#">{data.statement}</a> </Col>)} </Row>
            </Col>
         
          </Row>
        </>
      ))}
      </div>
    </div>
  );
};
export default CollapseData;
