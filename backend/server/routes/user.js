// var JwtAuthMiddleware = require("./../Middlewares/JwtAuthMiddleware")
const UserController = require('./../controllers/UserController') 
const usercontroller = new UserController();

module.exports = (router) => {

    /**
     * get a user
     */
    router
        .route('/user/:id')
        .get(usercontroller.getUser)

    /**
     * adds a user
     */
    // router
    //     .route('/user')
    //     .post(usercontroller.addUser)


	// router
 //        .route('/users/')
 //        .get(getuser)
    router.route('/users').get((...args) => {
        usercontroller.getAllUsers(...args)
    });

}