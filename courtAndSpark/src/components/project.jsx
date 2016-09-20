var React = require('react'); 
var Reflux = require('reflux'); 
var Actions = require('../actions'); 
var singleProjectStore = require('../stores/single-project-store'); 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); 

module.exports = React.createClass({
	mixins: [Reflux.listenTo(singleProjectStore, 'onStoreChange')], 
	getInitialState: function () { 
		return {project: null}
	}, 
	componentWillMount: function () { 
		Actions.getProjectById(this.props.params.id); 
	},
	render: function () {
		return <div className="single-project-container"> 
			<ReactCSSTransitionGroup
				transitionName="portfolio"
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={500}
			>
				{this.renderProject()}
			</ReactCSSTransitionGroup> 
		</div> 
	}, 
	renderProject: function () { 
		if (this.state.project) { 
			return <div className="single-project" key={this.state.project.id}> 
				<h1> {this.state.project.title.rendered}</h1>
			</div> 
		}
	}, 
	onStoreChange: function (event, project) { 
		this.setState({project: project}); 
	}
});