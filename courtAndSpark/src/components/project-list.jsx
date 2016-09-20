var React = require('react'); 
var Reflux = require('reflux'); 
var Actions = require('../actions'); 
var ProjectStore = require('../stores/project-store'); 
var ReactRouter = require('react-router'); 
var Link = ReactRouter.Link; 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = React.createClass({
	mixins: [	
		Reflux.listenTo(ProjectStore, 'onStoreChange')
	], 
	getInitialState: function () { 
		return { 
			projects: [], 
			mounted: false
		}
	}, 
	componentWillMount: function () { 
		Actions.getProjects(); 
	},
	componentDidMount: function () { 
		this.setState({mounted:true}); 
	}, 
	renderProjects: function () {
		return this.state.projects.map(function(project){
			return <div className="portfolio-wrapper" key={project.id}>
				<Link to={"projects/"+project.id} className="list-group-item">
					<h2> {project.title.rendered} </h2> 
				</Link>
			</div>
		}); 
	}, 
	render: function () { 
		return <div id="portfolio">
			<ReactCSSTransitionGroup
					transitionName="portfolio"
					transitionEnterTimeout={1500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={1500}
				>
					<h2 key="portfolio-title"> Project List </h2> 
					{this.renderProjects()}
				</ReactCSSTransitionGroup>
			</div>
	}, 
	onStoreChange: function (event, projects) { 
		this.setState({projects: projects})
	}  
}); 