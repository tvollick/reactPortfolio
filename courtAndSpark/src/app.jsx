var React = require('react'); 
var ReactDOM = require('react-dom'); 
var Header = require('./components/header'); 

var App = React.createClass({

	render: function () {
		return <div className="app">
			<Header /> 
			<h1> Hello Portfolio </h1> 
		</div> 
	}

}); 

var element = React.createElement(App, {}); 
ReactDOM.render(element, document.querySelector('#app-container')); 
