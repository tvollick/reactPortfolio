var Reflux = require('reflux'); 
var Actions = require('../actions'); 
var Api = require('../utils/api'); 

module.exports = Reflux.createStore({
	listenables: [Actions], 
	getProjectById: function (id) { 
		return Api.get('portfolio-api/'+id)
			.then(function(json){
				this.project = json; 
				this.triggerChange(); 
			}.bind(this)); 
	}, 
	triggerChange: function () { 
		this.trigger('change', this.project); 
	}
}); 