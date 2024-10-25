const express = require("express");
const routes = express.Router();

const usersRoutes = require('../modules/users/routes')

routes.use('/auth', usersRoutes)

module.exports = routes
