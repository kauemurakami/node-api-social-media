var express = require("express")
var authRouter = express.Router()
const controller = require('./controller')


authRouter
.route('/signup')
.post(controller.signup)

authRouter
.route('/signin')
.post(controller.login)


module.exports = authRouter
