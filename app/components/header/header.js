var React = require('react');
import './index.css';
import 'antd/dist/antd.css';
import {
	Icon,
 	Row, 
 	Col
 	} from 'antd';
import {Link} from 'react-router'

export default class Header extends React.Component{
	render() {
        return (
            <div className="top top1">
	            <Row>
				    <Col span={4} className="city_box">
				    	<Link to="/city">
				    		<span className="city">{this.props.city} ∨</span>
				    	</Link>
				    </Col>
				    <Col span={16}>
				    	<input type="text" placeholder="请输入内容" className="search"  />
				    </Col>	
				    <Col span={4} className="user">
				    	<Link to="/usercenter">
				    		<Icon type="user" />
				    	</Link>
				    </Col>
			    </Row>
            </div>
        )
    }
}