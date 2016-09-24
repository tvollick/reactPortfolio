var Reflux = require('reflux'); 
var Actions = require('../actions'); 

module.exports = Reflux.createStore({
	listenables: [Actions], 
	navOpenState: false, 
	appStates: {
		navOpenState: false, 
		bannerText: "", 
		bgColor: "", 
		prevColor: "green", 
		colorClass: "test"
	}, 
	toggleNavState: function () { 
		this.navOpenState = !this.navOpenState; 
		this.appStates.navOpenState = !this.appStates.navOpenState; 
		this.triggerChange(); 
	}, 
	triggerChange: function () { 
		this.trigger('change', this.appStates); 
	}, 
	changeBanner: function (text, color) {
		this.appStates.bannerText = text; 
		this.appStates.bgColor = color;
		this.setColorClass(color);  
		console.log(this.appStates.colorClass); 
		this.trigger('change', this.appStates); 
	}, 
	setColorClass: function (newColor) { 
		var prevColor = this.appStates.prevColor; 
		if (newColor == this.appStates.prevColor) {
			console.log('same color'); 
			this.appStates.colorClass=prevColor; 
		} else {
			console.log('new color'); 
			this.appStates.colorClass = prevColor + "-to-" + newColor; 
			this.appStates.prevColor = newColor; 
		}
	} 
}); 