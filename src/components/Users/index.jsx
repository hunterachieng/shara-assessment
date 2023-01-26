import React from "react";
import SideLayout from "../Layout";
import AppDropdown from "../../atoms/Dropdown";
import UserTabs from "./UserTabs";

const Users = ()=>{
    const items = [
        {
            label: "Kenya",
            key: "0",
          },
          {
            label: "Nigeria",
            key: "1",
          },
    ]
    return(
        <SideLayout>
            <AppDropdown title="Country" items={items}/>
            <UserTabs/>
        </SideLayout>
    )
}

export default Users;