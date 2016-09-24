var React = require('react'); 
var ProjectList = require('./project-list'); 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Reflux = require('reflux'); 
var NavStore = require('../stores/nav-store'); 
var Actions = require('../actions'); 


module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(NavStore, 'onStoreChange')
	], 
	componentWillMount: function () {
		Actions.changeBanner(this.bannerText, 'green'); 
	}, 
	bannerText: "I climb mountains, build websites, and want to work for you.", 
	render: function () { 
		return <ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={1500}
				transitionAppear={true}
				transitionAppearTimeout={600}
			>
			<h1> Work </h1> 
			<ProjectList /> 
		</ReactCSSTransitionGroup> 
	}, 
	onStoreChange: function () {
		return false; 
	}
});