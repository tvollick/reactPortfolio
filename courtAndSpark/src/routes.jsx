var React = require('react'); 
var ReactRouter = require('react-router'); 
var Router = ReactRouter.Router; 
var Route = ReactRouter.Route; 
var Main = require('./components/main'); 
var Project = require('./components/project'); 

module.exports = (
	<Router> 
		<Route path="/" component={Main}>
			<Route path="projects/:id" component={Project} /> 
		</Route>
	</Router> 
); 