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
			<div className="container-fixed"> 
				<Link to="/">
					<div className="title"> 
						<div className="logo">
							Tyler Vollick
						</div>
						<span className="tagline"> 
							Front End Developer 
						</span> 
					</div> 
				</Link>
			</div>
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