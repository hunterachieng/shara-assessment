import React from "react";
import { Card, Row } from "antd";
import User from "../../../atoms/User-Avatar";
import { MdOutlineEdit } from "react-icons/md";
import { profileStatus, dot, detailsHolder } from "./style";

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
      <div style={detailsHolder}>
        <Row gutter={0} justify="space-between" 
        // style={secondDetail}
        >
          <p>
            Gender
            <br />
            <b>Male</b>
          </p>

          <p>
            Date Of Birth
            <br />
            <b>12/03/1990</b>
          </p>
        </Row>
        <Row gutter={0} justify="space-between">
          <p>
            National Id
            <br />
            <b>xxxxxxx90</b>
          </p>

          <p>
            Mobile Number
            <br />
            <b>+254712345678</b>
          </p>
        </Row>
        <Row gutter={10} justify="space-between">
          <p>
            Pysical Address
            <br />
            <b>Moja Rd, KSM</b>
          </p>

          <p>
            Email Address <br />
            <b>emailme@gmail.com</b>
          </p>
        </Row>
      </div>
    </Card>
  );
};
export default ProfileDetails;
