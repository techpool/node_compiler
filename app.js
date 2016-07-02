var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var routes = require('./routes/index');
var users = require('./routes/users');
var user_code = require('./routes/user_code');

var app = express();

require('./config/environment.js')(app);
require('./config/config.js')(app, express);

FileWriter = require('./lib/file_writer');
FileRemover = require('./lib/file_remover');

Compiler = require('./lib/code_compiler');

// Routes
app.use('/', routes);
app.use('/users', users);
app.use('/code', user_code);

// Models
Users = require('./models/users')
Codes = require('./models/codes')

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
