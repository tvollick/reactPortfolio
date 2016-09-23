var React = require('react'); 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = React.createClass({
	render: function () {
		return <ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={1500}
				transitionAppear={true}
				transitionAppearTimeout={600}
		>
			<h1> Contact Page </h1> 
		</ReactCSSTransitionGroup> 
	}
}); 