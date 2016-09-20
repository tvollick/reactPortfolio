var Reflux = require('reflux'); 
var Actions = require('../actions'); 
var Api = require('../utils/api'); 

module.exports = Reflux.createStore({
	listenables: [Actions], 
	getProjects: function () {
		return Api.get('posts')
			.then(function(json){
				this.projects = json; 
				this.triggerChange(); 
			}.bind(this)); 
	}, 
	triggerChange: function () {
		this.trigger('change', this.projects); 
	}
}); 