var React = require('react'); 

module.exports = React.createClass({
	render: function () {
		return <div id="loader-container" className="heart-svg-container">
			{this.heartSVG()}
		</div> 
	}, 	
	heartSVG: function () { 
		return <svg className="heart-svg " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.71 156.07">
					<path className="cls-1" d="M156.07,14.64a50,50,0,0,0-70.71,0A50,50,0,0,0,14.64,85.36l70.71,70.71,70.71-70.71A50,50,0,0,0,156.07,14.64Z"/>
		</svg>
	}
}); 