import React from 'react';
import ListHeader from  '../components/header/list-header';
import Listpage from '../components/listpage/index'

export default class List extends React.Component{
	constructor() {
		super();
        this.state = {
            type:'',
            list:''
        }
		
	};
    componentWillMount(){
        var arr = ['top','shehui','guonei','guoji','yule'];
        var a = Math.floor(Math.random()*5)
        this.setState({
            type:this.props.params.uniquekey,
            list:arr[a]
        })
    };
	render() {
        return (
            <div>
                <ListHeader type={this.state.type}/>
                <Listpage list = {this.state.list}/>
            </div>
        )
    }
}