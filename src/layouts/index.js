import { Layout, Menu, Icon } from 'antd';
import React from "react";
const { Header, Sider, Content } = Layout;
import "./index.less"
import {connect} from "dva";
import {Link, Route} from 'dva/router';
import Login from "../views/login";
import Home from "../views/home";
import Page1 from "../views/page1";

function Layouts({dispatch, layouts}) {
  function toggleMenu() {
    dispatch({
      type: 'layouts/toggleMenu'
    });
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={layouts.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="home">
            <Icon type="home" />
            <span><Link to='/layout/home'>home</Link></span>
          </Menu.Item>
          <Menu.Item key="login">
            <Icon type="user" />
            <span><Link to='/layout/page1'>page1</Link></span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={layouts.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggleMenu}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 650,
          }}
        >
          <Route path="/layout/home" component={Home} />
          <Route path="/layout/page1" component={Page1} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default connect(({ layouts }) => ({
  layouts
}))(Layouts);
