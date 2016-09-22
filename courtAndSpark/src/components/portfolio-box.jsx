var React = require('react'); 
var ReactRouter = require('react-router'); 
var Link = ReactRouter.Link;

module.exports = React.createClass({
	getInitialState: function () { 
		return {featured: this.getThumbnail()}
	}, 
	getThumbnail: function () {
		if (this.props.better_featured_image != null) { 
			return this.props.better_featured_image.source_url; 
		} else {
			return ""; 
		}
	}, 
	getBackgroundStyles: function () {
		if (this.state.featured != "") { 
			return { backgroundImage: 'url('+this.state.featured+')'}
		}
	}, 
	render: function () {
		return <div className="portfolio-box-wrapper" key={this.props.id}>
			<Link to={"projects/"+this.props.id} className="portfolio-box-link">
				<div style={this.getBackgroundStyles()} className="portfolio-box">
					<div className="portfolio-info">
						<h2>{this.formatTitle()}</h2>
					</div>
				</div>
			</Link>
		</div> 
	}, 
	formatTitle: function () { 
		var txt = document.createElement("textarea"); 
		txt.innerHTML = this.props.title.rendered
		return txt.value; 
	} 
});