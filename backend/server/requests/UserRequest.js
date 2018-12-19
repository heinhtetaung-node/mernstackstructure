const UserRepository = require('./../repositories/UserRepository')
const userrepo = new UserRepository();
const db = require('../config/db.config.js');
const User = db.user;

module.exports = {    

    /*
     * alternative way really useful and effective https://booker.codes/input-validation-in-express-with-express-validator/
     * rules can check in check.d.ts
     */
    validateSaveUser : (req, res, next) => {
        req.checkBody('data.username', 'required').exists().not().isEmpty(); 
        req.checkBody('data.password', 'required').exists().not().isEmpty(); 
        req.checkBody('data.email', 'required').exists().not().isEmpty(); 
        if(req.body.data.password && req.body.data.password!=""){
            req.checkBody('data.password', 'not length 5').isLength({ min: 5 });
        }         

        if(req.body.data.email && req.body.data.email!=""){
            req.checkBody('data.email', 'not email').isEmail(); 
            
            // if it is not db touch, no need async and await
            req.checkBody('data.email', 'email exist').custom(async (value) => {
                var user = await userrepo.getUserByEmail(value);   
                console.log(user.result);
                if(user.datas.length > 0){
                    throw new Error('email exist');
                }        
                return true;                
            })                                   
        }
        req.asyncValidationErrors().then(() => {
            next();
        }).catch((errors) => {
            return res.send({result : false, validateerr : errors});                        
        });
        
        // if it is not db touch, it simple like following
        // console.log("here2");
        // var errors = req.validationErrors();
        // if (errors) {
        //     return res.send(errors);            
        // }
        // next();
    },

    validateLogin : (req, res, next) => {
        req.checkBody('email', 'required').exists().not().isEmpty(); 
        req.checkBody('password', 'required').exists().not().isEmpty(); 
        if(req.body.email && req.body.email!=""){
            req.checkBody('email', 'not email').isEmail();   
        }      
        var errors = req.validationErrors();
        if (errors) {
            return res.send({result : false, validateerr : errors});            
        }
        next();
    }
}

