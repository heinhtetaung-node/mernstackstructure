const env = {
  database: 'mernstackstructure',
  username: 'root',
  password: 'root',
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  },
  secret : 'eyrhdkhgigeyri3i439841893341ajeridezer/'
};
 
module.exports = env;