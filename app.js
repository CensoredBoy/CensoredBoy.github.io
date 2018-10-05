var express = require( 'express' ),
    app = express();

app.get( "/", function( req, res ) {
	res.render( 'index.ejs' );
} );

app.listen(3000, function() {	
	console.log('Work on port 3000');
} );
