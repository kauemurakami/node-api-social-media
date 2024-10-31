var express = require("express")
var postsRouter = express.Router()
const controller = require('./controller')
const { user_authenticated } = require("../../core/middlewares/auth_middleware")


postsRouter
.route('/')
.post(user_authenticated, controller.post)
.get(user_authenticated, controller.posts)
.delete(user_authenticated, controller.delete)




module.exports = postsRouter
