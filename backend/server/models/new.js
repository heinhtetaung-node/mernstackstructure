module.exports = (sequelize, Sequelize) => {
	const New = sequelize.define('new', {
	  title: {
		type: Sequelize.STRING
	  }
	});
	
	return New;
}