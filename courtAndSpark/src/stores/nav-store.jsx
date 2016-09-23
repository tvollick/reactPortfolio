var Reflux = require('reflux'); 
var Actions = require('../actions'); 

module.exports = Reflux.createStore({
	listenables: [Actions], 
	navOpenState: false, 
	toggleNavState: function () { 
		this.navOpenState = !this.navOpenState; 
		this.triggerChange(); 
	}, 
	triggerChange: function () { 
		this.trigger('change', this.navOpenState); 
	}
}); 