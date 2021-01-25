import React from "react";
import { Link } from "react-router-dom";
import {Menu} from 'antd';
import {SolutionOutlined, UserSwitchOutlined} from '@ant-design/icons';

export default class BackMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'admin', //与下级菜单的key是对应的
            isModalVisible: false, //模态框的显示状态
            forceUpdate:{},//登录表单
        };
    }

    //菜单的事件
    handleMenuClick = e => {
        this.setState({ current: e.key });

        //点击login
        if(e.key === "login"){
            this.setState({isModalVisible:true});
        }
    };

    render() {
        const { current } = this.state;

        return (
            <div>
                <Menu onClick={this.handleMenuClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="admin" icon={<SolutionOutlined />}>
                        <Link to="/admin">admin</Link>
                    </Menu.Item>
                    <Menu.Item key="login" style={{float:'right'}} icon={<UserSwitchOutlined />}>
                        <Link to="/login">登录|注册</Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

