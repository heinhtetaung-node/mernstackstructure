const UserRepository = require('./../repositories/UserRepository')
// const bcrypt = require('bcryptjs');

"use strict";
class UserController {
	constructor(){
		this.userrepo = new UserRepository();    
	}	

	async getAllUsers(req, res, next){
  		const users = await this.userrepo.getAll();
  		res.send(users);
	}

	getUser(req, res, next){
		const userid = req.params.id;
		res.send({id : userid});
	}
}

module.exports = UserController;