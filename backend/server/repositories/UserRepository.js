const UserRepository = require('./base/BaseRepo')

class UserRepository extends BaseRepo{   // if more than extends 2 clase use HOC
	getAll(){
		return [{id : 1, name : 'abc'}, {id : 2, name : 'def'}];
	}
}

module.exports = UserRepository;