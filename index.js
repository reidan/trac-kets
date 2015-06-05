var http = require('http');

function serverFunc( req, res ) {
	res.writeHead( 200 );
	res.end( 'Hello HTTP' );
};	


var server = http.createServer( serverFunc );
server.listen( 8080 );