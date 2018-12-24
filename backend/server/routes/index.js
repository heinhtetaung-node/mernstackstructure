const user = require('./user')
// const post = require('./post')
const auth = require('./auth')
// const tag = require('./tag')
const message = require('./message')

const newroute = require('./new')
module.exports = (router) => {
    user(router)
    
    // post(router)
    auth(router)
    // tag(router)
    message(router)
    newroute(router)
}