class BaseController {
    constructor(){
		this.repo = null;  // will fill by child    
    }
    
    async save(req, res, next){
        const data = await this.repo.save(req.body.data);
		res.send(data);
		next();
    }

    async update(req, res, next){
        const data = await this.repo.update(req.params.id, req.body.data);
		res.send(data);
		next();
    }

    async getAll(req, res, next){
        const data = await this.repo.getAll();
		res.send(data);
		next();
    }

    async delete(req, res, next){
        const data = await this.repo.delete(req.params.id);
		res.send(data);
		next();
    }

    async getById(req, res, next){
        const data = await this.repo.getById(req.params.id);
        res.send(data);
        next();
    }
}

module.exports = BaseController;