var Fetch = require('whatwg-fetch'); 
var rootUrl = './wp-json/wp/v2/'; 

module.exports = {
	get: function (url) {
		return fetch(rootUrl + url, {})
			.then(function(response){
				return response.json() 
			}); 
	}
}; 