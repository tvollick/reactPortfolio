var React = require('react'); 
var ReactRouter = require('react-router'); 
var Link = ReactRouter.Link;

module.exports = React.createClass({
	getInitialState: function () { 
		return {featured: this.getThumbnail(), customFields: this.getFields()}
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
					<div className="portfolio-info-container">
						{this.renderProjectInfo()}
					</div>
				</div>
			</Link>
		</div> 
	}, 
	renderProjectInfo: function () { 
		return <div className="portfolio-info-wrapper">
			<div className="portfolio-info">
				<span>{"{"}</span><br/>
				<ul>
				{this.renderCustomFields()} 
				</ul> 
				<span>{"}"}</span>
			</div> 
		</div> 
	},
	getFields: function () { 
		var acf = this.props.acf; 
		var fieldArr = []; 
		for (var property in acf) { 
			if (acf.hasOwnProperty(property) && acf[property]) { 
				console.log({name: property, val: this.props.acf[property]}); 
				fieldArr.push({key: property, val: this.props.acf[property]}) ; 
			}
		}
		return fieldArr; 

	}, 
	renderCustomFields: function () {
		return this.state.customFields.map(function(field){
			return <li> 
				<span className="key">{field.key}</span>
				<span className="colon">:</span> 
				<span className="val">{' "'+field.val+'"'}</span>
				<span className="comma">,</span>
			</li> 
		}.bind(this))
	}, 
	formatTitle: function () { 
		var txt = document.createElement("textarea"); 
		txt.innerHTML = this.props.title.rendered
		return txt.value; 
	} 
});