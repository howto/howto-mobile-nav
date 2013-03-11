// HowTo Mobile Javascript Framework
var HTM = {};

var HTM = {
	nav: {
		startup: {},
		routes: {},
		templates: {}
	},

	init: function(config) {
		console.log('Bootstrap HowTo Mobile Nav Framework.');

		HTM.nav.startup = config.startup;
		HTM.nav.routes = config.routes;
		HTM.nav.templates = config.templates;
		
		console.log('Init config:');
		console.log(JSON.stringify(HTM));

		console.log('Init navigate to:' + HTM.nav.startup);
		
		$('section').load('routes/'+HTM.nav.startup);
	},

	navTo: function(page) {
		var navPage = 'routes/'+page+'.html';
		console.log('Navigate to:' + page);
		
		$('section').load(navPage);
	}

};