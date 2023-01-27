import React from "react";
import { Card, Row , List, Divider} from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import { smallText } from "./style";

const Products = () => {
    const data = [
        {
            key:"1",
            product:"Flex",
            status:"Active",
            paymentPeriod:"12 Weeks",
            nextPayment:"Sept 27th, 2022",
            accountManager:"George B",
            relationshipOfficer:"Anto Ondik"
        },
        {
            key:'2',
            product:"Flex",
            status:"Active",
            paymentPeriod:"12 Weeks",
            nextPayment:"Sept 27th, 2022",
            accountManager:"George B",
            relationshipOfficer:"Anto Ondik"
        }
    ]
  const Title = () => {
    return (
      <Row
        // gutter={10}
        style={{ paddingTop: "20px" }}
        justify="space-between"
      >
        <h4>Products</h4>
        <h4>
            Last activity: <bold>17 Oct 2022</bold>
          </h4>
      </Row>
    );
  };
  return (
    <Card title={<Title />}>
      <List
    //   bordered
      dataSource={data}
      size="large"
      rowKey={item=>item.key}
      renderItem={item=>(
        <List.Item
        >
            <Row gutter={50}
            justify="space-between"
            style={{width:"100%"}}
            >
                <div
                >
                Product <p style={{lineHeight:"1px"}}>{item.product}</p>
                
                Next Payment <p style={{lineHeight:"1px"}}>{item.nextPayment}</p>
                </div>
                <div 
               >
                Status <p style={{lineHeight:"1px"}}>{item.status}</p>
                Account Manager <p style={{lineHeight:"1px"}}>{item.accountManager}</p>
                </div>
                <div >
                Payment Period <p style={{lineHeight:"1px"}}>{item.paymentPeriod}</p>
                Relationship Officer <p style={{lineHeight:"1px"}}>{item.relationshipOfficer}</p>
                </div>
                <RightCircleOutlined 
                style={{marginTop:"15%"}}
                />
            </Row>
           
            
        </List.Item>
      )}
      />
       <Divider/>
       <small style={smallText}>View All</small>
    </Card>
  );
};
export default Products;
