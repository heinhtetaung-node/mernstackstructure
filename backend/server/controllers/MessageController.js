const MessageRepository = require('./../repositories/MessageRepository')
const BaseController = require('./base/BaseController');

"use strict";
class MessageController extends BaseController{
	constructor(){
		super();
		this.repo = new MessageRepository();    
	}
}

module.exports = MessageController;