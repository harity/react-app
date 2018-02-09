import React from 'react';
import CityHeader from '../Components/header/city-header';
import './index.css'

export default class Usercenter extends React.Component{
	constructor() {
		super();
        this.state = {
            
        }
		
	};
    
	render() {
        return (
            <div>
                <CityHeader type={'个人中心'}/>
                <div className="usercenter">
                    <p>用户名：</p>
                    <p>手机：</p>
                    <p>邮箱：</p>
                    <p>微信：</p>
                </div>
            </div>
        )
    }
}