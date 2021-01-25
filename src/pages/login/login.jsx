import React, {Component} from 'react';
import { Row, Col,Card } from 'antd';
import './login.less';
import HorizontalLoginForm from "../../components/Login";

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={4}>

                        </Col>
                        <Col span={16}>
                            <Card title="Card title" bordered={false}>
                                <HorizontalLoginForm/>
                            </Card>
                        </Col>
                        <Col span={4}>

                        </Col>
                    </Row>
                </div>,
            </div>

        );
    }
}
