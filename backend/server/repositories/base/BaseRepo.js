const Sequelize = require('sequelize');

class BaseRepo {
	constructor(){
		this.model = null; // will announce from child
	}

	async getAll(){
		let retresult = {};
		try{
			const datas = await this.model.findAll();
			retresult = this.successResponse({datas : datas})
		}catch(err){
			retresult = this.failResponse({message : 'something wrong in db get'})
		}
		return retresult;
	}

	async getById(id){
		let retresult = {};
		try{
			const datas = await this.model.findOne({ where: { id: id } });
			retresult = this.successResponse({datas : datas})
		}catch(err){
			retresult = this.failResponse({message : 'something wrong in db get'})
		}
		return retresult;
	}

	async save(arr){
		let retresult = {};
		try{
			const res = await this.model.create(arr);
			retresult = this.successResponse();
		}catch(err){
			retresult = this.failResponse();
		}
		return retresult;
	}

	async update(id, arr){
		let retresult = {};
		try{
			await this.model.update(
				arr, // { title: 'a very different title now' }
				{ where: { id: id } }
			);
			retresult = this.successResponse();
		}catch(err){
			console.log(err);
			retresult = this.failResponse();
		}
		return retresult;
	}

	async delete(id){
		let retresult = {};
		try{
			await this.model.destroy({ where: { id: id } });
			retresult = this.successResponse();
		}catch(err){
			console.log(err);
			retresult = this.failResponse();
		}
		return retresult;
	}

	

	successResponse(arr = {}){
		const result = { result : true };
		for (var property in arr) {
			result[property] = arr[property];
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