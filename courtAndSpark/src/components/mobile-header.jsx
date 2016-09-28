var React = require('react'); 
var MobileNavItem = require('./mobile-nav-item'); 

module.exports = React.createClass({
	render: function () { 
		return <div id="mobile-header"> 
			<div className="header">
					<div className="title"> 
						<div className="logo">
							Tyler Vollick
						</div>
						<span className="tagline"> 
							Front End Developer 
						</span> 
					</div> 
					{this.renderNavList()}				
			</div>
		</div> 
	}, 
	renderNavList: function () { 
		return <div className="nav-container"> 
			<ul className="nav clearfix"> 
				<MobileNavItem title="Work" dest="section-portfolio" color="green" /> 
				<MobileNavItem title="Skills" dest="section-skills" color="red" /> 
				<MobileNavItem title="Contact" dest="section-contact" color="orange" /> 
			</ul> 
		</div> 
	}
}); 