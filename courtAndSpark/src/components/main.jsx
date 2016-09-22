var React = require('react'); 
var Header = require('./header'); 
var ProjectList = require('./project-list'); 
var Portfolio = require('./portfolio'); 
var Heart = require('./heart'); 
module.exports = React.createClass({
	render: function () {
		return <div className="main-container"> 
			<Header /> 
			<Heart /> 
			{this.content()}
		</div> 
	}, 
	content: function () {
		if (this.props.children) { 
			return this.props.children
		} else { 
			// change his to home page. 
			return <Portfolio /> 
		}
	}
}); 