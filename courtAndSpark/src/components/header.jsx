var React = require('react'); 
var ReactRouter = require('react-router'); 
var Link = ReactRouter.Link; 

module.exports = React.createClass({
	render: function () { 
		return <div className="header">
			<Link to="/">
				<div className="logo">
					Tyler Vollick
				</div>
			</Link>
		</div>
	}

}); 