const BaseRepo = require('./base/BaseRepo')
const db = require('../config/db.config.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('./../config/env');
const User = db.user;

class UserRepository extends BaseRepo{   // if more than extends 2 clase use HOC
	constructor() {
        super();    
        this.model = User;    
    }
	async getAll(){
		let retresult = {};
		try{
			const datas = await User.findAll();
			retresult = this.successResponse({datas : datas})
		}catch(err){
			retresult = this.failResponse({message : 'something wrong in db get'})
		}
		return retresult;
	}
	async create(user){
		console.log(user.username);
		let retresult = {};
		try{
			const res = await User.create({  
				username: user.username,
				email: user.email,
				password: user.password
			});
			retresult = this.successResponse();
		}catch(err){
			retresult = this.failResponse();
		}
		return retresult;
	}	
	async getUserByEmail(email){
		let retresult = {};
		try{
			const data = await User.findOne({ where: { email: email } })
			if(data != null){
				retresult = this.successResponse({data : data});
			}else{
				retresult = this.failResponse({message : 'user not exist with this email'})
			}
		}catch(err){
			retresult = this.failResponse({message : 'something wrong in db get'})
		}
		return retresult;
	}	

	/*
	 * Login attempt method written in promise structure
	 * @return promise
	 */
	loginAttempt(email, password){
		return new Promise(async (resolve, reject) => {
			const user = await this.getUserByEmail(email);
			if(user.result == true){
				var passwordIsValid = bcrypt.compareSync(password, user.data.password);
				if(passwordIsValid == true){
					// If password valid jwt need to produce token with our secret
					var token = jwt.sign({ id: user.data.id }, env.secret, {
						expiresIn: 86400 // seconds #expires in 24 hours
					});
					resolve(this.successResponse({message:'Login Success', token : token, user_id : user.data.id, username : user.data.username}));
				}					
				reject(this.failResponse({message:'Password incorrect!'}));
			}
			reject(this.failResponse({message:'User not exist'}));
		});
	}
}

module.exports = UserRepository;