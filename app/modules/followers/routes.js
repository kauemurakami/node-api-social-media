var express = require("express")
var followersRouter = express.Router()
const controller = require('./controller')
const { user_authenticated } = require("../../core/middlewares/auth_middleware")

followersRouter
  .route('/')
  .post(user_authenticated, controller.follow)
  .get(user_authenticated, controller.followers)
  .delete(user_authenticated, controller.unfollow)

followersRouter
  .route('/following')
  .get(user_authenticated, controller.following)

module.exports = followersRouter
