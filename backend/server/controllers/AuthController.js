const jwt = require('jsonwebtoken');
const UserRepository = require('./../repositories/UserRepository')
const config = require('../config/env');

const userrepo = new UserRepository();		

module.exports = {  
	login : (req, res, next) => {
		const email = req.body.email;
		const password = req.body.password;
		userrepo.loginAttempt(email, password).then((response)=>{
			return res.send(response);
		}).catch((response) => {
			return res.send(response);
		});
	},
	checkToken : (req, res, next) => {  // this method is use for checking token, expire or not
		var token = req.headers['x-access-token'];
		if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
		jwt.verify(token, config.secret, function(err, decoded) {
			if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
			res.status(200).send(decoded); // if valid return decoded token, it contain id, expire time and ...
		});
	}
}