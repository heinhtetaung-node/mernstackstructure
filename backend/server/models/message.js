module.exports = (sequelize, Sequelize) => {
	const Message = sequelize.define('dp_message', {
	  sent_user_id: {
		type: Sequelize.INTEGER
	  },
	  receive_user_id: {
	  	type: Sequelize.INTEGER
      },
      msgtext: {
        type: Sequelize.TEXT,
        is: ["^[a-z]+$",'i']     // will only allow letters
      },
      file_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      file_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      read: {
        type: Sequelize.INTEGER,
        defaultValue : 0,
        validate: {
          isIn: [[0, 1]]
        }
      }
	});
	
	return Message;
}