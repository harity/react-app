import React from 'react';
import './index.css';
import {Link} from 'react-router'

export default class Homelist extends React.Component{
	constructor() {
		super();
        this.state = {
            news: ''
        }
		
	};
	componentWillMount(){
        var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=guoji&count=20", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
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
            </div>
        )
    }
}