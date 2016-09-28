var React = require('react'); 

module.exports = React.createClass({
	render: function () {
		return <li className="mobile-nav-item" className={this.props.color+"-li"}>
			<span className={this.props.color+"-link"} onClick={this.handleNavClick}>
				{this.props.title}
			</span>
		</li> 
	}, 
	handleNavClick: function () { 
		console.log(this.props.dest); 
	}

}); 