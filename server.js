var http = require('http');

var port = 3000;
var server = http.createServer(function(req, res) {
	console.log('Connected');
	res.statudCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World! by yasunari\n');
});

server.listen(port, function() {
	console.log('server running');
});
