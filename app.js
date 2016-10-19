var connect = require('connect');
    serveStatic = require('serve-static');
    network = require('network');
	port = process.env.PORT || 8080;

connect().use(serveStatic(__dirname)).listen(port);

console.log("Running publications.js");

network.get_active_interface(function(err, obj) {
    console.log('The magic happens at http://localhost:' + port);
    console.log('The magic happens at: '+obj.ip_address+":"+ port);
});
