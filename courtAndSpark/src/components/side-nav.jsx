var React = require('react'); 
var Reflux = require('reflux'); 
var NavItem = require('./nav-item'); 

module.exports = React.createClass({
	render: function () { 
		return <div id="side-nav"> 
			<ul className="nav clearfix">
				<NavItem title="Work" dest="work" />
				<NavItem title="Skills" dest="skills" /> 
				<NavItem title="Contact" dest="contact" /> 
			</ul> 
		</div> 
	}, 
}); 