var React = require('react'); 
var Header = require('./header'); 
var ProjectList = require('./project-list'); 

module.exports = React.createClass({
	render: function () {
		return <div className="main-container"> 
			<Header /> 
			{this.content()}
		</div> 
	}, 
	content: function () {
		if (this.props.children) { 
			return this.props.children
		} else { 
			// change his to home page. 
			return <ProjectList /> 
		}
	}
})