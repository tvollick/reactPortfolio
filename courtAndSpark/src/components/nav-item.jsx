var React = require('react'); 
var ReactRouter = require('react-router'); 
var Link = ReactRouter.Link; 

module.exports = React.createClass({
	render: function () { 
		return <li id={this.props.dest+"-li"} className={this.props.color+"-li"}>
			<Link to={"/"+this.props.dest} activeClassName="active" className={this.props.color+"-link"}> 
				{this.props.title}
			</Link> 
		</li> 
	}
}); 