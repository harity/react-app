var React = require('react');
import './index.css';
import 'antd/dist/antd.css';
import {
	Icon,
 	Row, 
 	Col
 	} from 'antd';
import {Link} from 'react-router'
import { hashHistory } from 'react-router';

export default class ListHeader extends React.Component{
	render() {
        return (
            <div className="top top1">
	            <Row>
				    <Col span={4} className="city_box">
				    	<span onClick={hashHistory.goBack}><Icon type="left" /></span>
				    </Col>
				    <Col span={16} className="list-type">
				    	<span className="header-type">{this.props.type}</span>
				    </Col>	
				    <Col span={4} className="user"><Icon type="user" /></Col>
			    </Row>
            </div>
        )
    }
}