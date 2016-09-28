var React = require('react'); 
var Header = require('./header'); 
var ProjectList = require('./project-list'); 
var Portfolio = require('./portfolio'); 
var SideNav = require('./side-nav'); 
var Reflux = require('reflux'); 
var navStore = require('../stores/nav-store'); 
var Banner = require('./banner'); 
var Loader = require('./loader'); 
var Skills = require('./skills'); 
var Contact = require('./contact'); 
var MobileHeader = require('./mobile-header')

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(navStore, 'onStoreChange') 
	], 
	getInitialState:function () { 
		return { navOpen: false, bannerText: "", bgColor: "green", windowWidth: 0 }
	},
	componentWillMount: function () {
		this.updateDimensions(); 
	}, 
	componentDidMount: function () {
		window.addEventListener("resize", this.updateDimensions); 
	}, 
	render: function () {
		return <div className={"main-container "+this.getNavState()}> 
			<SideNav /> 
			<Loader /> 
			<div id="app-content">
				

				{this.mediaQuery()}

			</div> 
		</div> 
	}, 

	mediaQuery: function () {
		var width = this.state.windowWidth; 

		// Extra small devices (phones, less than 768px)
		if (width < 768) {
			return <div className="moble-view">
				<MobileHeader /> 
				<div className="page-content"> 

					<Portfolio /> 
					<Skills /> 
					<Contact /> 

				</div> 
			</div> 
		}
		// Small devices (tablets, 768px and up)
		else if (width < 992) {
			return <div className="tablet-view">
				<Header /> 
				<div id="banner-bg" className={this.state.bgColor+"-bg"}>
					<Banner text={this.state.bannerText} /> 
				</div> 
				<div className="page-content"> 
					{this.content()}
				</div> 
			</div> 
		} 
		// Medium devices (desktops, 992px and up)
		else if (width < 1200) {
			return <div className="laptop-view">
				<Header /> 
				<div id="banner-bg" className={this.state.bgColor+"-bg"}>
					<Banner text={this.state.bannerText} /> 
				</div> 
				<div className="page-content"> 
					{this.content()}
				</div> 
			</div> 
		} 
		// Large devices (large desktops, 1200px and up)
		else {
			return <div className="desktop-view">
				<Header /> 
				<div id="banner-bg" className={this.state.bgColor+"-bg"}>
					<Banner text={this.state.bannerText} /> 
				</div> 
				<div className="page-content"> 
					{this.content()}
				</div> 
			</div> 
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
	getNavState: function () { 
		if (this.state.navOpen) { 
			return "nav-open"; 
		} else {
			return "nav-closed"; 
		}
	}, 
	componentWillUnmount: function () { 
		window.removeEventListener("resize", this.updateDimensions); 
	}, 
	onStoreChange: function (event, states) { 
		this.setState({navOpen: states.navOpenState, bannerText: states.bannerText, bgColor: states.colorClass}); 
	}, 
	updateDimensions: function () { 
		var w = window, 
				d = document, 
				documentElement = d.documentElement, 
				body = d.getElementsByTagName('body')[0], 
				width = w.innerWidth || documentElement.clientWidth || body.clientWidth, 
				height = w.innerHeight || documentElement.clientHeight || body.clientHeight; 

		console.log(width); 

		this.setState({windowWidth: width}); 
	}	
}); 