var React = require('react'); 
var Reflux = require('reflux'); 
var Actions = require('../actions'); 
var ProjectStore = require('../stores/project-store'); 
var ReactRouter = require('react-router'); 
var Link = ReactRouter.Link; 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var PortfolioBox = require('./portfolio-box'); 

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
			console.log(project); 
				return <PortfolioBox
					key={project.id}
					{...project}
				/>
		}); 
	},
	componentWillUnmount: function () { 
		console.log('unmounting'); 
	}, 
	componentWillLeave: function (callback) { 
		console.log('leaving?'); 
		this._animateOut(callback); 
	},   
	_animateOut: function (callback) { 
		console.log('here'); 
	}, 
	render: function () { 
		return <div id="portfolio" key={284828}>
				{this.renderProjects()}
			</div>
	}, 
	onStoreChange: function (event, projects) {
		this.setState({projects: projects})
	}  
}); 