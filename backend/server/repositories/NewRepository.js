const BaseRepo = require('./base/BaseRepo')
const db = require('../config/db.config.js');
const New = db.new;

class NewRepository extends BaseRepo{
	constructor() {
        super();    
        this.model = New;    
    }
}

module.exports = NewRepository;