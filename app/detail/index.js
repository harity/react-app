import React from 'react';
import ListHeader from '../components/header/list-header'
import './index.css'

export default class Detail extends React.Component{
	constructor() {
		super();
		this.state = {
			newsItem: '',
			type:''
		};
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json,type:json.title});
		});
	};
	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
	render() {
        return (
            <div>
            	<ListHeader type = {this.state.type}/>
            	<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            </div>
        )
    }
}