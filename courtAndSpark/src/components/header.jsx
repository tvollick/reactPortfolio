var React = require('react'); 
var Reflux = require('reflux'); 
var ReactRouter = require('react-router'); 
var Link = ReactRouter.Link; 
var NavItem = require('./nav-item'); 
var Actions = require('../actions'); 
var navStore = require('../stores/nav-store'); 

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(navStore, 'onStoreChange')
	], 
	sideNavTrigger: function () { 
		console.log('trigger'); 
		Actions.toggleNavState(); 
	}, 
	render: function () { 
		return <div className="header clearfix">
			<div 
				onClick={this.sideNavTrigger}
				className="side-nav-trigger"
			> 
				
			</div> 
			<Link to="/">
				<div className="logo">
					Tyler Vollick
				</div>
			</Link>
			{this.renderNavList()}
		</div>
	}, 
	renderNavList: function () { 
		return <div className="nav-container"> 
			<ul className="nav clearfix">
				<NavItem title="Work" dest="work" />
				<NavItem title="Contact" dest="contact" /> 
				<NavItem title="Hearts" dest="heart" /> 
			</ul> 
		</div> 
	}, 
	onStoreChange: function () { 
		return null; 
	}
}); 