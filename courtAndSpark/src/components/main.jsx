var React = require('react'); 
var Header = require('./header'); 
var ProjectList = require('./project-list'); 
var Portfolio = require('./portfolio'); 
var SideNav = require('./side-nav'); 
var Reflux = require('reflux'); 
var navStore = require('../stores/nav-store'); 
var Banner = require('./banner'); 

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(navStore, 'onStoreChange') 
	], 
	getInitialState:function () { 
		return { navOpen: false, bannerText: "", bgColor: "green" }
	}, 
	render: function () {
		return <div className={"main-container "+this.getNavState()}> 
			<SideNav /> 
			<div id="app-content">
				<Header /> 
				<div id="banner-bg" className={this.state.bgColor+"-bg"}>
					<Banner text={this.state.bannerText} /> 
				</div> 
				<div className="page-content"> 
					{this.content()}
				</div> 
			</div> 
		</div> 
	}, 
	getNavState: function () { 
		if (this.state.navOpen) { 
			return "nav-open"; 
		} else {
			return "nav-closed"; 
		}
	}, 
	content: function () {
		if (this.props.children) { 
			return this.props.children
		} else { 
			// change his to home page. 

			return <div> 

				<Portfolio /> 
			</div> 
		}
	}, 
	onStoreChange: function (event, states) { 
		this.setState({navOpen: states.navOpenState, bannerText: states.bannerText, bgColor: states.colorClass}); 
	}	
}); 