var React = require('react');
import './index.css';
import 'antd/dist/antd.css';
import {Link} from 'react-router';
import ReactSwipe from 'react-swipe';

export default class Swipe extends React.Component{
	constructor() {
        super();
        this.state = {
            index: 0
        }
    }
	render() {
		const opt = {
            auto: 4000,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
            <div className="swipe-box">
            	<div className="swipe">
					<ReactSwipe  swipeOptions={opt}>
						<div className="carousel-item">
	                        <ul className="clear-fix">
	                            <Link to="/list/景点"><li className="jingdian">景点</li></Link>
	                            <Link to="/list/KTV"><li className="ktv">KTV</li></Link>
	                            <Link to="/list/购物"><li className="gouwu">购物</li></Link>
	                            <Link to="/list/生活服务"><li className="shenghuofuwu">生活服务</li></Link>
	                            <Link to="/list/健身运动"><li className="jianshenyundong">健身运动</li></Link>
	                            <Link to="/list/美发"><li className="meifa">美发</li></Link>
	                            <Link to="/list/亲子"><li className="qinzi">亲子</li></Link>
	                            <Link to="/list/小吃快餐"><li className="xiaochikuaican">小吃快餐</li></Link>
	                            <Link to="/list/自助餐"><li className="zizhucan">自助餐</li></Link>
	                            <Link to="/list/酒吧"><li className="jiuba">酒吧</li></Link>
	                        </ul>
	                    </div>
	                    <div className="carousel-item">
	                        <ul className="clear-fix">
	                            <Link to="/list/美食"><li className="meishi">美食</li></Link>
	                            <Link to="/list/电影"><li className="dianying">电影</li></Link>
	                            <Link to="/list/酒店"><li className="jiudian">酒店</li></Link>
	                            <Link to="/list/休闲娱乐"><li className="xuixianyule">休闲娱乐</li></Link>
	                            <Link to="/list/外卖"><li className="waimai">外卖</li></Link>
	                            <Link to="/list/火锅"><li className="huoguo">火锅</li></Link>
	                            <Link to="/list/丽人"><li className="liren">丽人</li></Link>
	                            <Link to="/list/度假出行"><li className="dujiachuxing">度假出行</li></Link>
	                            <Link to="/list/足疗按摩"><li className="zuliaoanmo">足疗按摩</li></Link>
	                            <Link to="/list/周边游"><li className="zhoubianyou">周边游</li></Link>
	                        </ul>
	                    </div>
	                    <div className="carousel-item">
	                        <ul className="clear-fix">
	                            <Link to="/list/日本菜"><li className="ribencai">日本菜</li></Link>
	                            <Link to="/list/SPA"><li className="SPA">SPA</li></Link>
	                            <Link to="/list/结婚"><li className="jiehun">结婚</li></Link>
	                            <Link to="/list/学习培训"><li className="xuexipeixun">学习培训</li></Link>
	                            <Link to="/list/西餐"><li className="xican">西餐</li></Link>
	                            <Link to="/list/火车机票"><li className="huochejipiao">火车机票</li></Link>
	                            <Link to="/list/烧烤"><li className="shaokao">烧烤</li></Link>
	                            <Link to="/list/家装"><li className="jiazhuang">家装</li></Link>
	                            <Link to="/list/宠物"><li className="chongwu">宠物</li></Link>
	                            <Link to="/list/全部分类"><li className="quanbufenlei">全部分类</li></Link>
	                        </ul>
	                    </div>
					</ReactSwipe>
				</div>
				<div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}