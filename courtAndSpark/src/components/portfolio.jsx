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
		Actions.changeBanner(this.bannerText, 'blue1'); 
	}, 
	bannerText: "I climb mountains, build websites, and...", 
	render: function () { 
		return <ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				id="section-portfolio"
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={1500}
				transitionAppear={true}
				transitionAppearTimeout={1000}
			>
			<div className="container-fixed text-center"> 
				<h1> Work </h1> 
			</div> 
			<ProjectList /> 
		</ReactCSSTransitionGroup> 
	}, 
	onStoreChange: function () {
		return false; 
	}
});