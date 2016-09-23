var React = require('react'); 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = React.createClass({
	getInitialState: function () { 
		return {checkedClass:"unchecked"}
	}, 
	render: function () { 
		return <ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={1500}
				transitionAppear={true}
				transitionAppearTimeout={600}
		>
			<div className="heart-page">
				<div className="heart-svg-container"> 
					{this.heartSVG()}
				</div> 
				<button 
					onClick={this.handleButtonClick}
				>
					Heart Me 
				</button> 
			</div> 
		</ReactCSSTransitionGroup> 
	}, 
	handleButtonClick: function () { 
		if (this.state.checkedClass=="unchecked") { 
			this.setState({checkedClass: "checked"})
		} else { 
			this.setState({checkedClass: "unchecked"})
		}
	}, 
	heartSVG: function () { 
		return <svg className={"heart-svg "+this.state.checkedClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.71 156.07">
					<path className="cls-1" d="M156.07,14.64a50,50,0,0,0-70.71,0A50,50,0,0,0,14.64,85.36l70.71,70.71,70.71-70.71A50,50,0,0,0,156.07,14.64Z"/>
		</svg>
	}
}); 