import React from 'react';
import './index.css';
import {Link} from 'react-router';

export default class Homelist extends React.Component{
	constructor() {
		super();
        this.state = {
            news: '',
            loadmore:true,
            isloading:false
        }
		
	};
	componentDidMount(){
		var _this = this;
		let timeoutId;
		const wrapper = this.refs.wrapper;
        var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=guoji&count=5", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    	function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                _this.moremsg()
            }
        };
    	window.addEventListener('scroll', function () {
            if (this.state.isloading) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
    };

    moremsg(){
    	console.log(111)
    	var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=guoji&count=5", myFetchOptions).then(response => response.json()).then(json => this.setState({news: this.state.news.concat(json)}));
    	
    };
	render() {
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
        <div key={index} className="hl-item">
          	<Link to={`details/${newsItem.uniquekey}`}>
	            <div className="hl-img">
	            	<img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
	            </div>
	            <div className="hl-text">
					<span>{newsItem.title}</span>
					<div className="hl-t">
					    <span className="hl-type">{newsItem.realtype}</span>
					    <span className="hl-time">{newsItem.date}</span>
					</div>
	            </div>
            </Link>
        </div>
         	))
			: '没有加载到任何新闻';
        return (
            <div className="homelist">
            	<p>---推荐---</p>
	            {newsList}
	            <div className="loadmore" ref="wrapper">
	            {
	            	this.state.loadmore
	            	?<span onClick={this.moremsg.bind(this)} >加载更多</span>
	            	:<span>加载中...</span>
	            }
	            </div>
            </div>
        )
    }
}