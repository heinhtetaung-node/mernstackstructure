module.exports = {    
    validateSave : (req, res, next) => {
        // req.checkBody('data.username', 'required').exists().not().isEmpty(); 
        // req.checkBody('data.password', 'required').exists().not().isEmpty(); 
        // req.checkBody('data.email', 'required').exists().not().isEmpty(); 
        
        // if use async in above
        // req.asyncValidationErrors().then(() => {
        //     next();
        // }).catch((errors) => {
        //     return res.send({result : false, validateerr : errors});                        
        // });
        
        // if it is not db touch, it simple like following
        // console.log("here2");
        // var errors = req.validationErrors();
        // if (errors) {
        //     return res.send(errors);            
        // }
        req.checkBody('data.title', 'null').exists();
        req.checkBody('data.title', 'required').not().isEmpty(); 
        var errors = req.validationErrors();
        if (errors) {
            return res.send(errors);
        }
        next();            
    },
    validateUpdate : (req, res, next) => {
        req.checkBody('data.title', 'null').exists();
        req.checkBody('data.title', 'required').not().isEmpty(); 
        var errors = req.validationErrors();
        if (errors) {
            return res.send(errors);
        }
        next();                  
    }
}

