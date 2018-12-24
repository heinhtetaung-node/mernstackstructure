const BaseRepo = require('./base/BaseRepo')
const db = require('../config/db.config.js');
const Message = db.message;

class MessageRepository extends BaseRepo{
	constructor() {
        super();    
        this.model = Message;    
    }
}

module.exports = MessageRepository;