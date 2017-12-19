import React from 'react';
import Header from '../components/header/header';
import Swipe from '../components/swipe/index';
import Ad from '../components/ad/index';
import Homelist from '../components/Homelist/index';
import store from '../mobx/index';

export default class Home extends React.Component{
	constructor() {
		super();
		
	};
	render() {
        return (
            <div>
            	<Header city={store.city}></Header>
                <Swipe/>
                <Ad/>
                <Homelist />
            </div>
        )
    }
}