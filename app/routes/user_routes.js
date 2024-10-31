const express = require("express");
const routes = express.Router();

const followersRouter = require("../modules/followers/routes")
const postsRouter = require("../modules/posts/routes")
const usersRouter = require("../modules/users/routes")

routes.use('/posts', postsRouter)
routes.use('/followers', followersRouter)
routes.use('/', usersRouter)

module.exports = routes
