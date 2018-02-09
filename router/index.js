import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from '../app/home/index';
import City from '../app/city/index';
import Detail from '../app/detail/index';
import List from '../app/list/index';
import Usercenter from '../app/usercenter/index';

export default class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={Home}></Route>
                <Route path="/details/:uniquekey" component={Detail} />
                <Route path="/City" component={City} />
                <Route path="/list/:uniquekey" component={List} />
                <Route path="/usercenter" component={Usercenter} />
            </Router>
        )
    }
}

