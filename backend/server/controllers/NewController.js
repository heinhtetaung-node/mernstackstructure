const NewRepository = require('./../repositories/NewRepository')
const BaseController = require('./base/BaseController');

"use strict";
class NewController extends BaseController{
	constructor(){
		super();
		this.repo = new NewRepository();    
	}
}

module.exports = NewController;