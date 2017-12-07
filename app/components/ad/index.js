import React from 'react';
import './index.css'

export default class Ad extends React.Component{
	render(){
		return(
			<div className="ad-box">
				<p>---优惠---</p>
				<div className="ad">
					<div className="img-box">
						<img src="/images/yh.jpg"/>
					</div>
					<div className="img-box">
						<img src="/images/sx.jpg"/>
					</div>
					<div className="img-box">
						<img src="/images/js.jpg"/>
					</div>
					<div className="img-box">
						<img src="/images/kfc.jpg"/>
					</div>
					<div className="img-box">
						<img src="/images/xfx.jpg"/>
					</div>
					<div className="img-box">
						<img src="/images/lt.jpg"/>
					</div>
				</div>
			</div>
		)
	}
}