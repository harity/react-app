import React from 'react';
import './index.css';
import 'antd/dist/antd.css';
import {
	Icon,
 	Row, 
 	Col
 	} from 'antd';
import {Link} from 'react-router'
import { hashHistory } from 'react-router';

export default class CityHeader extends React.Component{
	render() {
        return (
            <div className="top">
	            <Row>
				    <Col span={4} className="city_box">
				    	<span onClick={hashHistory.goBack}><Icon type="left" /></span>
				    </Col>
				    <Col span={16} className="list-type">
				    	<span>{this.props.type}</span>
				    </Col>	
				    <Col span={4}></Col>
			    </Row>
            </div>
        )
    }
}