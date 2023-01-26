import React from "react";
import { Card, Row , Divider} from "antd";
import { transactionStatus, transactionHeader, smallText } from "./style";
import { DownOutlined } from "@ant-design/icons";
import TransactionTable from "./transactionTable";

const Transactions  = () =>{
    const Title =()=> {
        return(
            <Row        style={{ padding: "22px 20px" }}
            justify="space-between"
          >
           <div style={transactionHeader}>
            <h5>Transaction History</h5>
            <small>Period 28th Jun22-28 Jul 22 <DownOutlined/></small>
           </div>
            <div style={transactionStatus}>
              
              <p>Money In: <b>  KSh 230.300</b></p>
              <p>Money Out: <b>  KSh 150.300</b></p>
              <b>Closing Bal:  KSh 12.000</b>
            </div>

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