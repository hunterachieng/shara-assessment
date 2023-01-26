import React from 'react';
import { header, menu , slider, title, headerTitle} from './style';
import { Layout, Menu} from 'antd';
import SearchBar from '../../atoms/SearchBar';
import User from '../../atoms/User-Avatar';
import {NavLink as Link} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const SideLayout = ({children}) => {


  return (
    <Layout style={{minHeight:"100vh"}}>
      <Sider
      style={slider}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Header style={headerTitle}>
            Hunter</Header>
        <Menu
          theme="light"
          mode="inline"
          style={menu}
          // defaultSelectedKeys={['4']}
          
        >
            <Menu.Item><Link to="/hello">Overview +</Link></Menu.Item>
            <Menu.Item><Link to="/" >Customers +</Link></Menu.Item>
            <Menu.Item>Companies +</Menu.Item>
            <Menu.Item>Deposits +</Menu.Item>
            <Menu.Item>Loans +</Menu.Item>
            <Menu.Item>Products +</Menu.Item>
            <Menu.Item>Users +</Menu.Item>
            <Menu.Item>Communications</Menu.Item>
            </Menu>
      </Sider>
      <Layout>
        <Header style={header} >
            <div style={title}>
            <SearchBar/>
            <User name="Welcome, UserName" title="Team Lead" initials="UN"/>
            </div>
           
            </Header>
        <Content style={{ margin: '24px 2% 0' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Shara Assessment ©2023 Created by Hunter</Footer>
      </Layout>
    </Layout>
  );
};

export default SideLayout;