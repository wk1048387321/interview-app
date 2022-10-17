import React, {useEffect, useState} from 'react';
import {Menu, Layout} from 'antd';
import { useNavigate, useLocation } from "react-router-dom";
import {connect} from "react-redux";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
const { Sider } = Layout;

const SidebarMenu = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState([]);
    const [menus, setMenus] = useState([])
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setMenus(props.menus);
    }, [props.menus])

    useEffect(() => {
        if(location.state && location.state.key) {
            setSelectedKey([location.state.key])
        }
    }, [location])

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const onClick = (e) => {
        // console.log('click ', e);
        navigate(`/index/${e.key}`, {state: {key: e.key}, replace: true});
    };

    return (
        <Sider style={{width: 200}} collapsed={collapsed}>
            <div className="" style={{display: 'flex', justifyContent: 'center', padding: '10px 0', background: 'rgba(255,255,255,.05)'}}>
                <span onClick={toggleCollapsed} style={{color: '#fff', cursor: 'pointer'}}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
            </div>

            <Menu
                onClick={onClick}
                defaultChecked={false}
                theme='dark'
                defaultSelectedKeys={['1']}
                selectedKeys={selectedKey}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={menus}
            />
        </Sider>
    );
};
export default connect((store) => store.Home)(SidebarMenu);
