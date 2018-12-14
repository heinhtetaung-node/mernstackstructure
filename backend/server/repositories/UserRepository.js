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
			console.log(datas);
			retresult = { result : true, datas : datas };
		}catch(err){
			console.log(err);
			retresult = { result : false, datas : [], message : 'something wrong' };
		}
		return retresult;
	}
	create(){
		User.create({  
		  name: 'hha',
		  email: 'hha@gmail.com',
		  password: 'ei'
		}).then(customer => {		
			// async return later
		});
	}	
}

module.exports = UserRepository;