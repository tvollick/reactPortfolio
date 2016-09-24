var React = require('react'); 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Reflux = require('reflux'); 
var NavStore = require('../stores/nav-store'); 
var Actions = require('../actions'); 

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(NavStore, 'onStoreChange')
	], 
	getInitialState: function () { 
		return {checkedClass:"unchecked"}
	}, 
	componentWillMount: function () {
		Actions.changeBanner(this.bannerText, 'red'); 
	}, 
	bannerText: "Perpetually Learning.", 
	render: function () { 
		return <ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={1500}
				transitionAppear={true}
				transitionAppearTimeout={1000}
		>
			<div className="container-fixed text-center">
				<h1> Skills </h1> 
				<div className="flow-chart-container"> 
					{this.skillsSVG()}
				</div> 
			</div> 
		</ReactCSSTransitionGroup> 
	}, 
	handleButtonClick: function () { 
		var totalLength = 0;
		var prevPos;
		var polyline = document.getElementById("line-3"); 
		for (var i = 0 ; i < polyline.points.numberOfItems;i++) {
		    var pos = polyline.points.getItem(i);
		    if (i > 0) {
		        totalLength += Math.sqrt(Math.pow((pos.x - prevPos.x), 2) + Math.pow((pos.y - prevPos.y), 2));
		    }
		    prevPos = pos;
		}
		console.log(totalLength);
	}, 
	onStoreChange: function () { return false},
	skillsSVG: function () { 
		return <svg className="skills-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 977.51 666.35"><title>flow_chart_test</title><g id="Layer_2" data-name="Layer 2"><g id="skills_svg" data-name="skills svg"><rect className="cls-1" x="153.47" width="657.07" height="66.01"/><text className="cls-2" transform="translate(315.55 35.47)"><tspan className="cls-3">F</tspan><tspan className="cls-4" x="15.01" y="0">r</tspan><tspan className="cls-5" x="25.33" y="0">o</tspan><tspan className="cls-6" x="43.21" y="0">n</tspan><tspan x="61.15" y="0">t End </tspan><tspan className="cls-7" x="138.18" y="0">D</tspan><tspan x="160" y="0">e</tspan><tspan className="cls-4" x="176.31" y="0">v</tspan><tspan x="191.65" y="0">eloper</tspan></text><polyline id="polyline-1" className="cls-8 line-1" points="178.08 57.09 178.08 157.58 124.08 157.58 124.08 223.58"/><text className="cls-9" transform="translate(23.07 264.03)">HTML</text><rect className="cls-8" x="8.59" y="222.08" width="122.85" height="60.29"/><text className="cls-9" transform="translate(313.55 263.46)">CMS</text><rect className="cls-8" x="297.07" y="222.08" width="104.55" height="60.29"/><text className="cls-9" transform="translate(455.55 263.46)">J<tspan className="cls-10" x="12.05" y="0">A</tspan><tspan className="cls-11" x="30.25" y="0">V</tspan><tspan x="46.56" y="0">ASCRIPT</tspan></text><rect className="cls-8" x="434.07" y="222.08" width="241.49" height="60.29"/><text className="cls-9" transform="translate(726.55 263.46)">BUILD<tspan className="cls-12" x="83.55" y="0"> </tspan><tspan className="cls-13" x="89.12" y="0">T</tspan><tspan x="104.42" y="0">OOLS</tspan></text><rect className="cls-8" x="712.07" y="222.08" width="237.84" height="60.29"/><text className="cls-9" transform="translate(12.56 458.95)">SASS</text><rect className="cls-8" x="1" y="419.07" width="100.82" height="60.29"/><text className="cls-9" transform="translate(146.56 458.95)">WORDPRESS</text><rect className="cls-8" x="135" y="419.07" width="235.62" height="60.29"/><text className="cls-9" transform="translate(62.56 644.94)">THEME D<tspan className="cls-14" x="124.21" y="0">E</tspan><tspan className="cls-15" x="140.53" y="0">V</tspan><tspan x="156.9" y="0">.</tspan></text><rect className="cls-8" x="51" y="605.06" width="224.78" height="60.29"/><text className="cls-9" transform="translate(319.05 644.94)">WOO <tspan className="cls-16" x="79.32" y="0">C</tspan><tspan x="97.52" y="0">OMME</tspan><tspan className="cls-17" x="188.33" y="0">R</tspan><tspan className="cls-18" x="205.94" y="0">CE</tspan></text><rect className="cls-8" x="307.49" y="605.06" width="313.05" height="60.29"/><text className="cls-9" transform="translate(407.56 458.95)">JQUE<tspan className="cls-19" x="71.57" y="0">R</tspan><tspan x="88.73" y="0">Y</tspan></text><rect className="cls-8" x="396" y="419.07" width="148.77" height="60.29"/><text className="cls-9" transform="translate(762.56 458.95)">GULP</text><rect className="cls-8" x="751" y="419.07" width="111.34" height="60.29"/><text className="cls-9" transform="translate(903.56 458.95)">GIT</text><rect className="cls-8" x="892" y="419.07" width="84.51" height="60.29"/><text className="cls-9" transform="translate(581.56 458.95)">RE<tspan className="cls-20" x="33.54" y="0">A</tspan><tspan className="cls-21" x="52.97" y="0">C</tspan><tspan className="cls-18" x="72.77" y="0">T</tspan><tspan x="0" y="39.07">JS/F</tspan><tspan className="cls-22" x="55.12" y="39.07">L</tspan><tspan className="cls-13" x="69.22" y="39.07">O</tspan><tspan x="90.78" y="39.07">X</tspan></text><rect className="cls-8" x="570" y="419.07" width="148.77" height="99.13"/><text className="cls-9" transform="translate(185.06 263.46)">CSS</text><rect className="cls-8" x="166.58" y="222.08" width="96.51" height="60.29"/><polyline id="line-2" className="cls-8" points="226.05 47.02 226.05 94.69 298.05 94.69 298.05 188.74 241.05 188.74 241.05 220.51"/><polyline id="line-3" className="cls-8" points="168.08 282.71 168.08 372.68 102.05 372.68 101.05 419.6"/><polyline id="line-4" className="cls-8" points="339.07 46.09 339.07 171.3 379.57 171.3 379.57 220.59"/><polyline id="line-5" className="cls-8" points="516.05 57.52 516.05 108.52 594.05 108.52 594.05 173.51 559.05 173.51 559.05 221.51"/><polyline id="line-6" className="cls-8" points="753.05 56.52 753.05 87.07 878.05 87.07 878.05 138 719.05 138 719.05 221.51"/><polyline id="line-7" className="cls-8" points="375.05 283.51 375.05 315.17 336.05 315.17 336.05 418.48"/><polyline id="line-8" className="cls-8" points="449.05 283.51 449.05 353.51 498.05 353.51 498.05 388.51 480.05 388.51 480.05 418.51"/><polyline className="cls-8" points="566.05 283.51 566.05 297.51 661.05 297.51 661.05 364.51 704.05 364.51 704.05 416.51"/><polyline className="cls-8" points="824.05 284.51 824.05 360.51 789.05 360.51 789.05 417.51"/><polyline className="cls-8" points="936.05 283.51 936.05 306.51 900.05 306.51 900.05 392.51 936.05 392.51 936.05 418.51"/><polyline className="cls-8" points="197.58 480.07 197.58 537.07 133.08 537.07 133.08 576.07 166.08 576.07 166.08 604.57"/><polyline className="cls-8" points="329.05 478.51 329.05 525.51 504.05 525.51 504.05 562.51 461.05 562.51 461.05 603.51"/></g></g></svg>
	}, 
	heartSVG: function () { 
		return <svg className={"heart-svg "+this.state.checkedClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.71 156.07">
					<path className="cls-1" d="M156.07,14.64a50,50,0,0,0-70.71,0A50,50,0,0,0,14.64,85.36l70.71,70.71,70.71-70.71A50,50,0,0,0,156.07,14.64Z"/>
		</svg>
	}
}); 