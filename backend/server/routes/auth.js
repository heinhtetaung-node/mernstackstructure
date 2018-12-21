const authController = require('./../controllers/AuthController')  // this is require our newly created UserController
const UserRequest = require('./../requests/UserRequest');

module.exports = (router) => {
    router
        .route('/auth/login').post(UserRequest.validateLogin, authController.login)

	router
        .route('/auth/user').get(authController.checkToken)    
}
