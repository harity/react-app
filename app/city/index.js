var React = require('react');
import CityHeader from '../Components/header/city-header';
import './index.css'
import {observer} from 'mobx-react';
import Store from '../mobx/index';

const City  = observer(class City extends React.Component{
	constructor() {
        super();
        this.state = {
        	city : Store.city
        }
    };
    clickHandle(cityName) {
        //localStorage.city = cityName;
        Store.city = cityName;
        this.setState({
        	city : Store.city
        })
    };
	render() {
        return (
        	<div>
        		<CityHeader/>
        		<p className="cityname">{this.state.city == null?'北京':this.state.city}</p>
        		<div className="city-box">
					<p>---热门城市---</p>
					<ul>
						<li onClick={this.clickHandle.bind(this, '北京')}>北京</li>
						<li onClick={this.clickHandle.bind(this, '上海')}>上海</li>
						<li onClick={this.clickHandle.bind(this, '杭州')}>杭州</li>
						<li onClick={this.clickHandle.bind(this, '江苏')}>江苏</li>
						<li onClick={this.clickHandle.bind(this, '南京')}>南京</li>
						<li onClick={this.clickHandle.bind(this, '广州')}>广州</li>
						<li onClick={this.clickHandle.bind(this, '深圳')}>深圳</li>
						<li onClick={this.clickHandle.bind(this, '宁波')}>宁波</li>
						<li onClick={this.clickHandle.bind(this, '西安')}>西安</li>
						<li onClick={this.clickHandle.bind(this, '陕西')}>陕西</li>
						<li onClick={this.clickHandle.bind(this, '丽水')}>丽水</li>
						<li onClick={this.clickHandle.bind(this, '龙泉')}>龙泉</li>
					</ul>
        		</div>
            </div>
        )
    }
})
export default City;