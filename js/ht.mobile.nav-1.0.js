// HowTo Mobile Javascript Framework
var HTM = {};

var HTM = {
	pagePath: 'views/pages/',
	routePath: 'views/routes/',
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
		
		$('body').load(HTM.pagePath+HTM.nav.startup);
	},
	navTo: function(page) {
		var navPage = HTM.pagePath+page+'.html';
		console.log('Navigate to:' + page);
		
		$('body').load(navPage);
	}, 
	routeTo: function(route) {
		var navRoute = HTM.routePath+route+'.html';
		console.log('Route to:' + route);
		
		$('section > article[router]').load(navRoute);
	}, 
};