var React = require('react'); 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Reflux = require('reflux'); 
var NavStore = require('../stores/nav-store'); 
var Actions = require('../actions'); 

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(NavStore, 'onStoreChange')
	], 
	componentWillMount: function () {
		Actions.changeBanner(this.bannerText, 'orange'); 
	}, 
	bannerText: "Let’s Work Together.", 
	render: function () {
		return <ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={1500}
				transitionAppear={true}
				transitionAppearTimeout={600}
		>
			<div className="container-fixed">
				<h1> Contact Page </h1> 
			</div> 
		</ReactCSSTransitionGroup> 
	}, 
	onStoreChange: function () { return false}
}); 