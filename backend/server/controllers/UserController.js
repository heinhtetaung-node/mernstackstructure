const UserRepository = require('./../repositories/UserRepository')
// const bcrypt = require('bcryptjs');

"use strict";
class UserController {
	constructor(){
		this.userrepo = new UserRepository();    
	}	

	getAllUsers(req, res, next){
  		console.log(this);
  		const users = this.userrepo.getAll();
  		res.send(users);
	}
	
	getUser(req, res, next){
		const userid = req.params.id;
		res.send({id : userid});
	}
}

module.exports = UserController;