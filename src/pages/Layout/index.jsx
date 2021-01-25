import React, {Component} from 'react';
import BackMenu from "../../components/BackMenu";
import {Col, Row} from "antd";

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <BackMenu/>
                        {this.props.children}
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}
