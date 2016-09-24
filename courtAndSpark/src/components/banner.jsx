var React = require('react'); 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = React.createClass({
	render: function () {
		return <ReactCSSTransitionGroup
				component="div"
				transitionName="none"
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={1500}
				transitionAppear={true}
				transitionAppearTimeout={600}
		>
			<div id="banner"> 
				<div className="container-fixed">
					<h2 className="banner-title">{this.props.text}</h2> 
				</div> 
			</div> 
		</ReactCSSTransitionGroup>
	}
}); 

