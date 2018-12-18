const UserRepository = require('./../repositories/UserRepository')
const bcrypt = require('bcryptjs');

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

	async saveUser(req, res, next){
		if(req.body.data.password){
			var hashedPassword = bcrypt.hashSync(req.body.data.password, 8);	
			req.body.data.password = hashedPassword;					
		}
		const saveuser = req.body.data;	
		const result = await this.userrepo.create(saveuser);	
		res.send(result);
	}
}

module.exports = UserController;