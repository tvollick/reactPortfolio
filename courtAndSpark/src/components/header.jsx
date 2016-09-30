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
		Actions.toggleNavState(); 
	}, 
	render: function () { 
		return <div className="header clearfix">
			{this.renderSideNavTrigger()}
			<div className="container-fixed sm-no-padding"> 
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
				{this.renderNavList()}
			</div>
		</div>
	}, 
	renderSideNavTrigger: function () { 
		if (true) {
			return <div 
				onClick={this.sideNavTrigger}
				className="side-nav-trigger"
			> 
			</div> 
		} else {
			return false; 
		}
	}, 
	handleNavClick: function () {
		console.log('here'); 
	}, 
	renderNavList: function () { 
		return <div className="nav-container"> 
			<ul className="nav clearfix">
				<li className={"active-nav-tab "+this.props.activeNavColor+"-bg"}></li>
				<NavItem title="Work" dest="work" color="green" handleClick={this.handleNavClick}/>
				<NavItem title="Skills" dest="skills" color="red" handleClick={this.handleNavClick}/> 
				<NavItem title="Contact" dest="contact" color="orange" handleClick={this.handleNavClick}/> 
			</ul> 
		</div> 
	}, 
	onStoreChange: function () { 
		return null; 
	}
}); 