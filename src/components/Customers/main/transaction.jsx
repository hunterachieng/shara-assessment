import React from "react";
import {  Row , Col, Card, Divider} from "antd";
import { transactionStatus, transactionHeader, smallText } from "./style";
import { DownOutlined } from "@ant-design/icons";
import TransactionTable from "./transactionTable";

const Transactions  = () =>{
    const Title =()=> {
        return(
            <Row        style={{ padding: "22px 0px" }}
            gutter={16}
          >
           <Col span={14}
           style={transactionHeader}>
            <h5>Transaction History</h5>
            <small>Period 28th Jun22-28 Jul 22 <DownOutlined/></small>
           </Col>
            <Col 
            span={8}
            style={transactionStatus}>
              
              <p>Money In: <b>  KSh 230.300</b></p>
              <p>Money Out: <b>  KSh 150.300</b></p>
              <b>Closing Bal:  KSh 12.000</b>
            </Col>

            </Row>
        )

    }
    return(
        <Card 
        title={<Title/>}>
            <TransactionTable/>
            <small style={smallText}>Download <Divider type="vertical"/> Share</small>

        </Card>

    )
}
export default Transactions