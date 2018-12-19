const BaseRepo = require('./base/BaseRepo')
const db = require('../config/db.config.js');
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
			retresult = this.failResponse({message : 'something wrong in db save'})
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
			const datas = await User.findAll({ where: { email: email } })
			retresult = this.successResponse({datas : datas});
		}catch(err){
			retresult = this.failResponse({message : 'something wrong in db save'})
		}
		return retresult;
	}	
}

module.exports = UserRepository;