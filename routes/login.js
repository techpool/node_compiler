var express = require('express');
var router = express.Router();
var passport = require('passport')

redirects = { 
	successRedirect: '/code',
	failureRedirect: '/login',
	failureFlash : true
}

// GET the login page
router.get('/', function(req, res, next) {
	console.log(req.flash());
	res.render('login', { title: 'Login' });
});

router.post('/',
	passport.authenticate('local', redirects),
	function(req, res, next) {
		res.send('Congo you are in');
});

module.exports = router;
