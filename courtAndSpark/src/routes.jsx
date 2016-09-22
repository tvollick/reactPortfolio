var React = require('react'); 
var ReactRouter = require('react-router'); 
var Router = ReactRouter.Router; 
var Route = ReactRouter.Route; 
var Main = require('./components/main'); 
var Project = require('./components/project'); 
var Heart = require('./components/heart'); 

module.exports = (
	<Router> 
		<Route path="/" component={Main}>
			<Route path="projects/:id" component={Project} /> 
			<Route path="heart" component={Heart} /> 
		</Route>
	</Router> 
); 