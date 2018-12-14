const Sequelize = require('sequelize');

class BaseRepo {
	constructor(){
		// this.db = this.mysqlconnect();
		// test connection
		// this.db.authenticate()
		//   .then(() => {
		//     console.log('Connection has been established successfully.');
		//   })
		//   .catch(err => {
		//     console.error('Unable to connect to the database:', err);
		//   });
	}
	// mysqlconnect(){
	// 	return new Sequelize('mernstackstructure', 'root', 'root', {
	// 	  host: 'localhost',
	// 	  dialect: 'mysql',
	// 	  operatorsAliases: false,

	// 	  pool: {
	// 	    max: 5,
	// 	    min: 0,
	// 	    acquire: 30000,
	// 	    idle: 10000
	// 	  },

	// 	});
	// }
}

module.exports = BaseRepo;