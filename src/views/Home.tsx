import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MainMenu from '@/components/MainMenu';
import Avatar from '@/components/Avatar';

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
 
  const currentRoute = useLocation()

  const breadcrumb = currentRoute.pathname.split('/').slice(1).map(item => ({
    title: item
  }))

  const navigateTo  = useNavigate()

  const nav = (path:string) =>{
    navigateTo(path)
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='logo' />
        <MainMenu />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{ paddingLeft: '16px', display: 'flex', justifyContent: 'space-between'}}
        >
          {/* <Breadcrumb style={{ lineHeight: '64px' }} items={[{ title: 'sample' }]} />
           */}
          <Breadcrumb
            separator='>'
            items={[
              {
                title: <>
                  <span onClick={() => nav('/')}>home</span>
                </>             
              },
              ...breadcrumb
            ]}
          />
          <Avatar />
        </Header>
        <Content
          style={{ margin: '16px 16px 0' }}
          className='site-layout-background'
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;
