const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const launch_error = require('../errors/launch_error')

module.exports = {
  user_authenticated : (req, res, next)  => {
    if(!req.headers.authorization){
      launch_error('Forneça o token de autenticação.', 403)
    }
   jwt.verify(req.headers.authorization, process.env.PRIVATE_KEY, (err, decoded) => {
      if(err){
        launch_error([err], 403)
      }else{
        next()
      }
   })
}}


