import React from "react";
import {Layout} from 'antd';
import { Routes, Route } from "react-router-dom";

import '../assets/css/App.css';

import SidebarMenu from "../view/Sider";
import ContentPage from "../view/Content";

import logo from '../assets/svg/logo.svg';

const { Header, Content } = Layout;

function App() {

  return (
    <div className="App">
        <Layout>
            <Header>
                <div className="header-logo">
                    <img src={logo} width='40' height='40' alt=""/>
                    <h2 className='header-name'>React</h2>
                </div>
            </Header>
            <Layout className="content">
                <SidebarMenu />

                <Content >
                    <Routes>
                        <Route path='/' element={<ContentPage />} />
                        <Route path='/index/:id' element={<ContentPage />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    </div>
  );
}

export default App;
