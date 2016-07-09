var express = require('express');
var router = express.Router();
var async = require('async');

/* GET home page. */
router.post('/submit', function(req, res, next) {
	var type = req.body.type;
	var sourceCode = req.body.code;
	var user = req.user;

	// Create a Code schema object

	var code = new Codes({
		_user: user._id,
		sourceCode: sourceCode,
		type: type
	});

	code.save(function(err, dbObj) {
		if (err) {
			console.log(err);
		} else {
			async.waterfall([
				function(callback){
					FileWriter(type, dbObj, sourceCode, function(filename) {
						callback(null, filename);
					});
				},

				function(filename, callback){
					Executer(type, filename, dbObj);
					callback(null);
				},
			], 
			function(err) {
				res.send("Your Code Submitted");
			})
		}
	});

});

router.get('/', function(req, res, next){
	res.render('code_form');
})

module.exports = router;
