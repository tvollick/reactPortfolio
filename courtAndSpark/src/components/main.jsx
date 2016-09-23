var React = require('react'); 
var Header = require('./header'); 
var ProjectList = require('./project-list'); 
var Portfolio = require('./portfolio'); 
var Heart = require('./heart'); 
var SideNav = require('./side-nav'); 
var Reflux = require('reflux'); 
var navStore = require('../stores/nav-store'); 

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(navStore, 'onStoreChange') 
	], 
	getInitialState:function () { 
		return { navOpen: false}
	}, 
	render: function () {
		return <div className={"main-container "+this.getNavState()}> 
			<SideNav /> 
			<div id="app-content">
				<Header /> 
				{this.content()}
			</div> 
		</div> 
	}, 
	getNavState: function () { 
		if (this.state.navOpen) { 
			return "nav-open"; 
		} else {
			return "nav-closed"; 
		}
	}, 
	content: function () {
		if (this.props.children) { 
			return this.props.children
		} else { 
			// change his to home page. 

			return <div> 
				<Heart /> 
				<Portfolio /> 
			</div> 
		}
	}, 
	onStoreChange: function (event, state) { 
		this.setState({navOpen: state}); 
	}	
}); 