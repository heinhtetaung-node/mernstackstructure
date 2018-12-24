const MessageController = require('./../controllers/MessageController') 
const controller = new MessageController();
const request = require('./../requests/MessageRequest');

const func = '/message/'; // message -> replace with your new module

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