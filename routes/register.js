var express = require('express');
var router = express.Router();

// GET the registration page
router.get('/', function(req, res, next) {
	res.render('register');
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	userdata = req.body;

	var newUser = new Users({
		email: userdata.email,
		name: {
			firstname: userdata.first_name,
			lastname: userdata.last_name
		},
		password: userdata.password
	});

	newUser.save(function(err, dbObj) {
		if (err) {
			if (err.code == 11000) {
				res.send('You are already registered')
			} else {
				console.log(err)
			}
		} else {
			res.send('Success');
		}
	});
})

module.exports = router;
