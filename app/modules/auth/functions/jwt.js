const jwt = require('jsonwebtoken');
const launch_error = require('../../../core/errors/launch_error');
const env = require('dotenv').config()
const PRIVATE_KEY = process.env.PRIVATE_KEY

function jwtSign(entries) {
  const token = jwt.sign(entries, PRIVATE_KEY);
  return token
}

function jwtVerify(token) {

  try {
    var decoded = jwt.verify(token, PRIVATE_KEY)
    if(decoded){
      return true
    }
    return false
  } catch (error) {
    return false
  }
  // launch_error('Erro ao validar sessão, por favor, tente novamente ou entre em contato com suporte.')

}
module.exports = { jwtSign, jwtVerify }
