import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Avatar from './Avatar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div>
	<h1><center> WELOME TO 8NKIT INC.</center></h1>
	<div><center><Avatar id="1" name="Ankit Sharma" work="Developer" site="https://joeschmoe.io/api/v1/8"/>
		<Avatar id="2" name="Faizan Khan" work="Tester" site="https://joeschmoe.io/api/v1/jon"/>
		<Avatar id="3" name="Deepti Sharma" work="Designer" site="https://joeschmoe.io/api/v1/jess"/>
		<Avatar id="4" name="Karan Kumar" work="Backend" site="https://joeschmoe.io/api/v1/shrre"/></center></div></div>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
