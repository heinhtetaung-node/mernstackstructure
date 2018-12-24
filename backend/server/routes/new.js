const NewController = require('./../controllers/NewController') 
const controller = new NewController();
const request = require('./../requests/NewRequest');

const func = '/new/'; // message -> replace with your new module

module.exports = (router) => {
    router.route(func+'all').get((...args) => { 
        controller.getAll(...args); 
    });

    router.route(func+'get/:id').get((...args) => { 
        controller.getById(...args); 
    });
    
    router.route(func+'save').post(request.validateSave, (...args) => { 
        controller.save(...args); 
    });

    router.route(func+'update/:id').put(request.validateUpdate, (...args) => { 
        controller.update(...args); 
    });

    router.route(func+'delete/:id').delete((...args) => { 
        controller.delete(...args); 
    });    
}