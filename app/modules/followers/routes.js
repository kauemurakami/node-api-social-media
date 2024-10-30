var express = require("express")
var followersRouter = express.Router()
const controller = require('./controller')
const { user_authenticated } = require("../../core/middlewares/auth_middleware")

followersRouter
  .route('/')
  .post(user_authenticated, controller.follow)
  .delete(user_authenticated, controller.unfollow)

module.exports = followersRouter
