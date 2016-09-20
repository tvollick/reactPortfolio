var React = require('react'); 
var Reflux = require('reflux'); 
var Actions = require('../actions'); 
var ProjectStore = require('../stores/project-store'); 
var ReactRouter = require('react-router'); 
var Link = ReactRouter.Link; 


module.exports = React.createClass({
	mixins: [	
		Reflux.listenTo(ProjectStore, 'onStoreChange')
	], 
	getInitialState: function () { 
		return { 
			projects: []
		}
	}, 
	componentWillMount: function () { 
		Actions.getProjects(); 
	}, 
	renderProjects: function () {
		return this.state.projects.map(function(project){
			return <Link to={"projects/"+project.id} className="list-group-item" key={project.id}>
				<h2> {project.title.rendered} </h2> 
			</Link>
		}); 
	}, 
	render: function () { 
		return <div className="list-group">
			{this.renderProjects()}
		</div> 
	}, 
	onStoreChange: function (event, projects) { 
		this.setState({projects: projects})
	}  
}); 