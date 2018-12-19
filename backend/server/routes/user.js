// var JwtAuthMiddleware = require("./../Middlewares/JwtAuthMiddleware")
const UserController = require('./../controllers/UserController') 
const usercontroller = new UserController();
const { body, check, oneOf, validationResult } = require('express-validator/check');
const UserRequest = require('./../requests/UserRequest');

module.exports = (router) => {

    /**
     * get a user
     */
    router
        .route('/user/:id')
        .get(usercontroller.getUser)

    router.route('/users').get((...args) => {
        usercontroller.getAllUsers(...args)
    });

    router.route('/users/save').post(UserRequest.validateSaveUser, (...args) => { 
        usercontroller.saveUser(...args); 
    });

    /*
     * latest version recommanded way of validation https://express-validator.github.io/docs/index.html
     */
    router.route('/users/testvali').post([
        check('data.username').isEmail(),
        check('data.password').isLength({ min: 5 })
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        res.status(422).json({success:true});
    });
}