var React = require('react'); 
var ReactRouter = require('react-router'); 
var Router = ReactRouter.Router; 
var Route = ReactRouter.Route; 
var Main = require('./components/main'); 
var Project = require('./components/project'); 
var Heart = require('./components/heart');
var Contact = require('./components/contact'); 
var Portfolio = require('./components/portfolio'); 

module.exports = (
	<Router> 
		<Route path="/" component={Main}>
			<Route path="projects/:id" component={Project} /> 
			<Route path="heart" component={Heart} /> 
			<Route path="contact" component={Contact} /> 
			<Route path="work" component={Portfolio} /> 
		</Route>
	</Router> 
); 