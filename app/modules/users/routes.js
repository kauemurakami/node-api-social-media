var express = require("express")

var usersRouter = express.Router()
const controller = require('./controller')


usersRouter
.route('/signup')
.post(controller.createUser)

module.exports = usersRouter
