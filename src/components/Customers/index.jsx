import React from "react";
import SideLayout from "../Layout";
import HeadNav from "./header/headNav";
import Main from "./main";

const Customers = ()=>{
    return(
        <SideLayout>
          <HeadNav/>
          <br/>
          <Main/>

        </SideLayout>
        
    )
}
export default Customers;