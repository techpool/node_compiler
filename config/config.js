var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

module.exports = function (app, express) {
	
	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());

	// DB Connector
	
	mongoose.connect(app.get('dbpath'));
	
	var db = mongoose.connection;
	
	db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function() {
			console.log('DB Connected Successfully.')
	});



}