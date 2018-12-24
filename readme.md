To run backend server
- npm install
- make sure you have mysql db and create db in mysql for example create db called 'mernstackstructure'
- In backend/server/config/env.js, replace with your db info
  database: 'mernstackstructure',
  username: 'root',
  password: 'root',
  host: 'localhost',
  port: '3306',

- cd backend/server
- 
```
- node index.js (will not run again when you something change in file, you need to run manually node index.js again whenver you changed something)
	(OR)
- npm install nodemon -g
- nodemon index.js (this will watch and run again when you something change in file, you dont need to run node index.js again and again whenver you changed something)
```
- table will automatically created
	- if you dont want to create tables again and again just comment this three lines in backend/server/index.js
	```
	db.sequelize.sync({force: true}).then(() => {
	  console.log('Drop and Resync with { force: true }');
	});
	```
- run localhost:5000


To run frontend react application
- npm install
- npm start
- run localhost:3000


