var express = require('express');
var router = express.Router();
var async = require('async');

/* GET home page. */
router.post('/submit', function(req, res, next) {
	var type = req.body.type;
	var code = req.body.code;
	var user = req.body.user;

	async.waterfall([
			function(callback){
				var filename = FileWriter(type, user, code);
				callback(null, filename);
			},

			function(filename, callback){
				Compiler(type, filename, user);
				callback(null);
			}
		], 
		function(err) {
			res.send("Your Code Submitted");
		}
	)
});

router.get('/', function(req, res, next){
	res.render('code_form');
})

module.exports = router;
