var connect=require('connect'),
	serveStatic = require('serve-static'),
	port=5000;
var app = connect();
app.use(serveStatic(__dirname + '/web'));
app.listen(port);
console.log('Server running at http://localhost:' + port);