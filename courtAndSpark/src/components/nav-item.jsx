var React = require('react'); 
var ReactRouter = require('react-router'); 
var Link = ReactRouter.Link; 

module.exports = React.createClass({
	render: function () { 
		return <li>
			<Link to={"/"+this.props.dest} activeClassName="active"> 
				{this.props.title}
			</Link> 
		</li> 
	}
}); 