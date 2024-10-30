const express = require("express");
const routes = express.Router();

const usersRoutes = require('../modules/users/routes');
const authRouter = require("../modules/auth/routes");
const followersRouter = require("../modules/followers/routes");
routes.use('/auth', authRouter)
routes.use('/user', usersRoutes)
routes.use('/followers', followersRouter)

module.exports = routes
