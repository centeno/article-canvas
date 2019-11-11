var express = require('express');
var mongoose = require ("mongoose");
var app = express();

var uristring = 
	process.env.MONGOLAB_URI || 
	process.env.MONGOHQ_URL || 
	'mongodb://localhost/Canvas';

mongoose.connect(uristring, function (err, res) {
	if (err) { 
		console.log ('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log ('Succeeded connected to: ' + uristring);
	}
});

app.set('port', (process.env.PORT || 5000))

app.get('/users', function(request, response) {
	response.send('Hello World!')
})

app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'))
})
