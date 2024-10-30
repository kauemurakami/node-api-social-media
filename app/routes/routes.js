const express = require("express");
const routes = express.Router();

const usersRoutes = require('../modules/users/routes');
const authRouter = require("../modules/auth/routes");

routes.use('/auth', authRouter)
routes.use('/user', usersRoutes)

module.exports = routes
