var React = require('react');
var reactDOM = require('react-dom');
import { hashHistory } from 'react-router';
import RouteMap from '../router/index';


reactDOM.render(<RouteMap history={hashHistory}/>
	,document.getElementById('example'));