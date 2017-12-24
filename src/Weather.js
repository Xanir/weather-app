
var Services = require('./services/Services.js');
var Components = require('./components/Components.js');

module.exports = Object.freeze({
	Components: Components,
	Services: Services
});

window.gloomhaven = module.exports;
