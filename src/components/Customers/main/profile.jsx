import React from "react";
import { Card, Row, Col } from "antd";
import User from "../../../atoms/User-Avatar";
import { MdOutlineEdit } from "react-icons/md";
import { profileStatus, dot, paragraph } from "./style";

const ProfileDetails = () => {
  const Title = () => {
    return (
      <Row
        // gutter={10}
        style={{ paddingTop: "20px" }}
        justify="space-between"
      >
        <User name="Kelvin Akay" title="Nairobi, Kenya" initials="KA" />
        <div style={profileStatus}>
          <MdOutlineEdit size={20} style={{ marginTop: "1%" }} />
          <h5>
            <span style={dot}></span> Active
          </h5>
          <h5>
            Customer No: <bold>876000696</bold>
          </h5>
        </div>
      </Row>
    );
  };
  return (
    <Card title={<Title />}>
      <div >
        <Row
        gutter={16}
        >
          <Col span={12}>
            <p style={paragraph}>Gender</p>

            <b>Male</b>
          </Col>
          <Col span={12}>
            <p style={paragraph}> Date Of Birth</p>
            <b>12/03/1990</b>
          </Col>
        </Row>
        <br/>
        <Row gutter={16}>
          <Col span={12}>
            <p style={paragraph}>National Id</p>
            <b>xxxxxxx90</b>
          </Col>
          <Col span={10}>
            <p style={paragraph}>Mobile Number</p>
            <b>+254712345678</b>
          </Col>
        </Row>
        <br/>
        <Row gutter={16}>
          <Col span={12}>
            <p style={paragraph}> Pysical Address</p>
            <b>Moja Rd, KSM</b>
          </Col>
          <Col span={10}>
            <p style={paragraph}>Email Address</p>
            <b>emailme@gmail.com</b>
          </Col>
        </Row>
        <br/>
      </div>
    </Card>
  );
};
export default ProfileDetails;
