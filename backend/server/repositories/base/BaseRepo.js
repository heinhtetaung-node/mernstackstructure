const Sequelize = require('sequelize');

class BaseRepo {
	constructor(){
		
	}

	successResponse(arr = {}){
		const result = { result : true };
		if(arr.datas){
			result.datas = arr.datas;
		}
		if(arr.message){
			result.message = arr.message;
		}
		return result;
	}

	failResponse(arr = {}){
		const result = { result : false };
		if(arr.datas){
			result.datas = arr.datas;
		}
		if(arr.message){
			result.message = arr.message;
		}
		return result;
	}
}

module.exports = BaseRepo;