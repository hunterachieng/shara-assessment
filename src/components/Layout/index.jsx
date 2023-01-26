import React from 'react';
import { header, menu , slider, title, headerTitle} from './style';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import SearchBar from '../../atoms/SearchBar';
import User from '../../atoms/User-Avatar';

const { Header, Content, Footer, Sider } = Layout;

const SideLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
          defaultSelectedKeys={['4']}
          
        >
            <Menu.Item>Overview +</Menu.Item>
            <Menu.Item>Customers +</Menu.Item>
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
            <User/>
            </div>
           
            </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Shara Assessment ©2023 Created by Hunter</Footer>
      </Layout>
    </Layout>
  );
};

export default SideLayout;